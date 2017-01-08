package com.faiza.wiktionary.dao.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.faiza.wiktionary.dao.Wiktionary;
import com.faiza.wiktionary.dao.entities.Word;

@Repository
public class WiktionaryImpl implements Wiktionary {

	@PersistenceContext
	private EntityManager em;
	
	private Word getWordFromDictionary (String title) {
		Word word = null;
		TypedQuery<Word> query = em.createQuery("select w from Word w where w.title = :title", Word.class);
		query.setParameter("title", title);
		List<Word> words = query.getResultList();
		if (words != null && !words.isEmpty()) {
			word = words.get(0);
		}
		return word;
	}
	
	public String getSortedChars (String title) {
		String sortedChars = null;
		Word word = getWordFromDictionary(title);
		if (word != null) {
			sortedChars = word.getSortedCharacters();
		}
		return sortedChars;
	}

	public String getDefinition (String title) {
		String definition = null;
		Word word = getWordFromDictionary(title);
		if (word != null) {
			definition = word.getDefinition();
		}
		return definition;
	}

	public Word getWord (String title) {
		return getWordFromDictionary(title);
	}

	@SuppressWarnings("unchecked")
	public Set<String> getAllTitles () {
		Query query = em.createQuery("select w.title from Word w");
		List<String> allTitles = query.getResultList();
		Set<String> allTitlesSet = new HashSet<String>();
		allTitlesSet.addAll(allTitles);
		return allTitlesSet;
	}

	@SuppressWarnings("unchecked")
	public Set<String> getAnagrams (String title) {
		Set<String> allTitlesSet = new HashSet<String>();
		Word word = getWordFromDictionary(title);
		if (word != null) {
			Query q = em.createQuery("select w.title from Word w where w.sortedCharacters = :sortedCharacters");
			q.setParameter("sortedCharacters", word.getSortedCharacters());
			List<String> allTitles = q.getResultList();
			allTitlesSet.addAll(allTitles);
		}		
		return allTitlesSet;
	}

	@SuppressWarnings("unchecked")
	public Set<String> search(String titleBegining) {
		Query query = em.createNativeQuery("select title from enwiktionary where title like '"+titleBegining+"%'");
		List<String> allTitles = query.getResultList();
		Set<String> allTitlesSet = new HashSet<String>();
		allTitlesSet.addAll(allTitles);
		return allTitlesSet;
	}

}
