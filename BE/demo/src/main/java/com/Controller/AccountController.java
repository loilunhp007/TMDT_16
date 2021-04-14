package com.Controller;

import java.util.List;

import com.Entity.User;
import com.Services.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.bytebuddy.asm.Advice.Return;

@Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "user")
public class AccountController {

    @Autowired
    private AccountService accountService;
    
    @GetMapping("/get")
    public List<User> getAllAccount(){
        return accountService.getAllAccount();
    }
    @PostMapping("/add")
    public ResponseEntity<User> addTaikhoan(@RequestBody User user ) throws Exception{ 
        String existUsername = user.getEmail();
        if (existUsername != null && !"".equals(existUsername)){
            User existAccount = accountService.findAccountByEmail(existUsername);
            if(existAccount != null){
                 throw new Exception("Username"+existUsername+"is exist");
            }
        }
        User _taikhoan = accountService.addAccount(user);
        return ResponseEntity.status(HttpStatus.OK).body(_taikhoan);
        
        
    }
    @GetMapping("/get/{id}") 
    public ResponseEntity<User> findUserByID(@PathVariable(name = "id")Long id) throws Exception{
        User taiKhoan =null;
        
        if (id !=  null){
            taiKhoan = accountService.findAccountByID(id);
            return ResponseEntity.status(HttpStatus.OK).body(taiKhoan);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(taiKhoan);
    }
    
    @PutMapping("/put")
    public ResponseEntity<User> updateThanhVienByID(@PathVariable(name = "id")Long id, @RequestBody User taiKhoan){
        User  _taikhoan =accountService.findAccountByID(id);
        _taikhoan.setMatkhau(taiKhoan.getMatkhau());
        _taikhoan.setEmail(taiKhoan.getEmail());
        _taikhoan.setTrangthai(taiKhoan.getTrangthai());
        return ResponseEntity.status(HttpStatus.OK).body(_taikhoan);
    }
    

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User taiKhoan) throws Exception{
        System.out.println("username: "+taiKhoan.getEmail()+"matkhau:"+taiKhoan.getMatkhau());
        User existAccount = null ;
        if (taiKhoan.getEmail() != null && taiKhoan.getMatkhau() != null){
             existAccount = accountService.findAccountByEmailAndMatkhau(taiKhoan.getEmail(),taiKhoan.getMatkhau());
            if(existAccount == null){
                 String message = "Username"+taiKhoan.getEmail()+"not exist";   
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(existAccount);
            }
        }
            return ResponseEntity.status(HttpStatus.OK).body(existAccount);
    }
}
