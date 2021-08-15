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
@Table(name="wish_list_item")
public class WishListItem {

	@Id
	@Column(name="wishListItemId")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "wish_List_Item_Id")
	@SequenceGenerator(name = "wish_List_Item_Id", sequenceName = "wish_List_Item_Id", allocationSize = 1)
	private int wishListItemId;
	
	@Column(name = "userId")
	private int userId;
	
	@Column(name = "productName")
	private String productName;

	public WishListItem() {
		super();
	}

	public WishListItem(int wishListItemId, int userId, String productName) {
		super();
		this.wishListItemId = wishListItemId;
		this.userId = userId;
		this.productName = productName;
	}

	public WishListItem(int userId, String productName) {
		super();
		this.userId = userId;
		this.productName = productName;
	}

	public int getWishListItemId() {
		return wishListItemId;
	}

	public void setWishListItemId(int wishListItemId) {
		this.wishListItemId = wishListItemId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	@Override
	public String toString() {
		return "WishListItem [wishListItemId=" + wishListItemId + ", userId=" + userId + ", productName=" + productName
				+ "]";
	}
}
