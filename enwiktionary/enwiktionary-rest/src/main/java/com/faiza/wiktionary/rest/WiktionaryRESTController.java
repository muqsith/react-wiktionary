package com.faiza.wiktionary.rest;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.faiza.wiktionary.dto.WordDTO;
import com.faiza.wiktionary.service.WiktionaryService;

@RestController
@RequestMapping("/app/rest/dictionary")
public class WiktionaryRESTController {
	
	@Autowired
	private WiktionaryService wiktionaryService;
	
	@RequestMapping("/sorted_chars")
	public String getSortedChars (@RequestParam(value="title") String title) {
		return this.wiktionaryService.getSortedChars(title);
	}
	
	@RequestMapping("/definition")
	public String getDefinition (@RequestParam(value="title") String title) {
		return this.wiktionaryService.getDefinition(title);
	}
	
	@RequestMapping("/word")
	public WordDTO getWord (@RequestParam(value="title") String title) {
		return this.wiktionaryService.getWord(title);
	}
	
	@RequestMapping("/alltitles")
	public Set<String> getAllTitles () {
		return this.wiktionaryService.getAllTitles();
	}
	
	@RequestMapping("/anagrams")
	public Set<String> getAnagrams (@RequestParam(value="title") String title) {
		return this.wiktionaryService.getAnagrams(title);
	}
	
	@RequestMapping("/search")
	public Set<String> search (@RequestParam(value="q") String titleBegining) {
		return this.wiktionaryService.search(titleBegining);
	}
}
