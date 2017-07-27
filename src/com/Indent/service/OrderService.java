package com.Indent.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Indent.dao.T_orderMapper;
import com.Indent.dao.T_shoppMapper;
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
	@Autowired
	private T_shoppMapper shopp;
	//购物车付钱按钮事件功能
	public int Gouwuche(String uuid, String z_id, int i, String d, String user_id, String tel) {
		int hui_order = t_orderMapper.Gouwuche(uuid,z_id,i,d,user_id);
//		System.out.println(uuid+"十一色");
		int hui_shopp =	shopp.getGouwuche(uuid,tel);
//			System.out.println(hui_order+"啦啦啦啦");	
//			System.out.println(hui_shopp+"啦更好啦啦");
		if ( hui_order>0 || hui_shopp>0 ) {
			return hui_order;
		}
		return 0;
	}

	public T_order hui_gouwu(String user_id) {
//		System.out.println(user_id+"十二色");
		return t_orderMapper.hui_gouwu(user_id);
	}
}
