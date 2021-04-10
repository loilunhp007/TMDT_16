package com.Services;

import java.util.List;

import com.Entity.TaiKhoan;
import com.Repository.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class AccountService {
    @Autowired
    AccountRepository accountRepository;
    public List<TaiKhoan> getAllAccount(){
        return accountRepository.findAll();
    }
    public TaiKhoan addAccount(TaiKhoan taikhoan){
        return accountRepository.save(taikhoan);
    }
    public TaiKhoan findAccountByID(long id){
        return accountRepository.findById(id).get();
    }
    
    
    
}
