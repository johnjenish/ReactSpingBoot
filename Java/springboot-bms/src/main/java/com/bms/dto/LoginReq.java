package com.bms.dto;

public class LoginReq {
	
	private long userId;
	private String password;
	
	 
	public LoginReq(long userId, String password) {
		super();
		this.userId = userId;
		this.password = password;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "LoginReq [userId=" + userId + ", password=" + password + "]";
	}
	
	
}
