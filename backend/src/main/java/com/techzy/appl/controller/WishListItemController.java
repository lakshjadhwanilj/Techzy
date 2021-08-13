package com.techzy.appl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techzy.appl.beans.WishListItem;
import com.techzy.appl.services.WishListItemServiceImpl;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/tech/v1")
public class WishListItemController {
	
	@Autowired
	private WishListItemServiceImpl wishListItemServiceImpl;
	
	@GetMapping(path="/wishlistitems/{userId}")
	public List<WishListItem> getAllWishListItem(@PathVariable(value="userId")int userId) {
		return wishListItemServiceImpl.getAllWishListItem(userId);
		
	}
	
	@PostMapping(path="/wishlistitems")
	public String createWishListItem(@RequestBody WishListItem wishListItem) {
		System.out.println(wishListItem);
		return wishListItemServiceImpl.createWishListItem(wishListItem);
	}

	
	@DeleteMapping(path="/wishlistitems/{wishListItemId}")
	public String deleteWishListItem( @PathVariable(value = "wishListItemId") int wishListItemId) {
		
		return wishListItemServiceImpl.deleteWishListItem(wishListItemId);
	}

}
