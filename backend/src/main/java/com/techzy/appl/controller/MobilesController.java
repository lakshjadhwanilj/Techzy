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

import com.techzy.appl.beans.Mobiles;
import com.techzy.appl.services.MobilesServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tech/v1")
public class MobilesController {

	@Autowired
	private MobilesServiceImpl mobilesServiceImpl;

	@PostMapping(path = "/mobiles/{productId}")
	public String addMobileData(@PathVariable(value = "productId") int productId, @RequestBody Mobiles mobile) {
		return mobilesServiceImpl.addMobileData(productId, mobile);
	}

	@GetMapping(path = "/mobiles/{productId}")
	public Mobiles getMobileData(@PathVariable(value = "productId") int productId) {
		return mobilesServiceImpl.getMobileData(productId);
	}

	@DeleteMapping(path = "/mobiles/{productId}")
	public String deleteMobileData(@PathVariable(value = "productId") int productId) {
		return mobilesServiceImpl.deleteMobileData(productId);
	}

	@PutMapping(path = "/mobiles/{productId}")
	public String updateMobileData(@PathVariable(value = "productId") int productId, @RequestBody Mobiles newMobile) {
		return mobilesServiceImpl.updateMobileData(productId, newMobile);
	}

}
