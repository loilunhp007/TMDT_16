package com.Controller;

import java.util.ArrayList;
import java.util.List;

import com.Entity.Cart;
import com.Entity.Sanpham;
import com.Entity.UserDetail;
import com.Services.CartService;
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
import org.springframework.web.bind.annotation.RestController;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "cart")
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;
    @GetMapping("/get/{matv}")
    public List<Cart> getCart(@PathVariable(name = "matv")String matv){
        UserDetail userDetail = userService.getUserDetailById(matv);
        List<Cart> carts = cartService.getCartItems(userDetail);
        return carts;
    }
    @PostMapping("/add/{masp}/{matv}")
    public ResponseEntity<String> addItem(@PathVariable(name = "masp")String masp,@PathVariable(name = "matv")String matv){
        UserDetail userDetail = userService.getUserDetailById(matv);
        int qt = cartService.addItem(userDetail, masp);
        return ResponseEntity.status(HttpStatus.OK).body(qt+"add success");
    }
    @PutMapping("/put/plus/{masp}/{matv}")
    public ResponseEntity<String> plusCart(@PathVariable(name = "masp")String masp,@PathVariable(name = "matv")String matv){
        UserDetail userDetail = userService.getUserDetailById(matv);
        int qt = cartService.plusQuanCart(userDetail, masp);
        return ResponseEntity.status(HttpStatus.OK).body(qt+"update success");
    }
    @PutMapping("/put/minus/{masp}/{matv}")
    public ResponseEntity<String> minusCart(@PathVariable(name = "masp")String masp,@PathVariable(name = "matv")String matv){
        UserDetail userDetail = userService.getUserDetailById(matv);
        int qt = cartService.minusQuanCart(userDetail, masp);
        return ResponseEntity.status(HttpStatus.OK).body(qt+"update success");
    }     
    @DeleteMapping("/delete/{masp}/{matv}")
    public ResponseEntity<String> deleteCartItem(@PathVariable(name = "masp")String masp,@PathVariable(name = "matv")String matv){
        UserDetail userDetail = userService.getUserDetailById(matv);
        String detele = cartService.deleteCartItem(userDetail, masp);
        return ResponseEntity.status(HttpStatus.OK).body(detele+"delete success");
    }  
    @DeleteMapping("/delete/cart/{matv}")
    public ResponseEntity<String> deleteCart(@PathVariable(name = "matv")String matv){
        UserDetail userDetail = userService.getUserDetailById(matv);
        String detele = cartService.deleteCart(userDetail);
        return ResponseEntity.status(HttpStatus.OK).body(detele+"delete success");
    }            
}
 