package com.Controller;

import java.util.List;

import com.Entity.taikhoan;
import com.Services.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "user")
public class AccountController {
    @Autowired
    private AccountService accountService;
    
    @GetMapping("/get")
    public List<taikhoan> getAllAccount(){
        return accountService.getAllAccount();
    }
    @PostMapping("/add")
    public ResponseEntity<taikhoan> addTaikhoan(@RequestBody taikhoan user ) throws Exception{ 
        String existUsername = user.getEmail();
        if (existUsername != null && !"".equals(existUsername)){
            taikhoan existAccount = accountService.findAccountByEmail(existUsername);
            if(existAccount != null){
                 throw new Exception("Username"+existUsername+"is exist");
            }
        }
        taikhoan _taikhoan = accountService.addAccount(user);
        return ResponseEntity.status(HttpStatus.OK).body(_taikhoan);
        
        
    }
    @GetMapping("/get/{id}") 
    public ResponseEntity<taikhoan> findUserByID(@PathVariable(name = "id")Long id) throws Exception{
        taikhoan taiKhoan =null;
        
        if (id !=  null){
            taiKhoan = accountService.findAccountByID(id);
            return ResponseEntity.status(HttpStatus.OK).body(taiKhoan);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(taiKhoan);
    }
    
    @PutMapping("/put/{uid}")
    public ResponseEntity<taikhoan> updateThanhVienByID(@PathVariable(name = "uid")Long id, @RequestBody taikhoan taiKhoan){
        taikhoan  _taikhoan =accountService.findAccountByID(id);
        _taikhoan.setMatkhau(taiKhoan.getMatkhau());
        _taikhoan.setEmail(taiKhoan.getEmail());
        _taikhoan.setTrangthai(taiKhoan.getTrangthai());
        taikhoan taikhoan2 = accountService.addAccount(_taikhoan);
        return ResponseEntity.status(HttpStatus.OK).body(taikhoan2);
    }
    

    @PostMapping("/login")
    public ResponseEntity<taikhoan> loginUser(@RequestBody taikhoan taiKhoan) throws Exception{
        System.out.println("username: "+taiKhoan.getEmail()+"matkhau:"+taiKhoan.getMatkhau());
        taikhoan existAccount = null ;
        if (taiKhoan.getEmail() != null && taiKhoan.getMatkhau() != null){
             existAccount = accountService.findAccountByEmailAndMatkhau(taiKhoan.getEmail(),taiKhoan.getMatkhau());
            if(existAccount == null){
                 String message = "Username"+taiKhoan.getEmail()+"not exist";   
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(existAccount);
            }
        }
            return ResponseEntity.status(HttpStatus.OK).body(existAccount);
    }
    @GetMapping("/getMax")
    public ResponseEntity<Long> getMaxUser(){
        long count = accountService.count();
        return ResponseEntity.status(HttpStatus.OK).body(count);
    }
    @DeleteMapping("/delete/{uid}")
    public ResponseEntity<String> deteleUser(@PathVariable(name = "uid")long uid){
        
       return ResponseEntity.status(HttpStatus.OK).body(accountService.deteleUser(uid));
    }
}
