package com.techzy.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.User;
import com.techzy.appl.dao.UserDao;

@Service("userService")
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao userDao;

	@Override
	public String createUser(User u) {
		System.out.println("----Service layer----");
		return userDao.createUser(u);
	}

	@Override
	public List<User> getUserList() {
		System.out.println("Service layer--- Print list");
		List<User> finalList = userDao.getUserList();
		return finalList;
	}

	@Override
	public User findUserById(int userId) {
		System.out.println("Service layer ---- Find User");
		User user = userDao.findUserById(userId);
//		System.out.println(myList);
		return user;
	}

	@Override
	public String updateUser(int userId, User newUser) {
		System.out.println("Service layer ---- Update User");
		return userDao.updateUser(userId, newUser);
	}

	@Override
	public String deleteUser(int userId) {
		return userDao.deleteUser(userId);
	}

	@Override
	public String findUserTypeById(int userId) {
		String userType = userDao.findUserTypeById(userId);
		return userType;
	}

	
	
	

	
}
