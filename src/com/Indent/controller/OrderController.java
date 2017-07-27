package com.Indent.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.Indent.service.FoodService;
import com.Indent.service.OrderService;
import com.Indent.service.ShoppService;
import com.Indent.service.UserService;
import com.Indent.until.Translate;
import com.Indent.vo.T_admin;
import com.Indent.vo.T_food;
import com.Indent.vo.T_order;
import com.Indent.vo.T_user;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@Controller
public class OrderController {
	@Resource
	private UserService us;
	@Resource
	private T_user t_user;

	public T_user getT_user() {
		return t_user;
	}

	public void setT_user(T_user t_user) {
		this.t_user = t_user;
	}

	static String id;// 解决多页面之间id传值问题;

	@Resource
	private JSONArray jsonArray;
	@Resource
	private JSONObject jsonObject;
	@Resource
	private FoodService footservice;
	// 主页面的搜索框方法

	@RequestMapping("/findGrade.action")

	public ModelAndView findGrade(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");

		String id = request.getParameter("i_id");
		List<T_food> user = footservice.getUserByName(id);
		// 页数的查询方法
		List<T_food> yeshu = footservice.getYeShuByName(id);
		int fen = yeshu.size();
		if (fen % 10 != 0) {
			fen = fen / 10 + 1;
		} else {
			fen = fen / 10;
		}
		// System.out.println(fen+"分页");
		jsonObject.put("gradelist", user);
		jsonObject.put("fen", fen);
		jsonArray.add(jsonObject);

		PrintWriter out = response.getWriter();
		out.println(jsonArray);
		out.close();

		return null;
	}

	// 点击购买事件

	@Resource
	private T_food m_user;
	@Resource
	private ShoppService shoppService;

	// 点击购买事件

	@RequestMapping("/gouMai.action")
	public ModelAndView gouMai(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		HttpSession session = request.getSession();
		t_user = (T_user) session.getAttribute("t_user");

		if (t_user != null) {
			String id = request.getParameter("id");
			T_food m_Food = footservice.getOneByName(id);
			m_user.setId(m_Food.getId());
			m_user.setFoodinfo(m_Food.getFoodinfo());
			m_user.setFoodname(m_Food.getFoodname());
			m_user.setPhoto(m_Food.getPhoto());
			m_user.setPrice(m_Food.getPrice());
			m_user.setTel(t_user.getTel());
			int i = shoppService.getInsertByName(m_user);
			// System.out.println(i);
			String message = null;
			if (i != 0) {
				// message = "添加成功";
				String user_tel = t_user.getTel();
				// System.out.println("用户的id" + user_tel);
				List<T_food> user = shoppService.getSelectShoppByName(user_tel);
				int tiao = user.size();
				jsonObject.put("tiao", tiao);
				jsonArray.add(jsonObject);

			} else {
				message = "添加失败";
			}
			jsonObject.put("message", message);
			jsonArray.add(jsonObject);

			PrintWriter out = response.getWriter();
			out.println(jsonArray);
			out.close();
		} else {
			String message = null;
			message = "请登陆！";
			jsonObject.put("message", message);
			jsonArray.add(jsonObject);

			PrintWriter out = response.getWriter();
			out.println(jsonArray);
			out.close();
		}

		return null;
	}

	@Resource
	private T_admin t_admin;

	// 登陆成功后从个人信息跳到主页面
	@RequestMapping("/Index.action")
	public String Index(HttpServletRequest request, HttpServletResponse response, Model model) {
		// System.out.println("1232321342421");

		HttpSession session = request.getSession();
		t_user = (T_user) session.getAttribute("t_user");
		// System.out.println(t_user+"对像");
		String name = t_user.getUsername();

		// System.out.println(name);
		model.addAttribute("name", name);
		// request.getParameter("");

		return "M_index";

	}

	// 购物车点击关注按钮事件
	@RequestMapping("/GouWuChe.action")
	public void GouWuChe(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		// System.out.println(11111111);
		HttpSession session = request.getSession();
		t_user = (T_user) session.getAttribute("t_user");
		String user_tel = t_user.getTel();
		// System.out.println("用户的id" + user_tel);
		List<T_food> user = shoppService.getSelectShoppByName(user_tel);
		double money = 0;
		for (T_food t_food : user) {
			// System.out.println("钱啊"+t_food.getPrice());
			money += t_food.getPrice();
			// System.out.println("总"+money);

		}
		int i = user.size();
		jsonObject.put("gradelist", user);
		jsonObject.put("money", money);
		jsonObject.put("i", i);
		jsonArray.add(jsonObject);

		PrintWriter out = response.getWriter();
		// System.out.println("测试"+jsonArray);
		out.println(jsonArray);
		out.close();
	}

