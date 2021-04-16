package com.Controller;

import java.util.List;
import com.Entity.Sanpham;
import com.Services.SanPhamService;

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
    @PutMapping("/put/{masp}")
    public ResponseEntity<Sanpham> updateProductById(@PathVariable(name = "masp")String masp,@RequestBody Sanpham sanpham){
        Sanpham _Product = this.sanphamService.findAccountByID(masp);
        _Product.setMaloai(sanpham.getMaloai());
        _Product.setTensp(sanpham.getTensp());
        _Product.setThongtinsanpham(sanpham.getThongtinsanpham());
        _Product.setGia(sanpham.getGia());
        _Product.setSoluong(sanpham.getSoluong());
        _Product.setLuotxem(sanpham.getLuotxem());
        _Product.setHinhanh(sanpham.getHinhanh());
        _Product.setDanhgia(sanpham.getDanhgia());
        _Product.setTrangthai(sanpham.getTrangthai());
        Sanpham newProduct= this.sanphamService.addProduct(_Product);
        return ResponseEntity.status(HttpStatus.OK).body(newProduct);
    }
    @DeleteMapping("detele/{id}")
    public ResponseEntity<?> deteleProductById(@PathVariable(name = "masp")String masp){
        this.sanphamService.deteleProductByID(masp);
        return ResponseEntity.status(HttpStatus.OK).body("detele sucess");
    }
}
