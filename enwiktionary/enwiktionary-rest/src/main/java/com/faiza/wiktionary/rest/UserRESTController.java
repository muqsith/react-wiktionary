package com.faiza.wiktionary.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.faiza.wiktionary.dto.BookmarkDTO;
import com.faiza.wiktionary.dto.UserDTO;
import com.faiza.wiktionary.service.BookmarksService;
import com.faiza.wiktionary.service.UserService;

@RestController
@RequestMapping("/app/rest/dictionary")
public class UserRESTController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BookmarksService bookmarksService;
	
	@RequestMapping("/user")
	public UserDTO getUser() {
		UserDTO userDto = (UserDTO) SecurityContextHolder
				.getContext()
				.getAuthentication()
				.getPrincipal();
		return userDto;
	}
	
	@RequestMapping(value="/createuser", 
			method=RequestMethod.POST)
	public void createUser(@RequestBody UserDTO userDto) {
		userService.createUser(userDto);
	}
	
	@RequestMapping("/addbookmark")
	public void addBookmarks(@RequestParam(value="email") String email, 
				@RequestParam(value="title") String title) {
		BookmarkDTO bookmark = new BookmarkDTO();
		bookmark.setEmail(email);
		bookmark.setTitle(title);
		bookmarksService.addBookmark(bookmark);
	}
	
	@RequestMapping("/removebookmark")
	public void removeBookmark(@RequestParam(value="email") String email, 
			@RequestParam(value="title") String title) {
		BookmarkDTO bookmark = new BookmarkDTO();
		bookmark.setEmail(email);
		bookmark.setTitle(title);
		bookmarksService.removeBookmark(bookmark);
	}
	
	@RequestMapping("/bookmarks")
	public List<String> getBookmarks(@RequestParam(value="email") String email) {
		return bookmarksService.getBookmarks(email);
	}
}
