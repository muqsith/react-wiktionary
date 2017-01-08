package com.faiza.wiktionary.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.util.StringUtils;

public class JwtAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

	private static final String JWT_COOKIE = "X-JWT-Token";

	public JwtAuthenticationFilter() {
		super(new JwtRequestMatcher());
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, 
			HttpServletResponse response)
					throws AuthenticationException, IOException, ServletException {
		JwtAuthenticationToken authRequest = new JwtAuthenticationToken();
		Cookie[] cookies = request.getCookies();
		if (cookies != null && cookies.length > 0) {
			for (Cookie cookie : cookies) {
				if (cookie != null && !StringUtils.isEmpty(cookie.getName())
						&& JWT_COOKIE.equalsIgnoreCase(cookie.getName())) {
					String jwtToken = cookie.getValue();
					authRequest = new JwtAuthenticationToken(jwtToken);
				}
			}
		}
		return getAuthenticationManager().authenticate(authRequest);
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, 
			HttpServletResponse response, FilterChain chain, Authentication authResult)
					throws IOException, ServletException {
		super.successfulAuthentication(request, response, chain, authResult);
		// As this authentication is in HTTP header, after success we need to continue the request normally
		// and return the response as if the resource was not secured at all
		chain.doFilter(request, response);
	}

}
