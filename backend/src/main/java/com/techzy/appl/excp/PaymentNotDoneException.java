package com.techzy.appl.excp;

public class PaymentNotDoneException extends Exception{

	private static final long serialVersionUID = 1L;

	public PaymentNotDoneException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaymentNotDoneException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public PaymentNotDoneException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public PaymentNotDoneException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public PaymentNotDoneException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}
	
	
}
