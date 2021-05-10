package com.Services;

import java.util.List;

import com.Entity.CT_DatHang;
import com.Entity.CT_DatHangId;
import com.Entity.Sanpham;
import com.Repository.OrderDetailRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional(rollbackFor = Exception.class)
public class OrderDetailService {
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    public List<CT_DatHang> getAllOrderDetailByMahd(String madh){
        return orderDetailRepository.findByMadh(madh);
    }
    public List<CT_DatHang> getAllOrder(){
        return orderDetailRepository.findAll();
    }
    public CT_DatHang findByMadhAndMasp(CT_DatHangId ctdh_Id){
        return orderDetailRepository.findById(ctdh_Id).get();
    }
    public CT_DatHang saveDathang(CT_DatHang orderDetail){
        return orderDetailRepository.save(orderDetail);

    }
    public List<Long> getThanhtien(String matv,int thang){
        return orderDetailRepository.findThanhtienGroupbyMasp(matv,thang);
    }
    public List<Long> getThongKeSoluong(String matv,int thang){
        return orderDetailRepository.thongkesoluong(matv,thang);
    }
}
