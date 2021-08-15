package com.techzy.appl.dao;

import java.util.List;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.techzy.appl.beans.CartItem;

@Repository("cartItemDao")
@EnableTransactionManagement
public class CartItemDaoImpl implements CartItemDao{
	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public String createCartItem(CartItem cartItem) {
		em.persist(cartItem);
		return "Cart Item Added";
	}

	@Override
	public List<CartItem> getAllCartItemsByUserId(int userId) {
		String sql = "Select c From CartItem c where c.userId = :userId";
		TypedQuery<CartItem> tq = em.createQuery(sql,CartItem.class);
		tq.setParameter("userId", userId);
		List<CartItem>mylist = tq.getResultList();
		System.out.println(mylist);
		return mylist;
	}

	@Override
	@Transactional
	public String deleteCartItem(int cartItemId) {
		CartItem cartItem = em.find(CartItem.class, cartItemId);
		em.remove(cartItem);
		return "Cart Item Deleted";
	}

	@Override
	@Transactional
	public String updateCartItemQuantity(int cartItemId, CartItem newCartItem) {
		CartItem cartItem = em.find(CartItem.class, cartItemId);
		System.out.println(cartItem);
		cartItem.setQuantity(newCartItem.getQuantity());
		cartItem.setProductName(newCartItem.getProductName());
		cartItem.setUserId(newCartItem.getUserId());
		cartItem.setProductPrice(newCartItem.getProductPrice());
		em.merge(cartItem);
		return "Cart Item Quantity Updated";
	}

	@Override
	@Transactional
	public String deleteAllCartItemsByUserId(int userId) {
		Query q = em.createNamedQuery("delete cart from id");
		q.setParameter("userId",userId );
		q.executeUpdate();
		return "Cart Is empty";
	}

}
