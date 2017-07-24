package com.Indent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Indent.dao.T_foodMapper;
import com.Indent.dao.T_shoppMapper;
import com.Indent.vo.T_food;
@Service
public class ShoppService {
	@Autowired
	private T_shoppMapper t_shoppMapper;
	public int getInsertByName(T_food m_user) {
		
		return t_shoppMapper.getInsertByName(m_user);
	}
	//查寻客户购物车功能
	public List<T_food> getSelectShoppByName(String user_tel) {
		
		return t_shoppMapper.getSelectShoppByName(user_tel);
	}
//	购物车点击删除按钮事件
	public int getDelectByName(String id) {
		
		return t_shoppMapper.getDelectByName(id);
	}

}
