package com.techzy.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.CartItem;
import com.techzy.appl.dao.CartItemDao;

@Service("cartItemService")
public class CartItemServiceImpl implements CartItemService {

	@Autowired
	private CartItemDao cartItemDao;
	
	@Override
	public String createCartItem(CartItem cartItem) {
		return cartItemDao.createCartItem(cartItem);
	}

	@Override
	public List<CartItem> getAllCartItemsByUserId(int userId) {
		return cartItemDao.getAllCartItemsByUserId(userId);
	}

	@Override
	public String deleteCartItem(int cartItemId) {
		
		return cartItemDao.deleteCartItem(cartItemId);
	}

	@Override
	public String updateCartItemQuantity(int cartItemId, CartItem newCartItem) {
		return cartItemDao.updateCartItemQuantity(cartItemId, newCartItem);
	}

	@Override
	public String deleteAllCartItemsByUserId(int userId) {
		return cartItemDao.deleteAllCartItemsByUserId(userId);
	}

}
