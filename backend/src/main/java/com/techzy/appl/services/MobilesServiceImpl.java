package com.techzy.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.Mobiles;
import com.techzy.appl.dao.MobilesDao;

@Service("mobilesServcie")
public class MobilesServiceImpl implements MobilesService {

	@Autowired
	private MobilesDao mobilesDao;

	@Override
	public String addMobileData(int productId, Mobiles mobile) {
		return mobilesDao.addMobileData(productId, mobile);
	}

	@Override
	public Mobiles getMobileData(int productId) {
		return mobilesDao.getMobileData(productId);
	}

	@Override
	public String deleteMobileData(int productId) {
		return mobilesDao.deleteMobileData(productId);
	}

	@Override
	public String updateMobileData(int productId, Mobiles newMobile) {
		return mobilesDao.updateMobileData(productId, newMobile);
	}

}
