package com.techzy.appl.dao;

import java.util.ArrayList;
import java.util.List;

import com.techzy.appl.beans.Product;

public interface ProductDao {
	
	public Product createProduct(Product p);
	
	public List<Product> getAll();
	
	public Product findById(int id);
	
	//public Product updateProduct(int id, Product p);
	
}
