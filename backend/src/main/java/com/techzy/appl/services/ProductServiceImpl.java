package com.techzy.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.Product;
import com.techzy.appl.dao.ProductDao;

@Service("prdService")
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductDao prdDao;

	@Override
	public Product createProduct(Product p) {
		Product newProduct = prdDao.createProduct(p);
		return newProduct;
	}

	@Override
	public List<Product> getAll() {
		List<Product> productList = prdDao.getAll();
		System.out.println(productList);
		return productList;
	}

	@Override
	public Product findById(int id) {
		Product p = prdDao.findById(id);
		return p;
	}

	
	
	

}
