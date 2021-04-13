package com.Services;

import java.util.List;

import com.Entity.User;
import com.Repository.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    AccountRepository accountRepository;
    public List<User> getAllAccount(){
        return accountRepository.findAll();
    }
    public User addAccount(User taikhoan){
        return accountRepository.save(taikhoan);
    }
    public User findAccountByID(long id){
        return accountRepository.findById(id).get();
    }
    public User findAccountByEmail(String email){
        return accountRepository.findAccountByEmail(email);
    }
    public User findAccountByEmailAndMatkhau(String email,String password){
        return accountRepository.findAccountByEmailAndMatkhau(email,password);
    }
    
    
    
}
