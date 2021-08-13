package com.techzy.appl.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "CART_ITEM")
public class CartItem {

	@Id
	@Column(name = "cartItemId")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cartItemId;

	@Column(name = "quantity")
	private int quantity;

	@Column(name = "productPrice")
	private long productPrice;

	@Column(name = "userId")
	private int userId;

	@Column(name = "productName")
	private String productName;

	public CartItem() {
		super();
	}

	public CartItem(int cartItemId, int quantity, long productPrice, int userId, String productName) {
		super();
		this.cartItemId = cartItemId;
		this.quantity = quantity;
		this.productPrice = productPrice;
		this.userId = userId;
		this.productName = productName;
	}

	public CartItem(int quantity, long productPrice, int userId, String productName) {
		super();
		this.quantity = quantity;
		this.productPrice = productPrice;
		this.userId = userId;
		this.productName = productName;
	}

	public int getCartItemId() {
		return cartItemId;
	}

	public void setCartItemId(int cartItemId) {
		this.cartItemId = cartItemId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public long getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(long productPrice) {
		this.productPrice = productPrice;
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
		return "CartItem [cartItemId=" + cartItemId + ", quantity=" + quantity + ", productPrice=" + productPrice
				+ ", userId=" + userId + ", productName=" + productName + "]";
	}

}
