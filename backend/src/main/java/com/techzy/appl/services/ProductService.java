package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.Product;
import com.techzy.appl.excp.ProductNotUpdatedException;

public interface ProductService {

	public String createProduct(Product p);

	public List<Product> getProductList();

	public Product findProductById(int productId);

	public String updateProduct(int productId, Product newProduct) throws ProductNotUpdatedException;

	public String deleteProduct(int productId);
	
	public List<Product> getProductListByRetailer(int userId);

	public List<Product> getAllMobiles();

	public List<Product> getAllLaptops();

}