	// 购物车点击删除按钮事件
	@RequestMapping("/goudelet.action")
	public void GouDelet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");

		String id = request.getParameter("id");
		// System.out.println("购物车删除"+id);

		int i = shoppService.getDelectByName(id);

		// System.out.println(i);
		String message = null;

		if (i != 0) {

			HttpSession session = request.getSession();
			t_user = (T_user) session.getAttribute("t_user");
			String user_tel = t_user.getTel();
			// System.out.println("用户的id" + user_tel);
			List<T_food> user = shoppService.getSelectShoppByName(user_tel);
			double moneyz = 0;
			for (T_food t_food : user) {
				// System.out.println("钱啊"+t_food.getPrice());
				moneyz += t_food.getPrice();
				// System.out.println("总"+money);

			}
			// session.setAttribute("money", money);
			// System.out.println(user);
			int i1 = user.size();
			jsonObject.put("gradelist", user);
			jsonObject.put("moneyz", moneyz);
			jsonObject.put("i1", i1);
			jsonArray.add(jsonObject);

			PrintWriter out = response.getWriter();
			out.println(jsonArray);
			out.close();

		} else {
			message = "删除失败";
		}
		jsonObject.put("message", message);
		jsonArray.add(jsonObject);

		PrintWriter out = response.getWriter();
		out.println(jsonArray);
		out.close();
	}


	// 上一页分页功能
	@RequestMapping("/fenyeshang.action")
	public void FenYeShang(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("00000000000001111111");
		String fen = request.getParameter("fen");
		System.out.println(fen + "connller分页");
	}

	// 下一页分页功能
	private int begin = 1;// 总页数页数
	private int star = 0;
	private int end = 0;// 到分的页数

	@RequestMapping("/xiayiye.action")
	public void XiaYiYer(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		begin++;
		// 页数的查询方法
		String id = request.getParameter("i_id");
		List<T_food> yeshu = footservice.getYeShuByName(id);
		int fen = yeshu.size();
		String message = null;
		if (fen % 10 != 0) {
			fen = fen / 10 + 1;
		} else {
			fen = fen / 10;
		}
		// System.out.println(fen+"++++++++++"+begin);
		if (begin <= fen) {
			end = begin * 10;
			star = end - 10;
			List<T_food> ye = footservice.getFenByName(id, star, end);
			System.out.println("分页查询" + ye);

			jsonObject.put("ye", ye);
			jsonObject.put("fen", fen);
			jsonArray.add(jsonObject);

			PrintWriter out = response.getWriter();
			out.println(jsonArray);
			out.close();
		} else {
			message = "已经是末尾了";
		}
		jsonObject.put("message", message);
		jsonArray.add(jsonObject);
		PrintWriter out = response.getWriter();
		out.println(jsonArray);
		out.close();

	}

	@Resource
	private Translate util;
	@Resource
	private Date dd;
	@Resource
	private OrderService m_order;
	@Resource
	private T_order t_order;
	@Resource
	private ModelAndView mod;
	@Resource
	private T_order t;

	@RequestMapping("/jiaoqian.action")
	public void Jiaoqian(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		// 总价钱
		String z_id = request.getParameter("z_id");
		// 系统时间
		String d = util.time(dd);
		// session 获取用户的user_id的值和手机号码
		HttpSession session = request.getSession();
		t_user = (T_user) session.getAttribute("t_user");
		String user_id = t_user.getId();
		String tel = t_user.getTel();
		// uuid自动生成的
		String uuid = util.getUUID();
		// 去后端数据库

		int god = m_order.Gouwuche(uuid, z_id, 0, d, user_id, tel);
		if (god != 0) {

			t_order = m_order.hui_gouwu(uuid);
//			System.out.println(t_order);
		}
		String dingdanid = t_order.getId();
		Double zongjiaqian = t_order.getPrices();
//		System.out.println(dingdanid);
//		System.out.println(zongjiaqian);
		jsonObject.put("dingdanid", dingdanid);
		jsonObject.put("zongjiaqian", zongjiaqian);
		jsonArray.add(jsonObject);
		PrintWriter out = response.getWriter();
		out.println(jsonArray);
		out.close();

		// System.out.println("成功的接受到点击");
		// System.out.println(d);
		// System.out.println(user_id);
		// System.out.println(uuid);
		// System.out.println(god);

	}

		
	}
