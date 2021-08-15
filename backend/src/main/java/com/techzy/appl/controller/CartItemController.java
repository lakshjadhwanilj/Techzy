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

import com.techzy.appl.beans.CartItem;
import com.techzy.appl.services.CartItemServiceImpl;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/tech/v1")
public class CartItemController {
	
	@Autowired
	private CartItemServiceImpl cartItemService ;
	
	@PostMapping(path = "/cartItems")
	public String createCartItem(@RequestBody CartItem cartItem) {
		return cartItemService.createCartItem(cartItem);
	}
	
	@GetMapping(path ="/cartItems/{userId}")
	public List<CartItem> getAllCartItemsByUserId(@PathVariable(value = "userId")int userId) {
		return cartItemService.getAllCartItemsByUserId(userId);
	}


	@DeleteMapping(path="/cartItems/{cartItemId}")
	public String deleteCartItem(@PathVariable(value = "cartItemId") int cartItemId) {
		return cartItemService.deleteCartItem(cartItemId);
	}

	@PutMapping(path="/cartItems/{cartItemId}")
	public String updateCartItemQuantity(@PathVariable(value = "cartItemId") int cartItemId, @RequestBody CartItem newCartItem) {
		return cartItemService.updateCartItemQuantity(cartItemId, newCartItem);
	}

	@DeleteMapping(path ="/cart/{userId}")
	public String deleteAllCartItemsByUserId(@PathVariable(value = "userId") int userId) {
		return cartItemService.deleteAllCartItemsByUserId(userId);
		
	}

}
