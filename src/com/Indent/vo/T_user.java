package com.Indent.vo;

import java.util.Date;

import org.springframework.stereotype.Component;
@Component
public class T_user {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.address
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String address;


	/**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.create_time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private Date createTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.login_time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private Date loginTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.password
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String password;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.realName
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String realname;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.sex
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String sex;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.tel
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String tel;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.update_time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private Date updateTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.username
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String username;

    

	/**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.id
     *
     * @return the value of t_user.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.id
     *
     * @param id the value for t_user.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.address
     *
     * @return the value of t_user.address
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getAddress() {
        return address;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.address
     *
     * @param address the value for t_user.address
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.create_time
     *
     * @param createTime the value for t_user.create_time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.login_time
     *
     * @return the value of t_user.login_time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public Date getLoginTime() {
        return loginTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.login_time
     *
     * @param loginTime the value for t_user.login_time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setLoginTime(Date loginTime) {
        this.loginTime = loginTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.password
     *
     * @return the value of t_user.password
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.password
     *
     * @param password the value for t_user.password
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.realName
     *
     * @return the value of t_user.realName
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getRealname() {
        return realname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.realName
     *
     * @param realname the value for t_user.realName
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setRealname(String realname) {
        this.realname = realname == null ? null : realname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.sex
     *
     * @return the value of t_user.sex
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getSex() {
        return sex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.sex
     *
     * @param sex the value for t_user.sex
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.tel
     *
     * @return the value of t_user.tel
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getTel() {
        return tel;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.tel
     *
     * @param tel the value for t_user.tel
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setTel(String tel) {
        this.tel = tel == null ? null : tel.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.update_time
     *
     * @return the value of t_user.update_time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.update_time
     *
     * @param updateTime the value for t_user.update_time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.username
     *
     * @return the value of t_user.username
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.username
     *
     * @param username the value for t_user.username
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }


	public T_user() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public T_user(String password, String username) {
		this.password = password;
		this.username = username;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((address == null) ? 0 : address.hashCode());
		result = prime * result + ((createTime == null) ? 0 : createTime.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((loginTime == null) ? 0 : loginTime.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((realname == null) ? 0 : realname.hashCode());
		result = prime * result + ((sex == null) ? 0 : sex.hashCode());
		result = prime * result + ((tel == null) ? 0 : tel.hashCode());
		result = prime * result + ((updateTime == null) ? 0 : updateTime.hashCode());
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
		T_user other = (T_user) obj;
		if (address == null) {
			if (other.address != null)
				return false;
		} else if (!address.equals(other.address))
			return false;
		if (createTime == null) {
			if (other.createTime != null)
				return false;
		} else if (!createTime.equals(other.createTime))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (loginTime == null) {
			if (other.loginTime != null)
				return false;
		} else if (!loginTime.equals(other.loginTime))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (realname == null) {
			if (other.realname != null)
				return false;
		} else if (!realname.equals(other.realname))
			return false;
		if (sex == null) {
			if (other.sex != null)
				return false;
		} else if (!sex.equals(other.sex))
			return false;
		if (tel == null) {
			if (other.tel != null)
				return false;
		} else if (!tel.equals(other.tel))
			return false;
		if (updateTime == null) {
			if (other.updateTime != null)
				return false;
		} else if (!updateTime.equals(other.updateTime))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	public T_user(String id, String address, Date createTime, Date loginTime, String password, String realname,
			String sex, String tel, Date updateTime, String username) {
		super();
		this.id = id;
		this.address = address;
		this.createTime = createTime;
		this.loginTime = loginTime;
		this.password = password;
		this.realname = realname;
		this.sex = sex;
		this.tel = tel;
		this.updateTime = updateTime;
		this.username = username;
	}

	public T_user(String id, Date createTime, String password, String tel,String username) {
		this.id = id;
		this.createTime = createTime;
		this.password = password;
		this.tel = tel;
		this.username = username;
	}

	@Override
	public String toString() {
		return "T_user [id=" + id + ", address=" + address + ", createTime=" + createTime + ", loginTime=" + loginTime
				+ ", password=" + password + ", realname=" + realname + ", sex=" + sex + ", tel=" + tel
				+ ", updateTime=" + updateTime + ", username=" + username + "]";
	}


}