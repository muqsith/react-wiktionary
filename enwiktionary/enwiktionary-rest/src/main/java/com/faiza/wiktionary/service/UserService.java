package com.faiza.wiktionary.service;

import com.faiza.wiktionary.dto.UserDTO;

public interface UserService {
	
	void createUser(UserDTO user);
	UserDTO getUser(String email);
	boolean isValidUser(String email, String password);
	
}
