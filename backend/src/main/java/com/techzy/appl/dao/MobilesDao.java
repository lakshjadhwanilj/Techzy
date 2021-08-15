package com.techzy.appl.dao;

import java.util.List;

import com.techzy.appl.beans.Mobiles;

public interface MobilesDao {

	public String addMobileData(int productId, Mobiles mobile);

	public Mobiles getMobileData(int productId);


	public String deleteMobileData(int productId);

	public String updateMobileData(int productId, Mobiles newMobile);

}
