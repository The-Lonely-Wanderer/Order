package com.Indent.dao;

import java.util.List;

import com.Indent.vo.T_food;

public interface T_foodMapper {
	int deleteByPrimaryKey(String id);

	int insert(T_food record);

	int insertSelective(T_food record);

	T_food selectByPrimaryKey(String id);

	int updateByPrimaryKeySelective(T_food record);

	int updateByPrimaryKey(T_food record);

	List<T_food> selectByAll();

	List<T_food> getUserByName(String id);

	T_food getOneByName(String id);
	//共有几页的分页查询
	List<T_food> getYeShuByName(String id);
	//下一页
	List<T_food> getFenByName(String id, int begin, int end);

	List<T_food> selectByName(String foodname);
}