package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.WishListItem;

public interface WishListItemService {
	public List<WishListItem> getAllWishListItem(int userId);
	public String createWishListItem(WishListItem wishListItem);
	public String deleteWishListItem(int wishListItemId);

}