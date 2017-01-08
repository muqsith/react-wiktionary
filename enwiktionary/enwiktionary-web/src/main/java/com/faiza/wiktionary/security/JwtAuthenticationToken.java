package com.faiza.wiktionary.security;

import java.util.Collection;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

public class JwtAuthenticationToken extends AbstractAuthenticationToken {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6460770114214989875L;
	
	private final Object principal;
	private Object credentials;
	private String token;
	
	public JwtAuthenticationToken() {
		super(null);
		this.principal = null;
		this.credentials = null;
		setAuthenticated(false);
	}
	
	public JwtAuthenticationToken(String token) {
		// every request
		super(null);
		this.principal = null;
		this.credentials = null;
		this.token = token;
		setAuthenticated(false);
	}

	public JwtAuthenticationToken(Object principal, Object credentials) {
		// login
		super(null);
		this.principal = principal;
		this.credentials = credentials;
		setAuthenticated(false);
	}
	
	public JwtAuthenticationToken(Object principal, Object credentials,
			Collection<? extends GrantedAuthority> authorities, String token) {
		super(authorities);
		this.principal = principal;
		this.credentials = credentials;
		this.token = token;
		super.setAuthenticated(true); // must use super, as we override
	}

	public Object getCredentials() {
		return this.credentials;
	}

	public Object getPrincipal() {
		return this.principal;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
		if (isAuthenticated) {
			throw new IllegalArgumentException(
					"Cannot set this token to trusted - use constructor which takes a GrantedAuthority list instead");
		}

		super.setAuthenticated(false);
	}

	@Override
	public void eraseCredentials() {
		super.eraseCredentials();
		credentials = null;
	}
}
