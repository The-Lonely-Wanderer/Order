package com.Indent.vo;

import java.util.Date;

public class T_eamil {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_eamil.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_eamil.content
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String content;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_eamil.time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private Date time;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_eamil.user_id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String userId;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_eamil.id
     *
     * @return the value of t_eamil.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_eamil.id
     *
     * @param id the value for t_eamil.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_eamil.content
     *
     * @return the value of t_eamil.content
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getContent() {
        return content;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_eamil.content
     *
     * @param content the value for t_eamil.content
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_eamil.time
     *
     * @return the value of t_eamil.time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public Date getTime() {
        return time;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_eamil.time
     *
     * @param time the value for t_eamil.time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setTime(Date time) {
        this.time = time;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_eamil.user_id
     *
     * @return the value of t_eamil.user_id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_eamil.user_id
     *
     * @param userId the value for t_eamil.user_id
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
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
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
		T_eamil other = (T_eamil) obj;
		if (content == null) {
			if (other.content != null)
				return false;
		} else if (!content.equals(other.content))
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
		return true;
	}

	@Override
	public String toString() {
		return "T_eamil [id=" + id + ", content=" + content + ", time=" + time + ", userId=" + userId + "]";
	}

	public T_eamil(String id, String content, Date time, String userId) {
		super();
		this.id = id;
		this.content = content;
		this.time = time;
		this.userId = userId;
	}

	public T_eamil() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}