package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.User;
import com.techzy.appl.excp.UserNotFoundException;

public interface UserService {
	
	public String createUser(User u);

	public List<User> getUserList();

	public User findUserById(int userId) throws UserNotFoundException;

	public String updateUser(int userId, User newUser);
	
	public String deleteUser(int userId);
    
	public String findUserTypeById(int userId);
	
	public String updateByEmail(User newUser);


}
