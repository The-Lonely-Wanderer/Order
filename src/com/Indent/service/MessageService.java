package com.Indent.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Indent.dao.T_messageMapper;
import com.Indent.vo.T_message;
@Service
public class MessageService{
	@Autowired
	private T_messageMapper t_messageMapper;
	
	
	public T_messageMapper getT_messageMapper() {
		return t_messageMapper;
	}

	public void setT_messageMapper(T_messageMapper t_messageMapper) {
		this.t_messageMapper = t_messageMapper;
	}

	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_messageMapper.deleteByPrimaryKey(id);
	}

	public int insert(T_message record) {
		// TODO Auto-generated method stub
		return t_messageMapper.insert(record);
	}

	public int insertSelective(T_message record) {
		// TODO Auto-generated method stub
		return t_messageMapper.insertSelective(record);
	}

	public T_message selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_messageMapper.selectByPrimaryKey(id);
	}
	public int updateByPrimaryKeySelective(T_message record) {
		// TODO Auto-generated method stub
		return t_messageMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(T_message record) {
		// TODO Auto-generated method stub
		return t_messageMapper.updateByPrimaryKey(record);
	}
	public List<T_message> selectByAll(){
		return t_messageMapper.selectByAll();
	}

	public List<T_message> selectmymessage(String id) {
		
		return t_messageMapper.selectmymessage(id);
	}
}
