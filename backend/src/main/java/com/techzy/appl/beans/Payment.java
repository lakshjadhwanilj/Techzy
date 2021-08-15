package com.techzy.appl.beans;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "payments")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "paymentId")
	private int paymentId;

	@Column(name = "paymentAmount")
	private int paymentAmount;

	@Column(name = "paymentType")
	private String paymentType;

	@Column(name = "paymentStatus")
	private String paymentStatus;

	@Column(name = "userId")
	private int userId;

	@Column(name = "paymentDate")
	private LocalDate date;

	@Column(name = "paymentTime")
	private Timestamp time; 
	
	//Timestamp.from(Instant.now());  

	public Payment() {
		super();
	}


	public Payment(int paymentAmount, String paymentType, String paymentStatus, int userId, LocalDate date,
			Timestamp time) {
		super();
		this.paymentAmount = paymentAmount;
		this.paymentType = paymentType;
		this.paymentStatus = paymentStatus;
		this.userId = userId;
		this.date = date;
		this.time = time;
	}


	public Payment(int paymentId, int paymentAmount, String paymentType, String paymentStatus, int userId,
			LocalDate date, Timestamp time) {
		super();
		this.paymentId = paymentId;
		this.paymentAmount = paymentAmount;
		this.paymentType = paymentType;
		this.paymentStatus = paymentStatus;
		this.userId = userId;
		this.date = date;
		this.time = time;
	}


	public Payment(int paymentAmount, String paymentType, String paymentStatus, int userId) {
		super();
		this.paymentAmount = paymentAmount;
		this.paymentType = paymentType;
		this.paymentStatus = paymentStatus;
		this.userId = userId;
	}

	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}


	public int getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(int paymentAmount) {
		this.paymentAmount = paymentAmount;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Timestamp getTime() {
		return time;
	}


	public void setTime(Timestamp time) {
		this.time = time;
	}


	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", paymentAmount=" + paymentAmount + ", paymentType=" + paymentType
				+ ", paymentStatus=" + paymentStatus + ", userId=" + userId + ", date=" + date + ", time=" + time + "]";
	}


	
}
