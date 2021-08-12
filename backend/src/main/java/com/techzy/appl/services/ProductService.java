package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.Product;

public interface ProductService {

public String createProduct(Product p);
	
	public List<Product> getProductList();
	
	public Product findProductById(int productId);
	
	public String updateProduct(int productId, Product newProduct);
	
	public String deleteProduct(int productId);

}
