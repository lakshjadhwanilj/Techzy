package com.techzy.appl.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "PRODUCTS")
public class Product {

	@Id
	@Column(name = "productId")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="product_Id")
	@SequenceGenerator(name ="product_Id", sequenceName = "product_Id", allocationSize =1)
	private int productId;

	@Column(name = "productName")
	private String productName;

	@Column(name = "productDesc")
	private String productDescription;

	@Column(name = "Price")
	private long productPrice;

	@Column(name = "totalQuantity")
	private int totalQuantity;

	@Column(name = "inStock")
	private int inStock;

	@Column(name = "brandId")
	private int brandId;

	@Column(name = "productType")
	private String productType;
	
	public Product(String productName, String productDescription, long productPrice, int totalQuantity, int inStock,
			String productType) {
		super();
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.totalQuantity = totalQuantity;
		this.inStock = inStock;
		this.productType = productType;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int productId, String productName, String productDescription, long productPrice, int totalQuantity,
			int inStock, int brandId, String productType) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.totalQuantity = totalQuantity;
		this.inStock = inStock;
		this.brandId = brandId;
		this.productType = productType;
	}
	
	

	public Product(String productName, String productDescription, long productPrice, int totalQuantity, int inStock,
			int brandId, String productType) {
		super();
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.totalQuantity = totalQuantity;
		this.inStock = inStock;
		this.brandId = brandId;
		this.productType = productType;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public long getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(long productPrice) {
		this.productPrice = productPrice;
	}

	public int getTotalQuantity() {
		return totalQuantity;
	}

	public void setTotalQuantity(int totalQuantity) {
		this.totalQuantity = totalQuantity;
	}

	public int getInStock() {
		return inStock;
	}

	public void setInStock(int inStock) {
		this.inStock = inStock;
	}

	public int getBrandId() {
		return brandId;
	}

	public void setBrandId(int brandId) {
		this.brandId = brandId;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productDescription="
				+ productDescription + ", productPrice=" + productPrice + ", totalQuantity=" + totalQuantity
				+ ", inStock=" + inStock + ", brandId=" + brandId + ", productType=" + productType + "]";
	}

}
