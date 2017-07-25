package com.Indent.controller;

import java.io.IOException;
import java.io.PrintWriter;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.Indent.service.OrderService;
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
	
	// 冯雄飞
			
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
			//用户退出
			@RequestMapping("loginoff.action")
			public ModelAndView loginoff(HttpServletRequest request, HttpServletResponse response,Model model) throws ServletException, IOException {
				
				return new ModelAndView("login");
			}
			//跳转用户订单页面
			@RequestMapping("myorder.action")
			public ModelAndView myorder(HttpServletRequest request, HttpServletResponse response,Model model) throws IOException {
				HttpSession session = request.getSession();
				t_user=(T_user) session.getAttribute("t_user");
				String id=t_user.getId();
				System.out.println(id);
				T_food t_food=null;
				List<T_order> order =orderService.selectmyorder(id);
				System.out.println(order);				
				ModelAndView modelAndView = new ModelAndView();
				modelAndView.setViewName("myorder");
				modelAndView.addObject("order", order);
				return modelAndView;
								
				 
				
			}
}
