package com.faiza.wiktionary.service.impl;

import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faiza.wiktionary.dao.Wiktionary;
import com.faiza.wiktionary.dao.entities.Word;
import com.faiza.wiktionary.dto.WordDTO;
import com.faiza.wiktionary.service.WiktionaryService;

@Service
public class WiktionaryServiceImpl implements WiktionaryService{
	
	@Autowired
	private Wiktionary wiktionary;
	
	public String getSortedChars(String title) {
		return this.wiktionary.getSortedChars(title);
	}

	public String getDefinition(String title) {
		return this.wiktionary.getDefinition(title);
	}

	public WordDTO getWord(String title) {
		WordDTO wordDto = new WordDTO();
		Word word = this.wiktionary.getWord(title);
		if (word != null) { 
			BeanUtils.copyProperties(word, wordDto);
		}
		return wordDto;
	}

	public Set<String> getAllTitles() {
		return this.wiktionary.getAllTitles();
	}

	public Set<String> getAnagrams(String title) {
		return this.wiktionary.getAnagrams(title);
	}

	public Set<String> search(String titleBegining) {
		return this.wiktionary.search(titleBegining);
	}

}
