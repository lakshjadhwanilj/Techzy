package com.techzy.appl.dao;

import java.util.List;

import com.techzy.appl.beans.Payment;
import com.techzy.appl.excp.PaymentNotDoneException;

public interface PaymentDao {

	public String makePayment(Payment payment);
	public List<Payment> getAllByUserId(int userId);
	public Payment getPayment(int paymentId) throws PaymentNotDoneException;
	
}
