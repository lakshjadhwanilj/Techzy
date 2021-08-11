package com.techzy.appl.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "PRODUCT_TYPE")
public class ProductType {

	@Id
	@Column(name = "productTypeId")
	private String productTypeId;

	@Column(name = "productTypeName")
	private String productTypeName;

	public ProductType(String productTypeId, String productTypeName) {
		super();
		this.productTypeId = productTypeId;
		this.productTypeName = productTypeName;
	}

	public ProductType() {
		super();
	}

	public String getProductTypeId() {
		return productTypeId;
	}

	public void setProductTypeId(String productTypeId) {
		this.productTypeId = productTypeId;
	}

	public String getProductTypeName() {
		return productTypeName;
	}

	public void setProductTypeName(String productTypeName) {
		this.productTypeName = productTypeName;
	}

	@Override
	public String toString() {
		return "ProductType [productTypeId=" + productTypeId + ", productTypeName=" + productTypeName + "]";
	}

}
