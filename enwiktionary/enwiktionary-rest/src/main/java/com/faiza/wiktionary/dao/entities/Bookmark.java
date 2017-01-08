package com.faiza.wiktionary.dao.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity @IdClass(BookmarksId.class)
@Table( name = "bookmarks" )
public class Bookmark implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 4107289684559581771L;
	
	@Id
	private String email;
	
	@Id
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
