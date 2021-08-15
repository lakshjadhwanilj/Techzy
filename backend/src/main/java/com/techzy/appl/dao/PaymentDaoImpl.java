package com.techzy.appl.dao;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;


import com.techzy.appl.beans.Payment;

@Repository("paymentDao")
public class PaymentDaoImpl implements PaymentDao {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public String makePayment(Payment payment) {
		payment.setDate(LocalDate.now());
		payment.setTime(Timestamp.from(Instant.now()));
		em.persist(payment);
		return "Payment Done Successfully";
	}

	@Override
	public List<Payment> getAllByUserId(int userId) {
		String sql = "Select p From Payment p where p.userId = :userId";
		TypedQuery<Payment> tq = em.createQuery(sql,Payment.class);
		tq.setParameter("userId", userId);
		List<Payment>mylist = tq.getResultList();
		System.out.println(mylist);
		return mylist;
	}

	@Override
	public Payment getPayment(int paymentId) {
		return em.find(Payment.class, paymentId);
	}
	

}
