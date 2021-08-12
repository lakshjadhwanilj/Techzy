package com.techzy.appl.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.techzy.appl.beans.Product;

@Repository("prdDao")
@EnableTransactionManagement
public class ProductDaoImpl implements ProductDao{

	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public String createProduct(Product p) {
		
		System.out.println("Dao Layer "+ p);
		em.persist(p);
		return "Product Added";
	}

	@Override
	public List<Product> getProductList() {
		
		return em.createQuery("Select p from Product p").getResultList();
	}

	@Override
	public Product findProductById(int productId) {
		return em.find(Product.class, productId);
	}

	@Override
	@Transactional
	public String updateProduct(int productId, Product newProduct) {
		Product product = em.find(Product.class, productId);
		product.setBrandId(newProduct.getBrandId());
		product.setInStock(newProduct.getInStock());
		product.setProductDescription(newProduct.getProductDescription());
		product.setProductName(newProduct.getProductName());
		product.setProductPrice(newProduct.getProductPrice());
		product.setTotalQuantity(newProduct.getTotalQuantity());
		product.setProductType(newProduct.getProductType());
		em.merge(product);
		return "Product Updated";
	}

	@Override
	@Transactional
	public String deleteProduct(int productId) {
		Product product = em.find(Product.class, productId);
		em.remove(product);
		return "Product Deleted";
	}


	

}
