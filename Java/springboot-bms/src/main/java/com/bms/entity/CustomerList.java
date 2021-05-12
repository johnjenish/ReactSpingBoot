package com.bms.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="register_list")
public class CustomerList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long registeredId;
	private String name;
	private String username;
	private String password;
	private long depositamount;
	private String guardiantype;
	private String guardianname;
	private String address;
	private String citizenship;
	private String state;
	private String email;
	private String gender;
	private String maritialstatus;
	private long contactno;
	private Date dob;
	private Date regdate;
	private String accounttype;
	private String branchname;
	private String citizenstatus; 
	
	public String getGuardiantype() {
		return guardiantype;
	}
	public void setGuardiantype(String guardiantype) {
		this.guardiantype = guardiantype;
	}
	public String getGuardianname() {
		return guardianname;
	}
	public void setGuardianname(String guardianname) {
		this.guardianname = guardianname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCitizenship() {
		return citizenship;
	}
	public void setCitizenship(String citizenship) {
		this.citizenship = citizenship;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMaritialstatus() {
		return maritialstatus;
	}
	public void setMaritialstatus(String maritialstatus) {
		this.maritialstatus = maritialstatus;
	}
	public long getContactno() {
		return contactno;
	}
	public void setContactno(long contactno) {
		this.contactno = contactno;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public Date getRegdate() {
		return regdate;
	}
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	public String getAccounttype() {
		return accounttype;
	}
	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}
	public String getBranchname() {
		return branchname;
	}
	public void setBranchname(String branchname) {
		this.branchname = branchname;
	}
	public String getCitizenstatus() {
		return citizenstatus;
	}
	public void setCitizenstatus(String citizenstatus) {
		this.citizenstatus = citizenstatus;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getDepositamount() {
		return depositamount;
	}
	public void setDepositamount(long depositamount) {
		this.depositamount = depositamount;
	}
	public long getRegisteredId() {
		return registeredId;
	}
	public void setRegisteredId(long registeredId) {
		this.registeredId = registeredId;
	}
		

}
