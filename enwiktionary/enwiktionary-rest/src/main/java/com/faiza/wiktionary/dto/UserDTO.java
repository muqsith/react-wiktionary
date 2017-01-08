package com.faiza.wiktionary.dto;

import java.io.Serializable;

public class UserDTO implements Serializable{

	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 8557226963229732391L;

	private String fname;
	
	private String lname;
	
	private String email;
	
	private String password;
	
	private String role;
	
	private Integer anonymous;
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	public Integer getAnonymous() {
		return anonymous;
	}
	public void setAnonymous(Integer anonymous) {
		this.anonymous = anonymous;
	}
	
	
	@Override
	public boolean equals(Object obj) {
		boolean isEqual = false;
		if (obj instanceof UserDTO){
			if (this.email != null) {
				isEqual = this.email.equals(((UserDTO)obj).getEmail());
			}
		}
		return isEqual;
	}
	
	@Override
	public int hashCode() {
		if (this.email != null) {
			return this.email.hashCode();
		}
		return super.hashCode();
	}
	@Override
	public String toString() {
		return "{\"fname\":\"" + fname + "\",\"lname\":\"" + lname + "\",\"email\":\"" + email + "\",\"password\":\""
				+ password + "\",\"role\":\"" + role + "\"}";
	}
	
}
