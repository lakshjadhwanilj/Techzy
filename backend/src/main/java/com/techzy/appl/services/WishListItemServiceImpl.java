package com.techzy.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.WishListItem;
import com.techzy.appl.dao.WishListItemDao;

@Service("wishListItem")
public class WishListItemServiceImpl implements WishListItemService {

	@Autowired
	WishListItemDao wishListItemDao;

	@Override
	public String createWishListItem(WishListItem wishListItem) {
		System.out.println(wishListItem);
		return wishListItemDao.createWishListItem(wishListItem);
	}

	@Override
	public String deleteWishListItem(int wishListItemId) {
		return wishListItemDao.deleteWishListItem(wishListItemId);
	}

	@Override
	public List<WishListItem> getAllWishListItem(int userId) {
		System.out.println("service layer --->"+  wishListItemDao.getAllWishListItem(userId));
		return wishListItemDao.getAllWishListItem(userId);
	}

}