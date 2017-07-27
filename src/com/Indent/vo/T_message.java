package com.Indent.vo;

import java.util.Date;

public class T_message {
	private String username;
	private String foodname;
    public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFoodname() {
		return foodname;
	}

	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}

	/**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_message.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_message.content
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String content;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_message.time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private Date time;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_message.food_id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String foodId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_message.user_id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String userId;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_message.id
     *
     * @return the value of t_message.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_message.id
     *
     * @param id the value for t_message.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_message.content
     *
     * @return the value of t_message.content
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getContent() {
        return content;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_message.content
     *
     * @param content the value for t_message.content
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_message.time
     *
     * @return the value of t_message.time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public Date getTime() {
        return time;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_message.time
     *
     * @param time the value for t_message.time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setTime(Date time) {
        this.time = time;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_message.food_id
     *
     * @return the value of t_message.food_id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getFoodId() {
        return foodId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_message.food_id
     *
     * @param foodId the value for t_message.food_id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setFoodId(String foodId) {
        this.foodId = foodId == null ? null : foodId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_message.user_id
     *
     * @return the value of t_message.user_id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_message.user_id
     *
     * @param userId the value for t_message.user_id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((content == null) ? 0 : content.hashCode());
		result = prime * result + ((foodId == null) ? 0 : foodId.hashCode());
		result = prime * result + ((foodname == null) ? 0 : foodname.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
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
		T_message other = (T_message) obj;
		if (content == null) {
			if (other.content != null)
				return false;
		} else if (!content.equals(other.content))
			return false;
		if (foodId == null) {
			if (other.foodId != null)
				return false;
		} else if (!foodId.equals(other.foodId))
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
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
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
		return "T_message [username=" + username + ", foodname=" + foodname + ", id=" + id + ", content=" + content
				+ ", time=" + time + ", foodId=" + foodId + ", userId=" + userId + "]";
	}

	public T_message(String username, String foodname, String id, String content, Date time, String foodId,
			String userId) {
		super();
		this.username = username;
		this.foodname = foodname;
		this.id = id;
		this.content = content;
		this.time = time;
		this.foodId = foodId;
		this.userId = userId;
	}

	public T_message() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}