package com.faiza.wiktionary.service;

import java.util.List;

import com.faiza.wiktionary.dto.BookmarkDTO; 

public interface BookmarksService {
	
	List<String> getBookmarks(String email);
	void addBookmark(BookmarkDTO bookmark);
	void removeBookmark(BookmarkDTO bookmark);
	
}
