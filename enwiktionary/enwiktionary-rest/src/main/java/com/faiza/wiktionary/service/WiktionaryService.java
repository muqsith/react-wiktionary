package com.faiza.wiktionary.service;

import java.util.Set;

import com.faiza.wiktionary.dto.WordDTO;

public interface WiktionaryService {
	String getSortedChars(String title);
	String getDefinition(String title);
	WordDTO getWord(String title);
	Set<String> getAllTitles();
	Set<String> getAnagrams(String title);
	Set<String> search(String titleBegining);
}
