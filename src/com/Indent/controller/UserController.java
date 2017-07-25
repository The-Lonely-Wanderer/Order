package com.Indent.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.Indent.service.OrderService;
import com.Indent.service.UserService;
import com.Indent.until.Translate;
import com.Indent.vo.T_food;
import com.Indent.vo.T_order;
import com.Indent.vo.T_user;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@Controller
public class UserController {
	@Resource
	private T_user t_user;

	public T_user getT_user() {
		return t_user;
	}

	public void setT_user(T_user t_user) {
		this.t_user = t_user;
	}

	@Resource
	private JSONArray jsonArray;
	@Resource
	private JSONObject jsonObject;

	@Resource
	private UserService us;

	public UserService getUs() {
		return us;
	}

	public void setUs(UserService us) {
		this.us = us;
	}

	@Resource
	private OrderService orderService;

	public OrderService getOrderService() {
		return orderService;
	}

	public void setOrderService(OrderService orderService) {
		this.orderService = orderService;
	}

	@Resource
	private Translate tr;

	public Translate getTr() {
		return tr;
	}

	public void setTr(Translate tr) {
		this.tr = tr;
	}

	// 跳转用户注册页面
	@RequestMapping("userregist.action")
	public ModelAndView userregist(HttpServletRequest request, HttpServletResponse response) {
		return new ModelAndView("register");
	}

	// 跳转用户登录页面
	@RequestMapping("userlogin1.action")
	public ModelAndView userlogin1(HttpServletRequest request, HttpServletResponse response) {
		return new ModelAndView("login");
	}

	// 跳转到用户基本资料页面
	@RequestMapping("userbiao.action")
	public ModelAndView userbiao(HttpServletRequest request, HttpServletResponse response) {
		return new ModelAndView("UserBiao");
	}

	// 跳转用户点评页面
	@RequestMapping("mymessage.action")
	public ModelAndView mymessage(HttpServletRequest request, HttpServletResponse response) {
		return new ModelAndView("mymessage");
	}

	// 注册
	@RequestMapping("/register.action")
	public ModelAndView userregist(String password2, T_user user, Model model) {
		String username = user.getUsername();
		String tel = user.getTel();
		String password = user.getPassword();
		String repassword = password2;
		System.out.println(tel);
		ModelAndView mav = new ModelAndView();
		if (username != null && password != "" && password.equals(repassword)) {
			try {
				user.setId(tr.getUUID());
				user.setCreateTime(new Date());
				user.setPassword(tr.getMD5(password));
				user.setTel(tel);
				user.setUsername(username);
				model.addAttribute("user", user);
				int a = us.usserregist(user);
				if (a > 0) {
					mav.setViewName("login");
				} else {
					mav.setViewName("register");
				}
			} catch (UnsupportedEncodingException e) {

				e.printStackTrace();
			}
		}
		return mav;
	}

	// 跳转用户订单页面
	// @RequestMapping("myorder.action")
	// public ModelAndView myorder(HttpServletRequest request,
	// HttpServletResponse response) {
	// return new ModelAndView("myorder");
	// }

	// 登录

	// 登录
	@RequestMapping("/userlogin.action")
	public String userlogin(@ModelAttribute("user") T_user t_user, Model model, HttpServletRequest request,
			HttpServletResponse response) {
		t_user.setLoginTime(new Date());
		try {
			t_user.setPassword(tr.getMD5(t_user.getPassword()));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		if (null == t_user.getUsername() || "".equals(t_user.getUsername()) || null == t_user.getPassword()
				|| "".equals(t_user.getPassword())) {

		} else {
			t_user = us.userlogin(t_user);
			if (t_user != null) {
				HttpSession session = request.getSession();
				session.setAttribute("t_user", t_user);
				model.addAttribute("t_user", t_user);
				return "UserBiao";
			} else {
				return "login";
			}
		}
		return "login";

	}
	// 修改个人信息

	@RequestMapping("/updateuser.action")
	public String updateuser(HttpServletRequest request, HttpServletResponse response, Model model)
			throws UnsupportedEncodingException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		t_user.setUsername(request.getParameter("username"));
		t_user.setRealname(request.getParameter("realname"));
		t_user.setSex(request.getParameter("sex"));
		t_user.setId(request.getParameter("id"));
		t_user.setAddress(request.getParameter("address"));
		String password = request.getParameter("password");
		t_user.setPassword(tr.getMD5(password));
		System.out.println(t_user);
		if ((t_user.getUsername()) == null || "".equals(t_user.getUsername())) {
		} else {
			Boolean b = us.updateuser(t_user);
			System.out.println(b);
			t_user = us.true_updateuser(t_user);
			if (b) {
				String message = "修改信息成功";
				model.addAttribute("t_user", t_user);
				model.addAttribute("message", message);
				return "UserBiao";
			} else {
				String message = "修改信息失败,请重新修改！";
				model.addAttribute("t_user", t_user);
				model.addAttribute("message", message);
				return "UserBiao";
			}
		}
		return "UserBiao";
	}

	// 异步刷新用户名
	@RequestMapping("/testusername.action")
	public void testusername(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String username = request.getParameter("username");
		System.out.println(username);
		t_user = us.testusername(username);
		String message = null;
		if (t_user != null) {
			message = "账号已注册，请登录";
		} else {
			message = "账号可以使用";
		}
		jsonObject.put("message", message);
		jsonArray.add(jsonObject);

		// 获得输出流
		PrintWriter out = response.getWriter();
		// 通过 out 对象将 jsonArray 传到前端页面
		out.println(jsonArray);
		out.close();
	}

	// 异步刷手机号
	@RequestMapping("/testtel.action")
	public void testtel(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String tel = request.getParameter("tel");
		t_user = us.testtel(tel);
		String message = null;
		if (t_user != null) {
			message = "手机号已注册，请登录";
		} else {
			message = "手机号可以使用";
		}
		jsonObject.put("message", message);
		jsonArray.add(jsonObject);

		// 获得输出流
		PrintWriter out = response.getWriter();
		// 通过 out 对象将 jsonArray 传到前端页面
		out.println(jsonArray);
		out.close();
	}

	// 异步刷新查看密码输入是否正确
	@RequestMapping("/testpassword.action")
	public void testpassword(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");

		String tel = request.getParameter("tel");
		String password = tr.getMD5(request.getParameter("password"));

		t_user = us.testpassword(tel, password);
		String message = null;
		if (t_user != null) {
			message = "密码正确";
		} else {
			message = "原密码错误";
		}
		jsonObject.put("message", message);
		jsonArray.add(jsonObject);

		// 获得输出流
		PrintWriter out = response.getWriter();
		// 通过 out 对象将 jsonArray 传到前端页面
		out.println(jsonArray);
		out.close();
	}

	// 用户退出
	@RequestMapping("loginoff.action")
	public ModelAndView loginoff(HttpServletRequest request, HttpServletResponse response, Model model)
			throws ServletException, IOException {

		return new ModelAndView("login");
	}

	// 跳转用户订单页面
	@RequestMapping("myorder.action")
	public ModelAndView myorder(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		HttpSession session = request.getSession();
		t_user = (T_user) session.getAttribute("t_user");
		String id = t_user.getId();
		System.out.println(id);
		T_food t_food = null;
		List<T_order> order = orderService.selectmyorder(id);
		System.out.println(order);
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("myorder");
		modelAndView.addObject("order", order);
		return modelAndView;

	}
}
