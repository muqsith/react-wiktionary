package com.faiza.wiktionary.dto;

import java.io.Serializable;

public class BookmarkDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7908383127059138996L;
	
	private String email;
	
	private String title;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
}
