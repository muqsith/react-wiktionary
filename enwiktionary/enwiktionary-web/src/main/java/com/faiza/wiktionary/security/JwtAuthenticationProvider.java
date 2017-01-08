package com.faiza.wiktionary.security;

import java.util.List;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.util.StringUtils;

import com.faiza.wiktionary.dto.UserDTO;
import com.faiza.wiktionary.service.UserService;

public class JwtAuthenticationProvider implements AuthenticationProvider {
	
	private UserService userService;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		JwtAuthenticationToken result = null;
		if (authentication != null) {
			JwtAuthenticationToken jwtAuthenticationToken = (JwtAuthenticationToken) authentication;
			UserDTO userDto = null;
			String token = jwtAuthenticationToken.getToken();
			if (!StringUtils.isEmpty(token)) {
				// every request
				userDto = JwtTokenUtil.parseToken(token);			
				if (userDto != null && isValidUser(userDto)) {
					setAdditionalDetails(userDto);
					List<GrantedAuthority> authorityList = AuthorityUtils
							.commaSeparatedStringToAuthorityList(userDto.getRole());
					result = new JwtAuthenticationToken(userDto, null, authorityList, token);
				}
			}
		}		
		return result;
	}

	private void setAdditionalDetails(UserDTO userDto) {
		UserDTO user = userService.getUser(userDto.getEmail());
		if (user != null) {
			userDto.setFname(user.getFname());
			userDto.setLname(user.getLname());
			userDto.setRole(user.getRole());
		}
	}

	private boolean isValidUser(UserDTO userDto) {
		return userService.isValidUser(userDto.getEmail(), userDto.getPassword());
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return (JwtAuthenticationToken.class.isAssignableFrom(authentication));
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
}
