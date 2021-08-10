package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.ContactDetails;

public interface ContactService {
	
	public String createContact(ContactDetails contact);

	public List<ContactDetails> getContactList();
	
	public ContactDetails findContactById(int contactId);
	
	public String updateContact(int contactId, ContactDetails contact);
	
	public String deleteContacts(int contactId);



}
