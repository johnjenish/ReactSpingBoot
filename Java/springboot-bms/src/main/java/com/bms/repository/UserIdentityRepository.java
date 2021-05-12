package com.bms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bms.entity.UserIdentity;

@Repository
public interface UserIdentityRepository extends JpaRepository<UserIdentity,Long> {

}
