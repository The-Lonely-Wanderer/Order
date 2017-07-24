package com.Indent.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Indent.dao.T_eamilMapper;
import com.Indent.vo.T_eamil;
@Service
public class EamilService{
	@Autowired
	private T_eamilMapper t_eamilMapper;
	
	public T_eamilMapper getT_eamilMapper() {
		return t_eamilMapper;
	}

	public void setT_eamilMapper(T_eamilMapper t_eamilMapper) {
		this.t_eamilMapper = t_eamilMapper;
	}

	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_eamilMapper.deleteByPrimaryKey(id);
	}
	public int insert(T_eamil record) {
		// TODO Auto-generated method stub
		return t_eamilMapper.insert(record);
	}

	public int insertSelective(T_eamil record) {
		// TODO Auto-generated method stub
		return t_eamilMapper.insertSelective(record);
	}
	public T_eamil selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_eamilMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(T_eamil record) {
		// TODO Auto-generated method stub
		return t_eamilMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(T_eamil record) {
		// TODO Auto-generated method stub
		return t_eamilMapper.updateByPrimaryKey(record);
	}
	public List<T_eamil> selectByPrimaryKeytolist(){
		return t_eamilMapper.selectByPrimaryKeytolist();
	}

}
