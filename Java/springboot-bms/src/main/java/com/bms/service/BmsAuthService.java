package com.bms.service;

import com.bms.dto.LoginReq;
import com.bms.dto.RegisterReq;
import com.bms.entity.CustomerList;

public interface BmsAuthService {

	CustomerList registerBMSUser(RegisterReq registerReq);
	
	String loginBMSUser(LoginReq loginReq) throws Exception;
	
	CustomerList customerDetail(int id);
	
}
