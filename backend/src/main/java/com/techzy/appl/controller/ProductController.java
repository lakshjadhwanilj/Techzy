package com.techzy.appl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techzy.appl.beans.Product;
import com.techzy.appl.services.ProductServiceImpl;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/tech/v1")
public class ProductController {
	
	@Autowired
	private ProductServiceImpl productService;

	
	@PostMapping("/products")
	public String createProduct(@RequestBody Product p) {
		return productService.createProduct(p);
	}
	
	@GetMapping(path = "/products")
	//@ResponseBody
	public List<Product> getProductList() {
		return productService.getProductList();
	}
	
	@GetMapping(path = "/products/{id}")
	public Product findProductById(@PathVariable(value="id")int productId) {
		return productService.findProductById(productId);
	}
	
	@PutMapping(path = "/products/{id}")
	public String updateProduct(@PathVariable(value = "id") int productId , @RequestBody Product newProduct) {
		return productService.updateProduct(productId, newProduct);
	}

	@DeleteMapping(path ="/products/{id}")
	public String deleteProduct(@PathVariable (value = "id") int productId) {
		return productService.deleteProduct(productId);
	}
}
