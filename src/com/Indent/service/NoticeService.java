package com.Indent.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Indent.dao.T_noticeMapper;
import com.Indent.vo.T_notice;
@Service
public class NoticeService{
	@Autowired
	private T_noticeMapper t_noticeMapper;
	
	public T_noticeMapper getT_noticeMapper() {
		return t_noticeMapper;
	}

	public void setT_noticeMapper(T_noticeMapper t_noticeMapper) {
		this.t_noticeMapper = t_noticeMapper;
	}

	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_noticeMapper.deleteByPrimaryKey(id);
	}

	public int insert(T_notice record) {
		// TODO Auto-generated method stub
		return t_noticeMapper.insert(record);
	}

	public int insertSelective(T_notice record) {
		// TODO Auto-generated method stub
		return t_noticeMapper.insertSelective(record);
	}

	public T_notice selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return t_noticeMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(T_notice record) {
		// TODO Auto-generated method stub
		return t_noticeMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(T_notice record) {
		// TODO Auto-generated method stub
		return t_noticeMapper.updateByPrimaryKey(record);
	}
	public List<T_notice> selectByAll(){
		return  t_noticeMapper.selectByAll();
	};
	
}
