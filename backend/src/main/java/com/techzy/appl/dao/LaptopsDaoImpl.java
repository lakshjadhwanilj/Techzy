package com.techzy.appl.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.techzy.appl.beans.Laptops;

@Repository("laptopsDao")
@EnableTransactionManagement
public class LaptopsDaoImpl implements LaptopsDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public String addLaptopData(int productId, Laptops laptop) {
		laptop.setProductId(productId);
		em.persist(laptop);
		return "Laptop Data Added";
	}

	@Override
	public Laptops getLaptopData(int productId) {
		return em.find(Laptops.class, productId);
	}

	@Override
	@Transactional
	public String deleteLaptopData(int productId) {
		Laptops laptop = em.find(Laptops.class, productId);
		em.remove(laptop);
		return "Laptop Data Deleted";
	}

	@Override
	@Transactional
	public String updateLaptopData(int productId, Laptops newLaptop) {
		Laptops laptop = em.find(Laptops.class, productId);
		laptop.setBattery(newLaptop.getBattery());
		laptop.setCamera(newLaptop.getCamera());
		laptop.setOs(newLaptop.getOs());
		laptop.setRam(newLaptop.getRam());
		laptop.setRom(newLaptop.getRom());
		laptop.setColor(newLaptop.getColor());
		laptop.setProcessor(newLaptop.getProcessor());
		laptop.setResolution(newLaptop.getResolution());
		laptop.setUsbSlots(newLaptop.getUsbSlots());
		em.merge(laptop);
		return "Laptop data updated";
	}

}
