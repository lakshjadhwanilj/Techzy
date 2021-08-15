package com.techzy.appl.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techzy.appl.beans.Laptops;
import com.techzy.appl.dao.LaptopsDao;

@Service("laptopsServcie")
public class LaptopsServiceImpl implements LaptopsService {

	@Autowired
	private LaptopsDao laptopsDao;

	@Override
	public String addLaptopData(int productId, Laptops laptop) {
		return laptopsDao.addLaptopData(productId, laptop);
	}

	@Override
	public Laptops getLaptopData(int productId) {
		return laptopsDao.getLaptopData(productId);
	}

	@Override
	public String deleteLaptopData(int productId) {
		return laptopsDao.deleteLaptopData(productId);
	}

	@Override
	public String updateLaptopData(int productId, Laptops newLaptop) {
		return laptopsDao.updateLaptopData(productId, newLaptop);
	}

}
