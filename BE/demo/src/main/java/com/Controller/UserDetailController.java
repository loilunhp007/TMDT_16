package com.Controller;

import com.Entity.UserDetail;
import com.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.*;
@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "userdetail")
public class UserDetailController {
    @Autowired
    private UserService tvService;
    @GetMapping("/get")
    public ResponseEntity<?> getAllThanhVien(){
        List<UserDetail> lThanhVien=  tvService.getAllThanhVien();
        return ResponseEntity.status(HttpStatus.OK).body(lThanhVien);
    }
    @PostMapping({"/add"})
    public ResponseEntity<UserDetail> addThanhVien(@RequestBody UserDetail userDetail){
        try {   String matv = userDetail.getMatv();
              UserDetail existUser = tvService.getUserDetailById(matv);
              UserDetail _userDetail = null;
              if(existUser == null){
                _userDetail= tvService.save(userDetail); 
              }               
               return ResponseEntity.status(HttpStatus.OK).body(_userDetail);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<UserDetail>(userDetail, HttpStatus.EXPECTATION_FAILED);
        }

    }
    @GetMapping("/get/{id}")
    public ResponseEntity<UserDetail> getThanhVienByID(@PathVariable(name = "id")String id){
        UserDetail thanhvien = tvService.getUserDetailById(id);
        return ResponseEntity.status(HttpStatus.OK).body(thanhvien);
    }
    @PutMapping("/put")
    public ResponseEntity<UserDetail> updateThanhVienByID(@PathVariable(name = "id")String id, @RequestBody UserDetail tvDetails ){
        UserDetail thanhvien = tvService.getUserDetailById(id);
        thanhvien.setDiachi(tvDetails.getSdt());
        thanhvien.setLoaithanhvien(tvDetails.getLoaithanhvien());
        thanhvien.setHo(tvDetails.getHo());
        thanhvien.setTen(tvDetails.getTen());
        thanhvien.setDiachi(tvDetails.getDiachi());
        thanhvien.setGmail(tvDetails.getGmail());
        thanhvien.setNgaytao(tvDetails.getNgaytao());
        thanhvien.setTrangthai(tvDetails.getTrangthai());
        return ResponseEntity.status(HttpStatus.OK).body(thanhvien);
    }
    



    
}
