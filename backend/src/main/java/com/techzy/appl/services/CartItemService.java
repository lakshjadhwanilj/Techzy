package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.CartItem;

public interface CartItemService {
	
	public String createCartItem(CartItem cartItem);
	public List<CartItem> getAllCartItemsByUserId(int userId);
	public String deleteCartItem(int cartItemId);
	public String updateCartItemQuantity(int cartItemId, CartItem newCartItem);
	public String deleteAllCartItemsByUserId(int userId);
	

}
