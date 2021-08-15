package com.techzy.appl.services;

import com.techzy.appl.beans.Laptops;

public interface LaptopsService {

	public String addLaptopData(int productId, Laptops laptop);

	public Laptops getLaptopData(int productId);

	public String deleteLaptopData(int productId);

	public String updateLaptopData(int productId, Laptops newLaptop);

}
