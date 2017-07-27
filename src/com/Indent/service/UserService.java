package com.Indent.service;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Indent.dao.T_userMapper;
import com.Indent.vo.T_admin;
import com.Indent.vo.T_user;
@Component
public class UserService {
	
	@Resource
	private T_userMapper t_userMapper;

	public T_userMapper getT_userMapper() {
		return t_userMapper;
	}

	public void setT_userMapper(T_userMapper t_userMapper) {
		this.t_userMapper = t_userMapper;
	}


	public int usserregist(T_user user) {
		
		return t_userMapper.usserregist(user);
	}

	public T_user userlogin(T_user user) {
		
		return t_userMapper.userlogin(user);
	}


	public void updatelogintime(T_user user) {		
		t_userMapper.updatelogintime(user);
	}

	public boolean updatepassword(String tel, String oldpassword, String newpassword) {
		
		return t_userMapper.updatepassword(tel,oldpassword,newpassword);
	}

	public T_user testpassword(String id, String password) {
		
		return t_userMapper.testpassword(id,password);
	}

	public T_user true_updatepassword(String tel, String newpassword) {
		
		return t_userMapper.true_updatepassword(tel,newpassword);
	}

	public T_user false_updatepassword(String tel, String oldpassword) {
		return t_userMapper.false_updatepassword(tel,oldpassword);
	}

	public Boolean updateuser(T_user t_user) {
		// TODO Auto-generated method stub
		return t_userMapper.updateuser(t_user);
	}

	public T_user true_updateuser(T_user t_user) {
		
		return t_userMapper.true_updateuser(t_user);
	}
	public List<T_user> selectAll() {
		// TODO Auto-generated method stub
		return t_userMapper.selectAll();
	}

	public int updateByPrimaryKeySelective(T_user t_user) {
		// TODO Auto-generated method stub
		return t_userMapper.updateByPrimaryKeySelective(t_user);
	}
	public int deleteByPrimaryKey(String id){
		
		return t_userMapper.deleteByPrimaryKey(id);
	}

	public T_user testusername(String username) {
		
		return t_userMapper.testusername(username);
	}

	public T_user testtel(String tel) {
		
		return t_userMapper.testtel(tel);
	}

	public List<T_user> selectByName(String realname) {
		// TODO Auto-generated method stub
		return t_userMapper.selectByName(realname);

	}

	public void updatetime(T_user t_user) {
		t_userMapper.updatetime(t_user);
		
	}

	public boolean findpassword(String tel, String username, String password) {
		
		return t_userMapper.findpassword(tel,username,password);
	}
}
