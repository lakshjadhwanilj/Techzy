package com.techzy.appl.dao;

import java.util.List;

import com.techzy.appl.beans.ContactDetails;
import com.techzy.appl.beans.User;

public interface ContactDao {
	
	public String createContact(ContactDetails contact);
	
	public List<ContactDetails> getContactList();
	
	public ContactDetails findContactById(int contactId);
	
	public String updateContact(int contactId, ContactDetails contact);
	
	public String deleteContacts(int contactId);


}
