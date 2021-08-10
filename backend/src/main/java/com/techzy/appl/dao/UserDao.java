package com.techzy.appl.dao;

import java.util.List;

import com.techzy.appl.beans.Product;
import com.techzy.appl.beans.User;

public interface UserDao {

	public String createUser(User u);
	
	public List<User> getUserList();
	
	public User findUserById(int userId);
	
	public String updateUser(int userId, User newUser);
	
	public String deleteUser(int userId);


}
