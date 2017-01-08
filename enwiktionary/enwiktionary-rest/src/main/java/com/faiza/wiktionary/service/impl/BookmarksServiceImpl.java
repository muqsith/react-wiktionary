package com.faiza.wiktionary.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.faiza.wiktionary.dao.BookmarksDao;
import com.faiza.wiktionary.dao.entities.Bookmark;
import com.faiza.wiktionary.dto.BookmarkDTO;
import com.faiza.wiktionary.service.BookmarksService;

@Service
public class BookmarksServiceImpl implements BookmarksService{

	@Autowired
	private BookmarksDao bookmarksDao;
	
	public List<String> getBookmarks(String email) {
		return bookmarksDao.getUserBookmarks(email);
	}
	
	@Transactional
	public void addBookmark(BookmarkDTO bookmarkDto) {
		Bookmark bookmark = new Bookmark();
		bookmark.setEmail(bookmarkDto.getEmail());
		bookmark.setTitle(bookmarkDto.getTitle());
		bookmarksDao.addBookmark(bookmark);		
	}

	@Transactional
	public void removeBookmark(BookmarkDTO bookmarkDto) {
		Bookmark bookmark = bookmarksDao.getBookmakr(bookmarkDto.getEmail(), bookmarkDto.getTitle());
		bookmarksDao.removeBookmark(bookmark);
	}

}
