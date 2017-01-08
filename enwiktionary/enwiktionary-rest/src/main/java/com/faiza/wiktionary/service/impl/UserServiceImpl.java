package com.faiza.wiktionary.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.faiza.wiktionary.dao.UserDao;
import com.faiza.wiktionary.dao.entities.User;
import com.faiza.wiktionary.dto.UserDTO;
import com.faiza.wiktionary.service.UserService;

@Service(value="userServiceBean")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao userDao;
	
	@Transactional
	public void createUser(UserDTO userDto) {
		User user = new User();
		user.setEmail(userDto.getEmail());
		user.setFname(userDto.getFname());
		user.setLname(userDto.getLname());
		user.setPassword(getEncryptedPassword(userDto.getPassword()));
		user.setAnonymous(userDto.getAnonymous());
		user.setRole(userDto.getRole());
		userDao.createUser(user);
	}
	
	private String getEncryptedPassword(String password) {
		return BCrypt.hashpw(password, BCrypt.gensalt());
	}

	public UserDTO getUser(String email) {
		UserDTO userDto = new UserDTO();
		User user = userDao.getUser(email);
		if (user != null) {
			userDto.setEmail(user.getEmail());
			userDto.setFname(user.getFname());
			userDto.setLname(user.getLname());
			userDto.setRole(user.getRole());
			userDto.setAnonymous(user.getAnonymous());
		}
		return userDto;
	}

	public boolean isValidUser(String email, String password) {
		User user = userDao.getUser(email);
		return ((user != null)
					&& (!StringUtils.isEmpty(password))
					&& (!StringUtils.isEmpty(user.getEmail()))
					&& (BCrypt.checkpw(password, user.getPassword()))
				);
	}

}
