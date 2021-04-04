package com.Services;

import com.Entity.ThanhVien;
import com.Repository.ThanhVienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThanhVienService {
    @Autowired
    private ThanhVienRepository tvRepository;
    public List<ThanhVien> getAllThanhVien(){
        return tvRepository.findAll();
    }
    public ThanhVien getThanhVien(long matv){

        return tvRepository.findById(matv).get();
    }
    public ThanhVien save(ThanhVien thanhvien){
        return tvRepository.save(thanhvien);
    }
    public void xoa (long id){
        tvRepository.deleteById(id);
    }

}
