package com.Indent.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Indent.dao.T_catelogMapper;
import com.Indent.sqlsessionfactory.Sqlsessionfactorys;
import com.Indent.vo.T_catelog;
@Service
public class CatelogService{

	@Autowired
	private T_catelogMapper t_catelogMapper;
	
	public T_catelogMapper getT_catelogMapper() {
		return t_catelogMapper;
	}

	public void setT_catelogMapper(T_catelogMapper t_catelogMapper) {
		this.t_catelogMapper = t_catelogMapper;
	}

	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_catelogMapper.deleteByPrimaryKey(id);
	}

	public int insert(T_catelog record) {
		// TODO Auto-generated method stub
		return t_catelogMapper.insert(record);
	}

	public int insertSelective(T_catelog record) {
		// TODO Auto-generated method stub
		return t_catelogMapper.insertSelective(record);
	}

	public T_catelog selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_catelogMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(T_catelog record) {
		// TODO Auto-generated method stub
		return t_catelogMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(T_catelog record) {
		// TODO Auto-generated method stub
		return t_catelogMapper.updateByPrimaryKey(record);
	}
	public List<T_catelog> selectByAll() {
		// TODO Auto-generated method stub
		return t_catelogMapper.selectByAll();
	}

	public List<T_catelog> selectByinfo(String catelogname) {
		// TODO Auto-generated method stub
		return t_catelogMapper.selectByinfo(catelogname);
	}

}
