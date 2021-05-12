package com.bms.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bms.dto.LoginReq;
import com.bms.dto.RegisterReq;
import com.bms.entity.CustomerList;
import com.bms.repository.CustomeListRepository;
import com.bms.service.BmsAuthService;


@Service
public class BmsAuthServiceImpl implements BmsAuthService {
  

@Autowired 
private CustomeListRepository registerListRepository;


	private static List<RegisterReq> registerReqs = new ArrayList<>();
	 private static int rId = 10000;
	  
	static  {
			
		registerReqs.add(new RegisterReq(++rId,"John","John","John",10000));
	}
	
	@Override
	public CustomerList registerBMSUser(RegisterReq registerReq) { 
		// TODO Auto-generated method stub
		CustomerList userId = registerListRepository.findByRegisteredId(registerReq.getRegisteredId());
		CustomerList registerList = new CustomerList();
		if(Long.valueOf(userId.getRegisteredId()).equals(registerReq.getRegisteredId())) {
			BeanUtils.copyProperties(userId, registerList);
			registerListRepository.save(registerList);
		}else {
			registerReq.setRegisteredId(++rId);
			BeanUtils.copyProperties(registerReq, registerList);
			registerListRepository.save(registerList);
		}
//		if(registerReq.getId() == -1 || registerReq.getId() ==0) { 
//			registerReq.setRegisteredId(++rId);
//		BeanUtils.copyProperties(registerReq, registerList);
//		registerListRepository.save(registerList);
//			//registerReqs.add(registerReq);
//		}else {
//			
//			BeanUtils.copyProperties(registerReq, userId);
//			registerListRepository.save(registerList);
//		}
		System.out.println(registerList);
		return registerList;
	}
	
	@SuppressWarnings("unlikely-arg-type")
	@Override
	public String loginBMSUser(LoginReq loginReq) throws Exception{
		// TODO Auto-generated method stub
	//	for (type variableName : arrayName) 
		CustomerList userId = registerListRepository.findByRegisteredId(loginReq.getUserId());
		
		if(Long.valueOf(userId.getRegisteredId()).equals(loginReq.getUserId()) && userId.getPassword().equals(loginReq.getPassword())) {
			return "SuccessFully Logge In";
		}else {
			return null;
		}
				//RegisterReq userId = findById(loginReq.getUserId());
		
//		if(Long.valueOf(userId.getId()).equals(loginReq.getUserId()) && userId.getPassword().equals(loginReq.getPassword())) {
//			return "SuccessFully Logged In";
//		}else {
//			 throw new RuntimeException("failed");
//		}
//		 
	}

	@Override
	public CustomerList customerDetail(int id) {
		// TODO Auto-generated method stub
		
		CustomerList custDetail  = registerListRepository.findByRegisteredId(id);
		
		return custDetail;
	}

//	public RegisterReq findById(long l) {
//		 
//		for(RegisterReq val : registerReqs ) {
//			if(Long.valueOf(val.getId()).equals(l)){
//				return val;
//			};
//		}
//		return null;
//	}

}
