package com.techzy.appl.services;

import java.util.List;

import com.techzy.appl.beans.Mobiles;

public interface MobilesService {

	public String addMobileData(int productId, Mobiles mobile);

	public Mobiles getMobileData(int productId);

	public String deleteMobileData(int productId);

	public String updateMobileData(int productId, Mobiles newMobile);

}
