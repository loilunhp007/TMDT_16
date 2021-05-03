package com.Services;

import java.util.List;

import com.Entity.LoaiMay;
import com.Repository.LoaiMayRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class LoaiMayService {
    
    @Autowired
    private LoaiMayRepository loaiMayRepository;
    public List<LoaiMay> getAllLoaiMay(){
        return loaiMayRepository.findAll();
    }
    public LoaiMay addLoaiMay(LoaiMay loaiMay){
        return loaiMayRepository.save(loaiMay);
    }
}
