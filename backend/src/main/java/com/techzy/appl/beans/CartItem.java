package com.techzy.appl.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "CART_ITEM")
@NamedQuery(query = "delete from CartItem c where c.userId = :userId", name ="delete cart from id")
public class CartItem {
	// Variable Declarations
	@Id
	@Column(name = "cartItemId")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="cart_Item_Id")
	@SequenceGenerator(name ="cart_Item_Id", sequenceName = "cart_Item_Id", allocationSize =1)
	private int cartItemId;

	@Column(name = "quantity")
	private int quantity;

	@Column(name = "productPrice")
	private long productPrice;

	@Column(name = "userId")
	private int userId;

	@Column(name = "productName")
	private String productName;

	//Default Constructor
	public CartItem() {
		super();
	}

	//parameterized constructor
	public CartItem(int cartItemId, int quantity, long productPrice, int userId, String productName) {
		super();
		this.cartItemId = cartItemId;
		this.quantity = quantity;
		this.productPrice = productPrice;
		this.userId = userId;
		this.productName = productName;
	}
	
	//parameterized constructor
	public CartItem(int quantity, long productPrice, int userId, String productName) {
		super();
		this.quantity = quantity;
		this.productPrice = productPrice;
		this.userId = userId;
		this.productName = productName;
	}

	//Getter Setters
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

	//To print Object Onto the Console
	@Override
	public String toString() {
		return "CartItem [cartItemId=" + cartItemId + ", quantity=" + quantity + ", productPrice=" + productPrice
				+ ", userId=" + userId + ", productName=" + productName + "]";
	}

}
