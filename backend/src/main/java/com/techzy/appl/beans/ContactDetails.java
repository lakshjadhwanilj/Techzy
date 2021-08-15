package com.techzy.appl.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "Contact_Details")
public class ContactDetails {

	@Id
	@Column(name = "ContactId")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="contact_Id")
	@SequenceGenerator(name ="contact_Id", sequenceName = "contact_Id", allocationSize =1)
	private int ContactId;

	@Column(name = "PrimaryPhoneNo")
	private String primaryPhoneNo;

	@Column(name = "SecondaryPhoneNo")
	private String secondaryPhoneNo;

	@Column(name = "PrimaryAddress")
	private String primaryAddress;

	@Column(name = "ShippingAddress")
	private String shippingAddress;

	public ContactDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ContactDetails(String primaryPhoneNo, String secondaryPhoneNo, String primaryAddress,
			String shippingAddress) {
		super();
		this.primaryPhoneNo = primaryPhoneNo;
		this.secondaryPhoneNo = secondaryPhoneNo;
		this.primaryAddress = primaryAddress;
		this.shippingAddress = shippingAddress;
	}

	public int getContactId() {
		return ContactId;
	}

	public void setContactId(int contactId) {
		ContactId = contactId;
	}

	public String getPrimaryPhoneNo() {
		return primaryPhoneNo;
	}

	public void setPrimaryPhoneNo(String primaryPhoneNo) {
		this.primaryPhoneNo = primaryPhoneNo;
	}

	public String getSecondaryPhoneNo() {
		return secondaryPhoneNo;
	}

	public void setSecondaryPhoneNo(String secondaryPhoneNo) {
		this.secondaryPhoneNo = secondaryPhoneNo;
	}

	public String getPrimaryAddress() {
		return primaryAddress;
	}

	public void setPrimaryAddress(String primaryAddress) {
		this.primaryAddress = primaryAddress;
	}

	public String getShippingAddress() {
		return shippingAddress;
	}

	public void setShippingAddress(String shippingAddress) {
		this.shippingAddress = shippingAddress;
	}

	@Override
	public String toString() {
		return "ContactDetails [ContactId=" + ContactId + ", primaryPhoneNo=" + primaryPhoneNo + ", secondaryPhoneNo="
				+ secondaryPhoneNo + ", primaryAddress=" + primaryAddress + ", shippingAddress=" + shippingAddress
				+ "]";
	}

}
