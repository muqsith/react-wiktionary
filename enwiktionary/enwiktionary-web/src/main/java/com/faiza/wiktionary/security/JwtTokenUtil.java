
package com.faiza.wiktionary.security;

import java.util.Base64;

import com.faiza.wiktionary.dto.UserDTO;

public class JwtTokenUtil {
	
	public static UserDTO parseToken(String token) {
		String decodedString = new String(Base64.getDecoder().decode(token.getBytes()));
		String[] creds = decodedString.split(":");
		UserDTO userDto = new UserDTO();
		userDto.setEmail(creds[0]);
		userDto.setPassword(creds[1]);
		return userDto;
	}
	
	public static String generateToken(UserDTO user) {
		return Base64.getEncoder().encodeToString((user.getEmail()
				+":"+user.getPassword()).getBytes());
	}
}
