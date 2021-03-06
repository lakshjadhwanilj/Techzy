package com.techzy.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.Product;
import com.techzy.appl.dao.ProductDao;
import com.techzy.appl.excp.ProductNotUpdatedException;

@Service("prdService")
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;

	@Override
	public String createProduct(Product p) {
		return productDao.createProduct(p);
	}

	@Override
	public List<Product> getProductList() {
		return productDao.getProductList();
	}

	@Override
	public Product findProductById(int productId) {
		return productDao.findProductById(productId);
	}

	@Override
	public String updateProduct(int productId, Product newProduct) throws ProductNotUpdatedException{

		return productDao.updateProduct(productId, newProduct);
	}

	@Override
	public String deleteProduct(int productId) {
		return productDao.deleteProduct(productId);
	}
	
	public List<Product> getProductListByRetailer(int userId){
		return productDao.getProductListByRetailer(userId);
	}

	@Override
	public List<Product> getAllMobiles() {
		return productDao.getAllMobiles();
	}

	@Override
	public List<Product> getAllLaptops() {
		return productDao.getAllLaptops();
	}

}
