package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.User;

public interface UserService {
	
	public String createUser(User u);

	public List<User> getUserList();

	public User findUserById(int userId);

	public String updateUser(int userId, User newUser);
	
	public String deleteUser(int userId);
    
	public String findUserTypeById(int userId);


}
