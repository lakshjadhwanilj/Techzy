package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.Product;

public interface ProductService {

	public Product createProduct(Product p);

	public List<Product> getAll();

	public Product findById(int id);

}
