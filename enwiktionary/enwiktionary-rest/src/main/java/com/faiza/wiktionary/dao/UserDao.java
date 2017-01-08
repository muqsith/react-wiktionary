package com.faiza.wiktionary.dao;

import com.faiza.wiktionary.dao.entities.User;

public interface UserDao {
	
	void createUser(User user);
	
	User getUser(String email);
	
}
