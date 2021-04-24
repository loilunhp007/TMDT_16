package com.Services;

import java.util.List;

import com.Entity.taikhoan;
import com.Repository.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(rollbackFor = Exception.class)
public class AccountService {
    @Autowired
    AccountRepository accountRepository;
    public List<taikhoan> getAllAccount(){
        return accountRepository.findAll();
    }
    public taikhoan addAccount(taikhoan taikhoan){
        return accountRepository.save(taikhoan);
    }
    public taikhoan findAccountByID(Long id){
        return accountRepository.findById(id).get();
    }
    public taikhoan findAccountByEmail(String email){
        return accountRepository.findAccountByEmail(email);
    }
    public taikhoan findAccountByEmailAndMatkhau(String email,String password){
        return accountRepository.findAccountByEmailAndMatkhau(email,password);
    }
    public long count(){
        return accountRepository.count();
    }
    
    
}
