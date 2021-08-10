package com.techzy.appl.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.techzy.appl.beans.Product;

@Repository("prdDao")
public class ProductDaoImpl implements ProductDao{

	private static List<Product> productList = new ArrayList<>();

	public ProductDaoImpl() {
		productList.add(new Product(101, "Mobile", "Realme 5 Pro", 30000, 45, 30));
		productList.add(new Product(102, "Laptop", "Lenovo", 60000, 45, 40));
		productList.add(new Product(103, "Charger", "Samsung", 200, 15, 10));
		productList.add(new Product(104, "Powerbank", "Portronics", 1000, 35, 30));
	}

	@Override
	public Product createProduct(Product p) {
		productList.add(p);
		return p;
	}

	@Override
	public List<Product> getAll() {
		return productList;
	}
/////////////////////////////
	@Override
	public Product findById(int id) {
		Product foundProduct = new Product();
//		for(Product p : productList) {
//			if(p.getProductId() == id) {
//				foundProduct =  p;
//				return foundProduct;
//				break;
//			} 
//			else {
//				foundProduct=null;
//			}
//		}
		return foundProduct;
	}
/////////////////////////////
	
	
	
	
	
	

}
