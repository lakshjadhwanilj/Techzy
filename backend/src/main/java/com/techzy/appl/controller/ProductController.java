package com.techzy.appl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

	
	@PostMapping("/newproduct")
	public void createProduct(@RequestBody Product p) {
		Product newProduct = productService.createProduct(p);
		System.out.println(newProduct);
		System.out.println("Added");
		
	}
	
	@GetMapping(path = "/products", produces = "application/json")
	//@ResponseBody
	public List<Product> findAllProducts() {
		return productService.getAll();
	}
	
	@GetMapping(path = "/products/{id}" , produces = "application/json")
	public Product getDetailsByID(@PathVariable(value="id")int id) {
		return productService.findById(id);
	}

}
