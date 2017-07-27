package com.Indent.vo;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class T_order {
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to
	 * the database column t_order.id
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	private String id;
	
	private List<T_shopp> t_shopp;

	private T_user	t_user;
	
	public T_user getT_user() {
		return t_user;
	}

	public void setT_user(T_user t_user) {
		this.t_user = t_user;
	}
	private String username;
	
	public String getusername() {
		return username;
	}

	public void setusername(String username) {
		this.username = username;
	}
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to
	 * the database column t_order.prices
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	private Double prices;

	private String foodname;
	private Double price;
	
	public String getFoodname() {
		return foodname;
	}

	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to
	 * the database column t_order.status
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	private String status;

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to
	 * the database column t_order.create_time
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */

	private Date createTime;

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to
	 * the database column t_order.user_id
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	private String userId;

	/**
	 * This method was generated by MyBatis Generator. This method returns the
	 * value of the database column t_order.id
	 *
	 * @return the value of t_order.id
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public String getId() {
		return id;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the
	 * value of the database column t_order.id
	 *
	 * @param id
	 *            the value for t_order.id
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public void setId(String id) {
		this.id = id == null ? null : id.trim();
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the
	 * value of the database column t_order.prices
	 *
	 * @return the value of t_order.prices
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public Double getPrices() {
		return prices;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the
	 * value of the database column t_order.prices
	 *
	 * @param prices
	 *            the value for t_order.prices
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public void setPrices(Double prices) {
		this.prices = prices;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the
	 * value of the database column t_order.status
	 *
	 * @return the value of t_order.status
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the
	 * value of the database column t_order.status
	 *
	 * @param status
	 *            the value for t_order.status
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public void setStatus(String status) {
		this.status = status == null ? null : status.trim();
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the
	 * value of the database column t_order.create_time
	 *
	 * @return the value of t_order.create_time
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public Date getCreateTime() {
		return createTime;
	}





	/**
	 * This method was generated by MyBatis Generator. This method sets the
	 * value of the database column t_order.create_time
	 *
	 * @param createTime
	 *            the value for t_order.create_time
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	

	/**
	 * This method was generated by MyBatis Generator. This method returns the
	 * value of the database column t_order.user_id
	 *
	 * @return the value of t_order.user_id
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the
	 * value of the database column t_order.user_id
	 *
	 * @param userId
	 *            the value for t_order.user_id
	 *
	 * @mbggenerated Mon Jul 17 11:41:22 CST 2017
	 */
	public void setUserId(String userId) {
		this.userId = userId == null ? null : userId.trim();
	}

	public List<T_shopp> getT_shopp() {
		return t_shopp;
	}

	public void setT_shopp(List<T_shopp> t_shopp) {
		this.t_shopp = t_shopp;
	}
	

	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createTime == null) ? 0 : createTime.hashCode());
		result = prime * result + ((foodname == null) ? 0 : foodname.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((price == null) ? 0 : price.hashCode());
		result = prime * result + ((prices == null) ? 0 : prices.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		result = prime * result + ((t_shopp == null) ? 0 : t_shopp.hashCode());
		result = prime * result + ((t_user == null) ? 0 : t_user.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		T_order other = (T_order) obj;
		if (createTime == null) {
			if (other.createTime != null)
				return false;
		} else if (!createTime.equals(other.createTime))
			return false;
		if (foodname == null) {
			if (other.foodname != null)
				return false;
		} else if (!foodname.equals(other.foodname))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (price == null) {
			if (other.price != null)
				return false;
		} else if (!price.equals(other.price))
			return false;
		if (prices == null) {
			if (other.prices != null)
				return false;
		} else if (!prices.equals(other.prices))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		if (t_shopp == null) {
			if (other.t_shopp != null)
				return false;
		} else if (!t_shopp.equals(other.t_shopp))
			return false;
		if (t_user == null) {
			if (other.t_user != null)
				return false;
		} else if (!t_user.equals(other.t_user))
			return false;
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "T_order [id=" + id + ", t_shopp=" + t_shopp + ", t_user=" + t_user + ", username=" + username
				+ ", prices=" + prices + ", foodname=" + foodname + ", price=" + price + ", status=" + status
				+ ", createTime=" + createTime + ", userId=" + userId + "]";
	}

	public T_order(String id, List<T_shopp> t_shopp, T_user t_user, String username, Double prices, String status,
			Date createTime, String userId) {
		super();
		this.id = id;
		this.t_shopp = t_shopp;
		this.t_user = t_user;
		this.username = username;
		this.prices = prices;
		this.status = status;
		this.createTime = createTime;
		this.userId = userId;
	}

	public T_order(String id, T_user t_user, String username, Double prices, String foodname,
			Double price, String status, Date createTime, String userId) {
		this.id = id;
		this.t_shopp = t_shopp;
		this.t_user = t_user;
		this.username = username;
		this.prices = prices;
		this.foodname = foodname;
		this.price = price;
		this.status = status;
		this.createTime = createTime;
		this.userId = userId;
	}

	public T_order() {
		super();
		
	}

	
}