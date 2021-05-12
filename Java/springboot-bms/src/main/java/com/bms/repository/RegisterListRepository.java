package com.bms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bms.entity.RegisterList;
 
@Repository
public interface RegisterListRepository extends JpaRepository<RegisterList,Long> {
   
	RegisterList findByRegisteredId(long registeredId);
} 
