package com.Controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletContext;

import com.Entity.Sanpham;
import com.Entity.UserDetail;
import com.Services.SanPhamService;
import com.Services.UserService;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "products")
public class SanPhamController {
    private byte[] bytes;
    @Autowired
    private SanPhamService sanphamService;
    @Autowired
    private UserService userService;

    @GetMapping("/get")
    public List<Sanpham> getAllProduct(){
        return this.sanphamService.getAllProducts();
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Sanpham> getProductById(@PathVariable(name = "id")String id){
        Sanpham existSanpham = sanphamService.findProductByID(id);
        if(existSanpham != null){
            return ResponseEntity.status(HttpStatus.OK).body(existSanpham);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(existSanpham);

    }
    @GetMapping("/get/trangthai/{trangthai}")
    public ResponseEntity<List<Sanpham>> getProductByTrangthai(@PathVariable(name = "trangthai")int trangthai){
        List<Sanpham> listProduct= sanphamService.getProductByTrangthai(trangthai); 
        if(listProduct != null){
            return ResponseEntity.status(HttpStatus.OK).body(listProduct);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }
    @GetMapping("/get/matv/{matv}")
    public ResponseEntity<List<Sanpham>> getProductByMatv(@PathVariable(name = "matv")String matv){
        UserDetail userDetail =  userService.getUserDetailById(matv);
        List<Sanpham> listProduct= sanphamService.getProductByUserDetail(userDetail); 
        if(listProduct != null){
            return ResponseEntity.status(HttpStatus.OK).body(listProduct);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }
    @GetMapping("/get/tensp/{tensp}")
    public ResponseEntity<List<Sanpham>> getProductByTensp(@PathVariable(name = "tensp")String tensp){
        List<Sanpham> listProduct= sanphamService.getProductByLikeTensp(tensp);
        if(listProduct != null){
            return ResponseEntity.status(HttpStatus.OK).body(listProduct);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }

    @PostMapping("/add")
    public ResponseEntity<Sanpham> addProduct(@RequestBody Sanpham sanpham) throws IOException{
        Sanpham _sanpham = null;
        _sanpham = this.sanphamService.addProduct(sanpham);
        return ResponseEntity.status(HttpStatus.OK).body(_sanpham);

    }
    @PostMapping("/upload")
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException{
        this.bytes =file.getBytes() ;
        String name = file.getOriginalFilename();
        String folder= "C://Users//LENOVO//Desktop//TMDT//TMDT_16//e-commerce//src//assets//images//";
        if (name != null && name.length() > 0) {
                // Create the file at server
                File serverFile = new File(folder + name);
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
                stream.write(bytes);
                stream.close();                    
            }
      
    }
    @PutMapping("/put/{masp}")
    public ResponseEntity<Sanpham> updateProductById(@PathVariable(name = "masp")String masp,@RequestBody Sanpham product){
        Sanpham _Product = this.sanphamService.findProductByID(masp);
        _Product.setMaloai(product.getMaloai());
        _Product.setTensp(product.getTensp());
        _Product.setThongtinsanpham(product.getThongtinsanpham());
        _Product.setGia(product.getGia());
        _Product.setSoluong(product.getSoluong());
        _Product.setLuotxem(product.getLuotxem());
        _Product.setHinhanh(product.getHinhanh());
        _Product.setDanhgia(product.getDanhgia());
        _Product.setTrangthai(product.getTrangthai());
        _Product.setUserDetail(product.getUserDetail());
        Sanpham newProduct= this.sanphamService.addProduct(_Product);
        return ResponseEntity.status(HttpStatus.OK).body(newProduct);
    }
    @DeleteMapping("/delete/{masp}")
    public ResponseEntity<String> deteleProductById(@PathVariable(name = "masp")String masp){
        this.sanphamService.deteleProductByID(masp);
        return ResponseEntity.status(HttpStatus.OK).body("detele sucess");
    }
    
}
