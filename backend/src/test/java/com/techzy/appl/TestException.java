package com.techzy.appl;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.techzy.appl.beans.User;
import com.techzy.appl.excp.UserNotFoundException;
import com.techzy.appl.services.UserServiceImpl;

class TestException {
	
	@Autowired
	private UserServiceImpl userService;
	
	@Test
	void test() {
		Throwable exception = assertThrows(UserNotFoundException.class, () -> {
			User user = new User();
			user = userService.findUserById(10);
		});
		Assertions.assertEquals("No user found", exception.getMessage());
	}

}
