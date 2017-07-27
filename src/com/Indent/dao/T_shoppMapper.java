package com.Indent.dao;

import java.util.List;

import com.Indent.vo.T_food;

public interface T_shoppMapper {

	int getInsertByName(T_food m_user);

	// 查寻客户购物车功能
	List<T_food> getSelectShoppByName(String user_tel);

	// 购物车点击删除按钮事件
	int getDelectByName(String id);

	//购物车更新order_id字段
	int getGouwuche(String uuid, String tel);

}
