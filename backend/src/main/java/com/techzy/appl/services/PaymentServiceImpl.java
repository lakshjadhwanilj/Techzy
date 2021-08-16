package com.techzy.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.Payment;
import com.techzy.appl.dao.PaymentDao;
import com.techzy.appl.excp.PaymentNotDoneException;

@Service("paymentService")
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentDao paymentDao;

	@Override
	public String makePayment(Payment payment) {
		
		return paymentDao.makePayment(payment);
	}

	@Override
	public List<Payment> getAllByUserId(int userId) {
		return paymentDao.getAllByUserId(userId);
	}

	@Override
	public Payment getPayment(int paymentId) throws PaymentNotDoneException{
		return paymentDao.getPayment(paymentId);
	}
}
