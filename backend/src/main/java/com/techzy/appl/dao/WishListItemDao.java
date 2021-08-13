package com.techzy.appl.dao;

import java.util.List;

import com.techzy.appl.beans.WishListItem;

public interface WishListItemDao {

	public List<WishListItem> getAllWishListItem(int userId);
	public String createWishListItem(WishListItem wishListItem);
	public String deleteWishListItem(int wishListItemId);
}