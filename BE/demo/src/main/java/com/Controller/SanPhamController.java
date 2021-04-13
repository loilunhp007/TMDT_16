package com.Controller;

import java.util.List;
import com.Entity.Sanpham;
import com.Services.SanPhamService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "products")
public class SanPhamController {
    @Autowired
    private SanPhamService sanphamService;

    @GetMapping("/get")
    public List<Sanpham> getAllProduct(){
        return this.sanphamService.getAllProducts();
    }
    @PostMapping("/add")
    public ResponseEntity<Sanpham> addProduct(@RequestBody Sanpham sanpham){
        Sanpham _sanpham = null;
        _sanpham = this.sanphamService.addProduct(sanpham);
        return ResponseEntity.status(HttpStatus.OK).body(_sanpham);

    }
}
