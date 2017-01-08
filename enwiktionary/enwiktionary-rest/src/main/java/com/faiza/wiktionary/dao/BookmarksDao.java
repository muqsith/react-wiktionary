package com.faiza.wiktionary.dao;

import java.util.List;

import com.faiza.wiktionary.dao.entities.Bookmark;

public interface BookmarksDao {
	
	List<String> getUserBookmarks(String email);
	
	void addBookmark(Bookmark bookmark);

	void removeBookmark(Bookmark bookmark);
	
	Bookmark getBookmakr(String email, String title);
	
}
