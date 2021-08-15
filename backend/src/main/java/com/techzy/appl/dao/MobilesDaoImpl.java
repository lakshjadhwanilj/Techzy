package com.techzy.appl.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.techzy.appl.beans.Mobiles;

@Repository("mobilesDao")
@EnableTransactionManagement
public class MobilesDaoImpl implements MobilesDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public String addMobileData(int productId, Mobiles mobile) {
		mobile.setProductId(productId);
		em.persist(mobile);
		return "Mobile Data Added";
	}

	@Override
	public Mobiles getMobileData(int productId) {
		return em.find(Mobiles.class, productId);
	}

	@Override
	@Transactional
	public String deleteMobileData(int productId) {
		Mobiles mobile = em.find(Mobiles.class, productId);
		em.remove(mobile);
		return "Mobile data deleted";
	}

	@Override
	@Transactional
	public String updateMobileData(int productId, Mobiles newMobile) {
		Mobiles mobile = em.find(Mobiles.class, productId);
		mobile.setBattery(newMobile.getBattery());
		mobile.setCamera(newMobile.getCamera());
		mobile.setOs(newMobile.getOs());
		mobile.setRam(newMobile.getRam());
		mobile.setRom(newMobile.getRom());
		mobile.setColor(newMobile.getColor());
		mobile.setProcessor(newMobile.getProcessor());
		mobile.setResolution(newMobile.getResolution());
		mobile.setSim(newMobile.getSim());
		em.merge(mobile);
		return "Mobile data updated";
	}

}
