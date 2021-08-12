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
@Table(name ="CART_ITEM")
public class CartItem {
	
	@Id
	@Column(name ="cartItemId")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cartItemId;
	
	@Column(name ="quantity")
	private int quantity;
	
	@Column(name ="totalCost")
	private long totalCost;
	
	@Column(name ="userId")
	private int userId;
	
	@Column(name ="productId")
	private int productId;


	public CartItem() {
		super();
	}


	public CartItem(int quantity, long totalCost, int userId, int productId) {
		super();
		this.quantity = quantity;
		this.totalCost = totalCost;
		this.userId = userId;
		this.productId = productId;
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


	public long getTotalCost() {
		return totalCost;
	}


	public void setTotalCost(long totalCost) {
		this.totalCost = totalCost;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public int getProductId() {
		return productId;
	}


	public void setProductId(int productId) {
		this.productId = productId;
	}


	@Override
	public String toString() {
		return "CartItem [cartItemId=" + cartItemId + ", quantity=" + quantity + ", totalCost=" + totalCost
				+ ", userId=" + userId + ", productId=" + productId + "]";
	}


	

	
}
