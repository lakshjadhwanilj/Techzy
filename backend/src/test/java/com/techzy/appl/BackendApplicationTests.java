package com.techzy.appl;




import static org.junit.jupiter.api.Assertions.assertThrows;


import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.techzy.appl.beans.Payment;
import com.techzy.appl.beans.Product;
import com.techzy.appl.beans.User;
import com.techzy.appl.excp.PaymentNotDoneException;
import com.techzy.appl.excp.ProductNotUpdatedException;
import com.techzy.appl.excp.UserNotFoundException;
import com.techzy.appl.services.CartItemServiceImpl;
import com.techzy.appl.services.PaymentServiceImpl;
import com.techzy.appl.services.ProductServiceImpl;
import com.techzy.appl.services.UserServiceImpl;

@SpringBootTest
class BackendApplicationTests {

	@Autowired
	private ProductServiceImpl productService;
	
	@Autowired
	private PaymentServiceImpl paymentService;
	
	@Autowired
	private UserServiceImpl userService;
	
	@Autowired
	private CartItemServiceImpl cartItemService;
	
	Scanner sc = new Scanner(System.in);
	
//	@Test
//	void contextLoads() {
//	}
	
	@Test
	public void addProductTesting() {
		Product product = new Product("Iphone 12","Great Design",120000,10,5,"M");
		String msg = productService.createProduct(product);
		Assertions.assertEquals("Product Added",msg);
	}
	
	@Test
	public void getAllProductsTesting() {
		List<Product> productList = productService.getProductList();
		int previousListLength = productList.size();
		Product product = new Product("Iphone 11","Good Design",100000,8,6,"M");
		String msg = productService.createProduct(product);
		productList = productService.getProductList();
		Assertions.assertEquals(productList.size(),previousListLength + 1);
	}
	
	@Test
	public void deleteCartItemTesting() {
		String msg = cartItemService.deleteCartItem(40009);
		Assertions.assertEquals("Cart Item not Deleted",msg);
	}
	
	@Test
	void findUserExceptionTest() {
		Throwable exception = assertThrows(UserNotFoundException.class, () -> {
			User user = new User();
			user = userService.findUserById(10);
		});
		Assertions.assertEquals("No user found", exception.getMessage());
	}
	
	@Test
	void productNotUpdatedExceptionTest() {
		Throwable exception = assertThrows(ProductNotUpdatedException.class, () -> {
			Product product = new Product("Iphone 12","Great Design",120000,10,5,"M");
			int productId = sc.nextInt();
			String msg = productService.updateProduct(productId, product);
		});
		Assertions.assertEquals("Product not Updated", exception.getMessage());
	}
	
	@Test
	void paymentNotDoneExceptionTest() {
		Throwable exception = assertThrows(PaymentNotDoneException.class, () -> {
			Payment payment = new Payment();
			payment = paymentService.getPayment(12);
		});
		Assertions.assertEquals("Payment not done", exception.getMessage());
	}
}
