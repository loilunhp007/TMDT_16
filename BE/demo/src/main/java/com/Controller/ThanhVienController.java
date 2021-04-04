package com.Controller;

import com.Entity.ThanhVien;
import com.Services.ThanhVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Controller
@RestController
@RequestMapping("/thanhvien")
public class ThanhVienController {
    @Autowired
    private ThanhVienService tvService;
    @GetMapping("/getThanhViens")
    public ResponseEntity<?> getAllThanhVien(){
        List<ThanhVien> lThanhVien=  tvService.getAllThanhVien();
        return ResponseEntity.status(HttpStatus.OK).body(lThanhVien);
    }
    @PostMapping("/addThanhVien")
    public ThanhVien addThanhVien(@Validated @RequestBody ThanhVien thanhvien){

        return tvService.save(thanhvien);
    }
    @GetMapping("getThanhVien/{id}")
    public ResponseEntity<ThanhVien> getThanhVienByID(@PathVariable(name = "id")long id){
        ThanhVien thanhvien = tvService.getThanhVien(id);
        return ResponseEntity.status(HttpStatus.OK).body(thanhvien);
    }
    @PutMapping("/updateThanhVien")
    public ResponseEntity<ThanhVien> updateThanhVienByID(@PathVariable(name = "id")long id, @RequestBody ThanhVien tvDetails ){
        ThanhVien thanhvien = tvService.getThanhVien(id);
        thanhvien.setDiachi(tvDetails.getSdt());
        thanhvien.setLoaithanhvien(tvDetails.getLoaithanhvien());
        thanhvien.setHo(tvDetails.getHo());
        thanhvien.setTen(tvDetails.getTen());
        thanhvien.setDiachi(tvDetails.getDiachi());
        thanhvien.setTenshop(tvDetails.getTenshop());
        thanhvien.setGmail(tvDetails.getGmail());
        thanhvien.setNgaytao(tvDetails.getNgaytao());
        thanhvien.setTrangthai(tvDetails.getTrangthai());
        return ResponseEntity.status(HttpStatus.OK).body(thanhvien);
    }
    



    
}
