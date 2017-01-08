package com.faiza.wiktionary.dao.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name = "enwiktionary" )
public class Word implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2438917772742803262L;

	@Id
	@Column(name="title")
	private String title;
	
	@Column(name="data")
	private String definition;
	
	@Column(name="char_sort")
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
