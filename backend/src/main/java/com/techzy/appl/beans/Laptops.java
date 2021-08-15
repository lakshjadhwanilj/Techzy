package com.techzy.appl.beans;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "LAPTOPS")
public class Laptops implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "productId")
	private int productId;

	@Column(name = "ram")
	private String ram;

	@Column(name = "rom")
	private String rom;

	@Column(name = "camera")
	private String camera;

	@Column(name = "resolution")
	private String resolution;

	@Column(name = "usb_slots")
	private int usbSlots;

	@Column(name = "processor")
	private String processor;

	@Column(name = "os")
	private String os;

	@Column(name = "color")
	private String color;

	@Column(name = "battery")
	private int battery;

	public Laptops() {
		super();
	}

	public Laptops(int productId, String ram, String rom, String camera, String resolution, int usbSlots,
			String processor, String os, String color, int battery) {
		super();
		this.productId = productId;
		this.ram = ram;
		this.rom = rom;
		this.camera = camera;
		this.resolution = resolution;
		this.usbSlots = usbSlots;
		this.processor = processor;
		this.os = os;
		this.color = color;
		this.battery = battery;
	}

	public Laptops(String ram, String rom, String camera, String resolution, int usbSlots, String processor, String os,
			String color, int battery) {
		super();
		this.ram = ram;
		this.rom = rom;
		this.camera = camera;
		this.resolution = resolution;
		this.usbSlots = usbSlots;
		this.processor = processor;
		this.os = os;
		this.color = color;
		this.battery = battery;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getRam() {
		return ram;
	}

	public void setRam(String ram) {
		this.ram = ram;
	}

	public String getRom() {
		return rom;
	}

	public void setRom(String rom) {
		this.rom = rom;
	}

	public String getCamera() {
		return camera;
	}

	public void setCamera(String camera) {
		this.camera = camera;
	}

	public String getResolution() {
		return resolution;
	}

	public void setResolution(String resolution) {
		this.resolution = resolution;
	}

	public int getUsbSlots() {
		return usbSlots;
	}

	public void setUsbSlots(int usbSlots) {
		this.usbSlots = usbSlots;
	}

	public String getProcessor() {
		return processor;
	}

	public void setProcessor(String processor) {
		this.processor = processor;
	}

	public String getOs() {
		return os;
	}

	public void setOs(String os) {
		this.os = os;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getBattery() {
		return battery;
	}

	public void setBattery(int battery) {
		this.battery = battery;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Laptops [productId=" + productId + ", ram=" + ram + ", rom=" + rom + ", camera=" + camera
				+ ", resolution=" + resolution + ", usbSlots=" + usbSlots + ", processor=" + processor + ", os=" + os
				+ ", color=" + color + ", battery=" + battery + "]";
	}

}
