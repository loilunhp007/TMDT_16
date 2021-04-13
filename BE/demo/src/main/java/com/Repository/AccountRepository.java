package com.Repository;

import java.util.List;

import com.Entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<User, Long>{
    public User findAccountByEmail(String email);
    public User findAccountByEmailAndMatkhau(String email,String password);
}
