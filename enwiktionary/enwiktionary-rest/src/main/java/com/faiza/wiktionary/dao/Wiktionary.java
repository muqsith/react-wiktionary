package com.faiza.wiktionary.dao;

import java.util.Set;

import com.faiza.wiktionary.dao.entities.Word;

public interface Wiktionary {
	
	String getSortedChars(String title);
	String getDefinition(String title);
	Word getWord(String title);
	Set<String> getAllTitles();
	Set<String> getAnagrams(String title);
	Set<String> search(String titleBegining);
}
