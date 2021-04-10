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
@RequestMapping(path = "users")
public class UserDetailController {
    @Autowired
    private UserService tvService;
    @GetMapping("/get")
    public ResponseEntity<?> getAllThanhVien(){
        List<UserDetail> lThanhVien=  tvService.getAllThanhVien();
        return ResponseEntity.status(HttpStatus.OK).body(lThanhVien);
    }
    @PostMapping({"/add"})
    public ResponseEntity<UserDetail> addThanhVien(@RequestBody(required = false) UserDetail userDetail){
        try {
            Logger logg = Logger.getLogger("Controller");
            logg.setLevel(Level.ALL);
            logg.info("22 : "+userDetail.toString());
            UserDetail _userDetail= tvService.save(userDetail);
            return new ResponseEntity<UserDetail>(_userDetail,HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<UserDetail>(userDetail, HttpStatus.EXPECTATION_FAILED);
        }

    }
    @GetMapping("/get/{id}")
    public ResponseEntity<UserDetail> getThanhVienByID(@PathVariable(name = "id")long id){
        UserDetail thanhvien = tvService.getThanhVien(id);
        return ResponseEntity.status(HttpStatus.OK).body(thanhvien);
    }
    @PutMapping("/put")
    public ResponseEntity<UserDetail> updateThanhVienByID(@PathVariable(name = "id")long id, @RequestBody UserDetail tvDetails ){
        UserDetail thanhvien = tvService.getThanhVien(id);
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
