package com.Indent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.Indent.dao.T_foodMapper;
import com.Indent.vo.T_food;

@Service
public class FoodService {
	@Autowired
	private T_foodMapper t_foodMapper;

	public T_foodMapper getT_foodMapper() {
		return t_foodMapper;
	}

	public void setT_foodMapper(T_foodMapper t_foodMapper) {
		this.t_foodMapper = t_foodMapper;
	}

	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_foodMapper.deleteByPrimaryKey(id);
	}

	public int insert(T_food record) {
		// TODO Auto-generated method stub
		return t_foodMapper.insert(record);
	}

	public int insertSelective(T_food record) {
		// TODO Auto-generated method stub
		return t_foodMapper.insertSelective(record);
	}

	public T_food selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_foodMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(T_food record) {
		// TODO Auto-generated method stub
		return t_foodMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(T_food record) {
		// TODO Auto-generated method stub
		return t_foodMapper.updateByPrimaryKey(record);

	}

	public List<T_food> selectByAll() {
		// TODO Auto-generated method stub
		return t_foodMapper.selectByAll();
	}

	public List<T_food> getUserByName(String id) {
		// TODO Auto-generated method stub
		return t_foodMapper.getUserByName(id);
	}

	public T_food getOneByName(String id) {
		// TODO Auto-generated method stub
		return t_foodMapper.getOneByName(id);
	}


	// 共有页数的查询
	public List<T_food> getYeShuByName(String id) {
		
		return t_foodMapper.getYeShuByName(id);
	}
	//下一页
	public List<T_food> getFenByName(String id, int begin, int end) {
		System.out.println(id);
		System.out.println(begin);
		System.out.println(end);
		
		return t_foodMapper.getFenByName(id,begin,end);
	}


	public List<T_food> selectByName(String foodname) {
		// TODO Auto-generated method stub
		return t_foodMapper.selectByName(foodname);
	}

	
}
