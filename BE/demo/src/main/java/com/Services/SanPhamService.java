package com.Services;

import java.util.List;

import com.Entity.Sanpham;
import com.Repository.SanPhamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SanPhamService {
    @Autowired
    private SanPhamRepository sanPhamRepository;
    public List<Sanpham> getAllProducts(){
        return sanPhamRepository.findAll();
    }
    public Sanpham addProduct(Sanpham product){
        return sanPhamRepository.save(product);
    }



}
