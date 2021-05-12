package com.bms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bms.dto.LoginReq;
import com.bms.dto.RegisterReq;
import com.bms.entity.CustomerList;
import com.bms.service.BmsAuthService;


@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class BmsController {
	
	@Autowired 
	public BmsAuthService  bmsAuthService;
	@PostMapping(path="/api/login")
     public ResponseEntity<LoginReq> loginBMS(@RequestBody LoginReq loginReq) throws Exception{
		
		String bmsAuthNew = bmsAuthService.loginBMSUser(loginReq);		 
		System.out.println(bmsAuthNew);
		if(bmsAuthNew == null) {
			return new ResponseEntity<LoginReq>(loginReq,HttpStatus.BAD_GATEWAY);			 
		}else {
			return new ResponseEntity<LoginReq>(loginReq,HttpStatus.OK);
		}
		
	}
	@PostMapping(value="/api/register")
	public ResponseEntity<CustomerList> registerBMS(@RequestBody RegisterReq registerReq) {
		 
		CustomerList bmsAuthNew = bmsAuthService.registerBMSUser(registerReq); 
		System.out.println(bmsAuthNew);
		return new ResponseEntity<CustomerList>(bmsAuthNew,HttpStatus.OK);
	}
	
	

	@GetMapping(value="/api/register/{registeredId}")
	public ResponseEntity<CustomerList> customerUpdateBMS(@PathVariable int registeredId ) {
		 
		CustomerList bmsAuthNew = bmsAuthService.customerDetail(registeredId); 
		System.out.println(bmsAuthNew);
		return new ResponseEntity<CustomerList>(bmsAuthNew,HttpStatus.OK);
	}
}
