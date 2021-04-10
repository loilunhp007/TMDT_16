package com.Controller;

import java.util.List;

import com.Entity.TaiKhoan;
import com.Services.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "user")
public class AccountController {
    
    @Autowired
    private AccountService accountService;
    
    @GetMapping("/get")
    public List<TaiKhoan> getAllAccount(){
        return accountService.getAllAccount();
    }
    @PostMapping("/add")
    public ResponseEntity<TaiKhoan> addTaikhoan(@RequestBody TaiKhoan taikhoan ){
        return ResponseEntity.status(HttpStatus.OK).body(taikhoan);
    }
    @GetMapping("/get/{id}") 
    public ResponseEntity<TaiKhoan> findUserByID(@PathVariable(name = "id")long id){
        TaiKhoan taiKhoan = accountService.findAccountByID(id);
        return ResponseEntity.status(HttpStatus.OK).body(taiKhoan);
    }
    
    @PutMapping("/put")
    public ResponseEntity<TaiKhoan> updateThanhVienByID(@PathVariable(name = "id")long id, @RequestBody TaiKhoan taiKhoan){
        TaiKhoan  _taikhoan =accountService.findAccountByID(id);
        _taikhoan.setMatkhau(taiKhoan.getMatkhau());
        _taikhoan.setSdt(taiKhoan.getSdt());
        return ResponseEntity.status(HttpStatus.OK).body(_taikhoan);
    }

}
