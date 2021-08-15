package com.techzy.appl.dao;

import com.techzy.appl.beans.Laptops;

public interface LaptopsDao {

	public String addLaptopData(int productId, Laptops laptop);

	public Laptops getLaptopData(int productId);

	public String deleteLaptopData(int productId);

	public String updateLaptopData(int productId, Laptops newLaptop);
}
