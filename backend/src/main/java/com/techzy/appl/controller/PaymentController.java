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

import com.techzy.appl.beans.Payment;
import com.techzy.appl.services.PaymentServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tech/v1")
public class PaymentController {

	@Autowired
	private PaymentServiceImpl paymentService;
	
	@PostMapping(path = "/payment")
	public String makePayment(@RequestBody Payment payment) {
		return paymentService.makePayment(payment);
	}
	@GetMapping(path = "/payment/{userId}")
	public List<Payment> getAllByUserId(@PathVariable(value = "userId")int userId){
		return paymentService.getAllByUserId(userId);
	}
	
	@GetMapping(path = "/payment/{paymentId}")
	public Payment getPayment(int paymentId) {
		return paymentService.getPayment(paymentId);
	}
}
