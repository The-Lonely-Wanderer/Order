package com.Indent.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;
import org.omg.Messaging.SyncScopeHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import com.Indent.vo.T_user;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import com.Indent.service.AdminService;
import com.Indent.service.CatelogService;
import com.Indent.service.EamilService;
import com.Indent.service.FoodService;

import com.Indent.service.ShoppService;

import com.Indent.service.MessageService;
import com.Indent.service.NoticeService;
import com.Indent.service.OrderService;

import com.Indent.service.UserService;
import com.Indent.until.Translate;
import com.Indent.vo.T_admin;
import com.Indent.vo.T_catelog;
import com.Indent.vo.T_eamil;
import com.Indent.vo.T_food;
import com.Indent.vo.T_message;
import com.Indent.vo.T_notice;
import com.Indent.vo.T_order;

@Controller
// @RequestMapping(value="/hello")
public class LoginduoController {
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
	@Resource
	private T_food m_user;
	@Resource
	private ShoppService shoppService;

	// 柯蒙蒙
	// 登录
	@RequestMapping(value = "/adminlogin.action")
	public ModelAndView adminlogin(HttpServletRequest request, HttpServletResponse response) {

		return new ModelAndView("adminlogin");
	}

	@RequestMapping(value = "/loginto.action")
	public ModelAndView loginto(T_admin t_admin, HttpServletRequest request, HttpServletResponse response) {
		T_admin t_admins = adminService.selectByobject(t_admin);
		ModelAndView modelAndView = new ModelAndView();
		if (t_admins != null) {
			id = t_admins.getId();
			modelAndView.setViewName("index");
			modelAndView.addObject("t_admins", t_admins);
		} else {
			modelAndView.setViewName("adminlogin");
			modelAndView.addObject("message", "登陆失败 ,检查用户名或密码");
		}
		return modelAndView;
	}

	// 菜品种类管理
	@Resource
	private CatelogService catelogService;

	public CatelogService getCatelogService() {
		return catelogService;
	}

	public void setCatelogService(CatelogService catelogService) {
		this.catelogService = catelogService;
	}

	@RequestMapping(value = "/kind.action")
	public ModelAndView kind(HttpServletRequest request, HttpServletResponse response) {
		List<T_catelog> cateloglist = catelogService.selectByAll();
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("cpzlgl");
		modelAndView.addObject("cateloglist", cateloglist);
		return modelAndView;
	}

