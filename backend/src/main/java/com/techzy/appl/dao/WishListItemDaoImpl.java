package com.techzy.appl.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import com.techzy.appl.beans.WishListItem;


@Repository("wishListItemDao")
@EnableTransactionManagement
public class WishListItemDaoImpl implements WishListItemDao {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public String createWishListItem(WishListItem wishListItem) {
		em.persist(wishListItem);
		System.out.println(wishListItem);
		return "Product Added in WishList";
	}

	@Override
	@Transactional
	public String deleteWishListItem(int wishListItemId) {
		
		WishListItem wishListItem = em.find(WishListItem.class, wishListItemId);
		em.remove(wishListItem);
		return "Product Deleted from Wishlist";
	}

	@Override
	public List<WishListItem> getAllWishListItem(int userId) {
		String sql = "Select w From WishListItem w where w.userId = :userId";
		TypedQuery<WishListItem> tq = em.createQuery(sql,WishListItem.class);
		tq.setParameter("userId", userId);
		List<WishListItem>mylist = tq.getResultList();
		System.out.println("Dao layer--->"+mylist);
		return mylist;
	}

}