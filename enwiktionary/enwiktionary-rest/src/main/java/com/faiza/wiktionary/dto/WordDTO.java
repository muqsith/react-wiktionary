package com.faiza.wiktionary.dto;

import java.io.Serializable;

public class WordDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2710714206758327591L;
	
	private String title;
	private String definition;
	private String sortedCharacters;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDefinition() {
		return definition;
	}
	public void setDefinition(String definition) {
		this.definition = definition;
	}
	public String getSortedCharacters() {
		return sortedCharacters;
	}
	public void setSortedCharacters(String sortedCharacters) {
		this.sortedCharacters = sortedCharacters;
	}
	
}
