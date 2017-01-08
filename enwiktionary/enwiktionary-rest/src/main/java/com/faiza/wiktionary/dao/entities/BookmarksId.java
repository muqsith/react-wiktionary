package com.faiza.wiktionary.dao.entities;

import java.io.Serializable;

public class BookmarksId implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
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
	
	@Override
	public boolean equals(Object obj) {
		boolean isEqual = false;
		if (obj != null && obj instanceof BookmarksId) {
			boolean isEmailEqual = false;
			if (this.email != null) {
				isEmailEqual = this.email.equalsIgnoreCase(((BookmarksId)obj).getEmail());
			}
			boolean isTitleEqual = false;
			if (this.title != null) {
				isTitleEqual = this.title.equalsIgnoreCase(((BookmarksId)obj).getTitle());
			}
			isEqual = isEmailEqual && isTitleEqual;
		}
		return isEqual;
	}
	
	@Override
	public int hashCode() {
		int hashCode = 0;
		if (this.email != null) {
			hashCode += this.email.hashCode();
		}
		if (this.title != null) {
			hashCode += this.title.hashCode();
		}
		return hashCode;
	}
	
}
