package com.techzy.appl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techzy.appl.beans.ContactDetails;
import com.techzy.appl.beans.User;
import com.techzy.appl.services.ContactService;
import com.techzy.appl.services.ContactServiceImpl;
import com.techzy.appl.services.UserServiceImpl;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/tech/v1")
public class ContactController {
	
	@Autowired
	private ContactServiceImpl contactService;
	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping("/addnewcontact/{userId}")
	public void createContact(@PathVariable(value="userId") int userId, @RequestBody ContactDetails contact) {
		User user = userService.findUserById(userId);
		user.setCd(contact);
		userService.updateUser(userId, user);
	}
	
	@GetMapping("/contacts")
	public List<ContactDetails> getContactList(){
		List<ContactDetails> contactList = contactService.getContactList();
		return contactList;
	}
	
	@GetMapping(path = "/contact/{userId}" , produces = "application/json")
	public ContactDetails findContactById(@PathVariable(value="userId")int userId) {
		return contactService.findContactById(userId);
	}
	
	@PutMapping(path = "/updateContact/{userId}")
	public void updateUser(@PathVariable(value="userId") int userId, @RequestBody ContactDetails contact) {
		contactService.updateContact(userId, contact);
	}
	
	@DeleteMapping("deleteContact/{contactId}")
	public void deleteContact(@PathVariable(value = "contactId") int contactId) {
		contactService.deleteContacts(contactId);
	}
	
	
	
	

}
