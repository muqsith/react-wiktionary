package com.faiza.wiktionary.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.faiza.wiktionary.dao.BookmarksDao;
import com.faiza.wiktionary.dao.entities.Bookmark;

@Repository
public class BookmarksDaoImpl implements BookmarksDao{

	@PersistenceContext
	private EntityManager em;
	
	@SuppressWarnings("unchecked")
	public List<String> getUserBookmarks(String userid) {
		Query query = em.createQuery("select b.title from Bookmark b where b.email = :userid");
		query.setParameter("userid", userid);
		List<String> result = new ArrayList<String>();
		Object queryResult = query.getResultList();
		if (queryResult != null) {
			result = (List<String>) queryResult; 
		}
		return result;
	}

	public void addBookmark(Bookmark bookmark) {
		em.persist(bookmark);
	}

	public void removeBookmark(Bookmark bookmark) {
		em.remove(bookmark);
	}

	@SuppressWarnings("unchecked")
	public Bookmark getBookmakr(String email, String title) {
		Query query = em.createQuery("from Bookmark b where b.email = :email and b.title = :title");
		query.setParameter("email", email);
		query.setParameter("title", title);		
		Bookmark result = null;
		Object queryResult = query.getResultList();
		if (queryResult != null) {
			List<Bookmark> bookmarks = (List<Bookmark>) queryResult;
			if (bookmarks.size() > 0) {
				result = bookmarks.get(0);
			}			
		}
		return result;
	}

}