	// 添加菜品
	@RequestMapping(value = "/addcatelog.action")
	public void addcatelog(T_catelog t_catelog, HttpServletRequest request, HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		t_catelog.setId(tr.getUUID());
		int flage = catelogService.insert(t_catelog);
		if (flage > 0) {
			List<T_catelog> cateloglist = catelogService.selectByAll();
			jsonObject.put("cateloglist", cateloglist);
			jsonArray.add(jsonObject);

			PrintWriter out;
			try {
				out = response.getWriter();
				out.println(jsonArray);
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}

	}

	// 菜品删除
	@RequestMapping(value = "/delecatelog.action")
	public void delecatelog(String id, HttpServletRequest request, HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		int flage = catelogService.deleteByPrimaryKey(id);

		if (flage > 0) {
			List<T_catelog> cateloglist = catelogService.selectByAll();
			jsonObject.put("cateloglist", cateloglist);
			jsonArray.add(jsonObject);
			PrintWriter out;
			try {
				out = response.getWriter();
				out.println(jsonArray);
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
	}

	// 菜品修改
	@RequestMapping(value = "/catelogchange.action")
	public void catelogchange(T_catelog t_catelog, HttpServletRequest request, HttpServletResponse response) {

		int i = catelogService.updateByPrimaryKeySelective(t_catelog);
		if (i > 0) {
			jsonObject.put("i", i);
			jsonArray.add(jsonObject);
			PrintWriter out;
			try {
				out = response.getWriter();
				out.println(jsonArray);
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	// 菜品种类查询
	@RequestMapping(value = "/selectcp.action")
	public ModelAndView selectcp(String catelogname, HttpServletRequest request, HttpServletResponse response) {
		List<T_catelog> cateloglist = catelogService.selectByinfo(catelogname);
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("cateloglist", cateloglist);
		modelAndView.addObject("size", cateloglist.size());
		modelAndView.setViewName("cpzlgl");
		return modelAndView;
	}

	// 会员管理
	@Resource
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(value = "/member.action")
	public ModelAndView member() {
		List<T_user> userlist = userService.selectAll();
		ModelAndView modelAndView = new ModelAndView();
		if (userlist.size() > 0) {
			modelAndView.setViewName("member");
			modelAndView.addObject("userlist", userlist);
		} else {
			modelAndView.setViewName("member");
			modelAndView.addObject("message", "暂无用户注册!");
		}
		return modelAndView;
	}

	// 会员修改-->注释部分为请求方式拿值
	// @Resource
	// private T_userMapper t_userMapper;
	@RequestMapping(value = "/updatememberaction.action")
	public void updatememberaction(T_user t_user, HttpServletRequest request, HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		int falge = us.updateByPrimaryKeySelective(t_user);
		// ModelAndView modelAndView = new ModelAndView();
		if (falge > 0) {
			List<T_user> userlist = us.selectAll();

			// modelAndView.addObject("userlist", userlist);
			// modelAndView.setViewName("member");
			jsonObject.put("userlist", userlist);
			jsonArray.add(jsonObject);
			PrintWriter out;
			try {
				out = response.getWriter();
				out.println(jsonArray);
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		// return modelAndView;
	}

	// 会员删除
	@RequestMapping(value = "/deleuser.action")
	public void deleuser(String id, HttpServletRequest request, HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		int falge = us.deleteByPrimaryKey(id);
		System.out.println(id);
		if (falge > 0) {
			System.out.println("falge:" + falge);
			List<T_user> userlist = us.selectAll();
			// modelAndView.addObject("userlist", userlist);
			// modelAndView.setViewName("member");
			System.out.println(userlist);
			jsonObject.put("userlist", userlist);
			jsonArray.add(jsonObject);
			PrintWriter out;
			try {
				out = response.getWriter();
				out.println(jsonArray);
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
	}

	// 会员查询
	@RequestMapping(value = "/selects.action")
	public ModelAndView selects(String realname, HttpServletRequest request, HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");

		List<T_user> t_user = us.selectByName(realname);
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("member");
		modelAndView.addObject("userlist", t_user);
		modelAndView.addObject("size", t_user.size());
		return modelAndView;
	}

	// 管理员管理
	@Resource
	private AdminService adminService;

	public AdminService getAdminService() {
		return adminService;
	}

	public void setAdminService(AdminService adminService) {
		this.adminService = adminService;
	}

	@RequestMapping(value = "/selectalladminservlet.action")
	public ModelAndView selectalladminservlet() {
		T_admin t_admin = adminService.selectByPrimaryKey(id);
		ModelAndView modelAndView = null;
		if (t_admin != null) {
			modelAndView = new ModelAndView("index-admin");
			modelAndView.addObject("t_admin", t_admin);
		}
		return modelAndView;
	}

	// 管理员更新
	@RequestMapping(value = "/updateadminaction.action")
	public void updateadminaction(T_admin t_admin, HttpServletRequest request, HttpServletResponse response) {
		int flage = adminService.updateByPrimaryKey(t_admin);
		if (flage > 0) {
			T_admin t_admins = adminService.selectByPrimaryKey(id);
			jsonObject.put("t_admins", t_admins);
			jsonArray.add(t_admins);
			try {
				PrintWriter out = response.getWriter();
				out.println(jsonArray);
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();

			}
		}
	}

	// 菜品管理
	@Resource
	private FoodService foodService;

	public FoodService getFoodService() {
		return foodService;
	}

	public void setFoodService(FoodService foodService) {
		this.foodService = foodService;
	}

	@RequestMapping(value = "/dishmanager.action")
	public ModelAndView dishmanager(HttpServletRequest request, HttpServletResponse response) {

		List<T_food> foodlist = foodService.selectByAll();
		ModelAndView modelAndView = new ModelAndView();
		if (foodlist.size() > 0) {
			modelAndView.setViewName("dishmanager");
			modelAndView.addObject("foodlist", foodlist);
		} else {
			modelAndView.setViewName("dishmanager");
			modelAndView.addObject("message", "还没有添加美味哦,现在添加吧!");
		}
		return modelAndView;
	}

	// 菜品删除
	@RequestMapping(value = "/delefood.action")
	public void delefood(String id, HttpServletRequest request, HttpServletResponse response) {
		int flage = foodService.deleteByPrimaryKey(id);
		if (flage > 0) {
			jsonObject.put("flage", flage);
			jsonArray.add(jsonObject);
			try {
				PrintWriter out = response.getWriter();
				out.println(jsonArray);
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();

			}

		}

	}

	@Resource
	T_food t_food;

	// 上传图片MultipartFile(value = "photo", required = false) photo,,T_food t_food
	@RequestMapping(value = "/addfood.action")
	public ModelAndView addfood(@RequestParam MultipartFile photo, HttpServletRequest request, HttpServletResponse response)
			throws UnsupportedEncodingException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		ModelAndView modelAndView=new ModelAndView();
		try {
			String path = request.getSession(true).getServletContext().getRealPath("images/foodimage");
			String name = photo.getOriginalFilename();
			File file = new File(path, name);
			photo.transferTo(file);
			t_food.setId(tr.getUUID());
			t_food.setFoodname(request.getParameter("foodname"));
			t_food.setFoodinfo(request.getParameter("foodinfo"));
			t_food.setPhoto(name);
			t_food.setPrice(Double.parseDouble(request.getParameter("price")));
			int i=foodService.insertSelective(t_food);
			if(i>0){
				List<T_food> foodlist=foodService.selectByAll();
				modelAndView.setViewName("dishmanager");
				modelAndView.addObject("foodlist",foodlist);
			}  
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return modelAndView;
	}

	// 留言管理
	@Autowired
	private MessageService messageService;

	public MessageService getMessageService() {
		return messageService;
	}

	public void setMessageService(MessageService messageService) {
		this.messageService = messageService;
	}

	@RequestMapping(value = "/lygl.action")
	public ModelAndView lygl() {

		List<T_message> messageMappers = messageService.selectByAll();
		ModelAndView modelAndView = new ModelAndView();
		if (messageMappers.size() > 0) {
			modelAndView.setViewName("lygl");
			modelAndView.addObject("messageMappers", messageMappers);
		} else {
			modelAndView.setViewName("lygl");
			modelAndView.addObject("message", "暂无留言!");
		}
		return modelAndView;
	}

	// 公告管理

	@Autowired
	private NoticeService noticeService;

	public NoticeService getNoticeService() {
		return noticeService;
	}

	public void setNoticeService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}

	@RequestMapping(value = "/index-notice.action")
	public ModelAndView indexnotice() {

		List<T_notice> t_noticeslist = noticeService.selectByAll();
		ModelAndView modelAndView = new ModelAndView();

		if (t_noticeslist.size() > 0) {
			modelAndView.setViewName("index-notice");
			modelAndView.addObject("t_noticeslist", t_noticeslist);
		} else {

			modelAndView.setViewName("index-notice");
			modelAndView.addObject("message", "暂无公告!");
		}

		return modelAndView;
	}

	// 訂單管理
	@Resource
	private OrderService orderService;

	public OrderService getOrderService() {
		return orderService;
	}

	public void setOrderService(OrderService orderService) {
		this.orderService = orderService;
	}

	@RequestMapping(value = "/OrderManager.action")
	public ModelAndView OrderManager(HttpServletRequest request, HttpServletResponse response) {

		List<T_order> t_orderlist = orderService.selectByAll();// 商家id和时间
		ModelAndView modelAndView = new ModelAndView("OrderManager");
		if (t_orderlist.size() > 0) {
			modelAndView.setViewName("OrderManager");
			modelAndView.addObject("t_orderlist", t_orderlist);

		} else {
			modelAndView.setViewName("OrderManager");
			modelAndView.addObject("message", "暂无订单需要处理!");
		}

		return modelAndView;
	}

	// 管理員信箱

	@Resource
	private EamilService eamilService;

	public EamilService getEamilService() {
		return eamilService;
	}

	public void setEamilService(EamilService eamilService) {
		this.eamilService = eamilService;
	}

	@RequestMapping(value = "/index-admineamil.action")
	public ModelAndView indexadmineamil() {

		List<T_eamil> t_eamillist = eamilService.selectByPrimaryKeytolist();
		ModelAndView modelAndView = new ModelAndView();
		if (t_eamillist.size() > 0) {
			modelAndView.setViewName("index-admineamil");
			modelAndView.addObject("t_eamillist", t_eamillist);
		} else {

			modelAndView.setViewName("index-admineamil");
			modelAndView.addObject("message", "暂无邮件!");
		}

		return modelAndView;
	}

	// 冯雄飞
	@Resource
	private Translate tr;

	public UserService getUs() {
		return us;
	}

	public void setUs(UserService us) {
		this.us = us;
	}

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

	// 跳转用户订单页面
	@RequestMapping("myorder.action")
	public ModelAndView myorder(HttpServletRequest request, HttpServletResponse response) {
		return new ModelAndView("myorder");
	}

	// 跳转用户订单页面
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

}
