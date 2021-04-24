package com.Services;

import java.util.List;
import java.util.Optional;

import com.Entity.Sanpham;
import com.Repository.SanPhamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(rollbackFor = Exception.class)
public class SanPhamService {
    @Autowired
    private SanPhamRepository sanPhamRepository;
    public List<Sanpham> getAllProducts(){
        return sanPhamRepository.findAll();
    }
    public Sanpham addProduct(Sanpham product){
        return sanPhamRepository.save(product);
    }
    public Sanpham findProductByID(String id){
        Optional<Sanpham> op = sanPhamRepository.findById(id);
        if(op.isEmpty()){
            return null;
        }
        return op.get();
    }
    public void deteleProductByID(String id){
        sanPhamRepository.deleteById(id);
    }



}
