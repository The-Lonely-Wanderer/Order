package com.Indent.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Indent.dao.T_orderMapper;
import com.Indent.vo.T_order;
@Service
public class OrderService{
	@Autowired
	private T_orderMapper t_orderMapper;
	
	public T_orderMapper getT_orderMapper() {
		return t_orderMapper;
	}

	public void setT_orderMapper(T_orderMapper t_orderMapper) {
		this.t_orderMapper = t_orderMapper;
	}

	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_orderMapper.deleteByPrimaryKey(id);
	}

	public int insert(T_order record) {
		// TODO Auto-generated method stub
		return t_orderMapper.insert(record);
	}

	public int insertSelective(T_order record) {
		// TODO Auto-generated method stub
		return t_orderMapper.insertSelective(record);
	}

	public T_order selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_orderMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(T_order record) {
		// TODO Auto-generated method stub
		return t_orderMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(T_order record) {
		// TODO Auto-generated method stub
		return t_orderMapper.updateByPrimaryKey(record);
	}
	public List<T_order> selectByAll(){
		return t_orderMapper.selectByAll();
	}

	public List<T_order> selectmyorder(String id) {
		// TODO Auto-generated method stub
		return t_orderMapper.selectmyorder(id);
	}

	public List<T_order> selectByAllByName(String username) {
		// TODO Auto-generated method stub
		return t_orderMapper.selectByAllByName(username);
	}
}
