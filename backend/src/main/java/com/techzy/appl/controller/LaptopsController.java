package com.techzy.appl.controller;

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

import com.techzy.appl.beans.Laptops;
import com.techzy.appl.services.LaptopsServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tech/v1")
public class LaptopsController {

	@Autowired
	private LaptopsServiceImpl laptopsServiceImpl;

	@PostMapping(path = "/laptops/{productId}")
	public String addLaptopData(@PathVariable(value = "productId") int productId, @RequestBody Laptops laptop) {
		return laptopsServiceImpl.addLaptopData(productId, laptop);
	}

	@GetMapping(path = "/laptops/{productId}")
	public Laptops getLaptopData(@PathVariable(value = "productId") int productId) {
		return laptopsServiceImpl.getLaptopData(productId);
	}

	@DeleteMapping(path = "/laptops/{productId}")
	public String deleteLaptopData(@PathVariable(value = "productId") int productId) {
		return laptopsServiceImpl.deleteLaptopData(productId);
	}

	@PutMapping(path = "/laptops/{productId}")
	public String updateLaptopData(@PathVariable(value = "productId") int productId, @RequestBody Laptops newLaptop) {
		return laptopsServiceImpl.updateLaptopData(productId, newLaptop);
	}
}
