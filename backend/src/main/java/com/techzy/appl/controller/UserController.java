package com.techzy.appl.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techzy.appl.beans.User;
import com.techzy.appl.excp.UserNotFoundException;
import com.techzy.appl.services.UserServiceImpl;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/tech/v1")
public class UserController {
	
	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping("/addnewuser")
	public void createUser(@RequestBody User u) {
		userService.createUser(u);		
	}
	
	@GetMapping("/users")
	public List<User> getUserList(){
		System.out.println("Inside controller = calling getUserList");
		List<User> userList = userService.getUserList();
		return userList;
	}
	
	@GetMapping(path = "/user/{id}" , produces = "application/json")
	public User findUserByID(@PathVariable(value="id")int userId) {
		User u = new User();
		try {
			u = userService.findUserById(userId);
		} catch (UserNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return u;
	}
	
	@GetMapping(path = "/findUserType/{id}" , produces = "application/json")
	public String findUserTypeByID(@PathVariable(value="id")int userId) {
		return userService.findUserTypeById(userId);
	}
	
	@PutMapping(path = "/updateUser/{userId}")
	public void updateUser(@PathVariable(value="userId") int userId, @RequestBody User u) {
		userService.updateUser(userId, u);
	}

	@DeleteMapping("/deleteUser/{userId}")
	public void deleteUser(@PathVariable(value = "userId") int userId) {
		userService.deleteUser(userId);
	}
	
	@PutMapping("/updatePassword")
	public String updatePassword(@RequestBody User user) {
		return userService.updateByEmail(user);
	}
	
}
