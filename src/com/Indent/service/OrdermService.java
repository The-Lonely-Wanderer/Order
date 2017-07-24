package com.Indent.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Indent.dao.T_ordermMapper;
import com.Indent.vo.T_orderm;
@Service
public class OrdermService{
	@Autowired
	private T_ordermMapper t_ordermMapper;
	
	public T_ordermMapper getT_ordermMapper() {
		return t_ordermMapper;
	}

	public void setT_ordermMapper(T_ordermMapper t_ordermMapper) {
		this.t_ordermMapper = t_ordermMapper;
	}

	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_ordermMapper.deleteByPrimaryKey(id);
	}

	public int insert(T_orderm record) {
		// TODO Auto-generated method stub
		return t_ordermMapper.insert(record);
	}

	public int insertSelective(T_orderm record) {
		// TODO Auto-generated method stub
		return t_ordermMapper.insertSelective(record);
	}

	public T_orderm selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_ordermMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(T_orderm record) {
		// TODO Auto-generated method stub
		return t_ordermMapper.updateByPrimaryKeySelective(record);
	}
	public int updateByPrimaryKey(T_orderm record) {
		// TODO Auto-generated method stub
		return t_ordermMapper.updateByPrimaryKey(record);
	}

}
