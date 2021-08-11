package com.techzy.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.ContactDetails;
import com.techzy.appl.beans.User;
import com.techzy.appl.dao.ContactDao;

@Service("contactService")
public class ContactServiceImpl implements ContactService{
	
	@Autowired
	private ContactDao contactDao;

	@Override
	public String createContact(ContactDetails contact) {
		return contactDao.createContact(contact);
	}

	@Override
	public List<ContactDetails> getContactList() {
		List<ContactDetails> finalList = contactDao.getContactList();
		return finalList;
	}

	@Override
	public ContactDetails findContactById(int userId) {
		ContactDetails contact = contactDao.findContactById(userId);
		return contact;
	}

	@Override
	public String updateContact(int contactId, ContactDetails contact) {
		return contactDao.updateContact(contactId, contact);
	}

	@Override
	public String deleteContacts(int contactId) {
		return contactDao.deleteContacts(contactId);
	}


	
}
