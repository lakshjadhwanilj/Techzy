package com.techzy.appl.beans;

import java.util.List;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.Session;

@XmlRootElement
@Entity
@Table(name = "Users")
public class User {

	@Id
	@Column(name = "UserId")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_Id")
	@SequenceGenerator(name = "user_Id", sequenceName = "user_Id", allocationSize = 1)
	private int userId;

	@Column(name = "UserName")
	private String userName;

	@Column(name = "UserEmail")
	private String userEmail;

	@Column(name = "userPassword")
	private String userPassword;

	@Column(name = "UserType")
	private String userType = "C";

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CONTACTID", referencedColumnName = "CONTACTID")
	private ContactDetails cd;

	public ContactDetails getCd() {
		return cd;
	}

	public void setCd(ContactDetails cd) {
		this.cd = cd;
	}

	public User() {
		super();
	}

	
	public User(String userEmail, String userPassword) {
		super();
		this.userEmail = userEmail;
		this.userPassword = userPassword;
	}


	public User(String userName, String userEmail, String userPassword, String userType) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userType = userType;
	}

	public User(int userId, String userName, String userEmail, String userPassword, String userType,
			ContactDetails cd) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userType = userType;
		this.cd = cd;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", userPassword="
				+ userPassword + ", userType=" + userType + ", cd=" + cd + "]";
	}

}
