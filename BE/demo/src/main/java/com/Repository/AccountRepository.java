package com.Repository;

import java.util.List;

import com.Entity.taikhoan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<taikhoan, Long>{
    public taikhoan findAccountByEmail(String email);
    public taikhoan findAccountByEmailAndMatkhau(String email,String password);
    long count();

}
