package com.Indent.vo;

import java.util.Date;

import org.springframework.stereotype.Component;
@Component
public class T_admin {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_admin.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_admin.adminname
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String adminname;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_admin.create_Time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private Date createTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_admin.password
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    private String password;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_admin.id
     *
     * @return the value of t_admin.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_admin.id
     *
     * @param id the value for t_admin.id
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_admin.adminname
     *
     * @return the value of t_admin.adminname
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getAdminname() {
        return adminname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_admin.adminname
     *
     * @param adminname the value for t_admin.adminname
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setAdminname(String adminname) {
        this.adminname = adminname == null ? null : adminname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_admin.create_Time
     *
     * @return the value of t_admin.create_Time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_admin.create_Time
     *
     * @param createTime the value for t_admin.create_Time
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_admin.password
     *
     * @return the value of t_admin.password
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_admin.password
     *
     * @param password the value for t_admin.password
     *
     * @mbggenerated Mon Jul 17 11:41:22 CST 2017
     */
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

	@Override
	public String toString() {
		return "T_admin [id=" + id + ", adminname=" + adminname + ", createTime=" + createTime + ", password="
				+ password + "]";
	}

	public T_admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public T_admin(String id, String adminname, Date createTime, String password) {
		super();
		this.id = id;
		this.adminname = adminname;
		this.createTime = createTime;
		this.password = password;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((adminname == null) ? 0 : adminname.hashCode());
		result = prime * result + ((createTime == null) ? 0 : createTime.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
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
		T_admin other = (T_admin) obj;
		if (adminname == null) {
			if (other.adminname != null)
				return false;
		} else if (!adminname.equals(other.adminname))
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
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		return true;
	}
}