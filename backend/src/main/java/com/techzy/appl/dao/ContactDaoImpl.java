package com.techzy.appl.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.techzy.appl.beans.ContactDetails;
import com.techzy.appl.beans.User;

@Repository("contactDao")
@EnableTransactionManagement
public class ContactDaoImpl implements ContactDao{
	
	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public String createContact(ContactDetails contact) {
		em.persist(contact);
		return "Contact Added";
	}

	@Override
	public List<ContactDetails> getContactList() {
		String sql = "select contact from ContactDetails contact";
		List<ContactDetails> contactList = em.createQuery(sql).getResultList();
		return contactList;
	}

	@Override
	public ContactDetails findContactById(int contactId) {
		return em.find(ContactDetails.class, contactId);
	}

	@Override
	@Transactional
	public String updateContact(int userId, ContactDetails newContact) {
		//ContactDetails contact=em.find(ContactDetails.class, contactId);
		User user = em.find(User.class, userId);
		ContactDetails contactDetails = user.getCd();
		contactDetails.setPrimaryPhoneNo(newContact.getPrimaryPhoneNo());
		contactDetails.setSecondaryPhoneNo(newContact.getSecondaryPhoneNo());
		contactDetails.setPrimaryAddress(newContact.getPrimaryAddress());
		contactDetails.setShippingAddress(newContact.getShippingAddress());
		System.out.println(newContact);
		em.merge(contactDetails);
		//user.setCd(newContact);
		//em.merge(user);
		return "Contact Details updated";
	}

	@Override
	@Transactional
	public String deleteContacts(int contactId) {
		ContactDetails contact = em.find(ContactDetails.class, contactId);
		em.remove(contact);
		return "Record deleted";
	}
	
	

	
	
	
}
