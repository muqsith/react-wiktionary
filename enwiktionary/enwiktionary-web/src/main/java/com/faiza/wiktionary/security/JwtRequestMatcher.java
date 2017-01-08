package com.faiza.wiktionary.security;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.util.StringUtils;

public class JwtRequestMatcher implements RequestMatcher{

	@Override
	public boolean matches(HttpServletRequest request) {
		return (request != null 
				&& (!StringUtils.isEmpty(request.getRequestURL()))
				&& (request.getRequestURL().toString().contains("/app/rest/dictionary/"))
				);
	}

}
