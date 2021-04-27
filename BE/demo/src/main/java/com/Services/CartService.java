package com.Services;

import java.util.List;
import java.util.Optional;

import com.Entity.Cart;
import com.Entity.Sanpham;
import com.Entity.UserDetail;
import com.Repository.CartRepository;
import com.Repository.SanPhamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private SanPhamRepository sanPhamRepository;
    
    public List<Cart> getCartItems(UserDetail userDetail){
        return this.cartRepository.findByUserDetail(userDetail);
    }

    public int addItem(UserDetail userDetail,String masp){
            int soluong=1;
         Sanpham product = sanPhamRepository.findById(masp).get();
         Cart cart = cartRepository.findByProductAndUserDetail(product, userDetail);
        if(cart !=null){
                soluong = cart.getSoluong()+1;
                cart.setSoluong(soluong);
            }else{
                cart = new Cart();
                cart.setProduct(product);
                cart.setUserDetail(userDetail);
                cart.setSoluong(soluong);
            }
        cartRepository.save(cart);
        
        return soluong;
    }
    public Cart updateCart(UserDetail userDetail,String masp){
        Sanpham product = sanPhamRepository.findById(masp).get();
            
    }
    
}