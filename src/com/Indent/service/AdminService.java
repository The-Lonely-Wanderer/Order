package com.Indent.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Indent.dao.T_adminMapper;
import com.Indent.vo.T_admin;
import com.sun.org.apache.xml.internal.resolver.helpers.PublicId;

@Service
public class AdminService{

	@Autowired
	private T_adminMapper t_adminMapper;
	
	
	public T_adminMapper getT_adminMapper() {
		return t_adminMapper;
	}

	public void setT_adminMapper(T_adminMapper t_adminMapper) {
		this.t_adminMapper = t_adminMapper;
	}

	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_adminMapper.deleteByPrimaryKey(id);
	}

	
	public int insert(T_admin record) {
		// TODO Auto-generated method stub
		return t_adminMapper.insert(record);
	}

	
	public int insertSelective(T_admin record) {
		// TODO Auto-generated method stub
		return t_adminMapper.insertSelective(record);
	}

	
	public T_admin selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_adminMapper.selectByPrimaryKey(id);
	}

	
	public int updateByPrimaryKeySelective(T_admin record) {
		// TODO Auto-generated method stub
		return t_adminMapper.updateByPrimaryKeySelective(record);
	}


	public int updateByPrimaryKey(T_admin record) {
		// TODO Auto-generated method stub
		return t_adminMapper.updateByPrimaryKey(record);
	}
	public T_admin selectByobject(T_admin obj){
	return t_adminMapper.selectByobject(obj);
	}
}
