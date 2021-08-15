package com.techzy.appl.dao;

import java.util.List;

import com.techzy.appl.beans.Product;

public interface ProductDao {

	public String createProduct(Product p);

	public List<Product> getProductList();

	public Product findProductById(int productId);

	public String updateProduct(int productId, Product newProduct);

	public String deleteProduct(int productId);

	public List<Product> getAllMobiles();

	public List<Product> getAllLaptops();

}
