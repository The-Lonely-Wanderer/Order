package com.Indent.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.Indent.dao.T_userMapper;
import com.Indent.vo.T_user;



@Component
public class SousuoService {
	@Resource
	private T_userMapper dao;
	@Resource
	private T_user user;

	public T_user getUser() {
		return user;
	}

	public void setUser(T_user user) {
		this.user = user;
	}

	public T_userMapper getDao() {
		return dao;
	}

	public void setDao(T_userMapper dao) {
		this.dao = dao;
	}

	public List<T_user> getUserByName(String shanjianame) {
		System.out.println("service层"+shanjianame);
//		 List<T_user> user =  dao.getUserByName(shanjianame);
		 return null;
		
	
	}

	public static List<T_user> getUserByName() {
		// TODO Auto-generated method stub
		return null;
	}
}
