package com.Services;

import java.util.List;

import com.Entity.CT_DatHang;
import com.Repository.OrderDetailRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class OrderDetailService {
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    public List<CT_DatHang> getAllOrderDetailByMadhn(String madh){
        return orderDetailRepository.findByMahdn(madh);
    }
    public List<CT_DatHang> getAllOrder(){
        return orderDetailRepository.findAll();
    }
    public CT_DatHang saveDathang(CT_DatHang orderDetail){
        return orderDetailRepository.save(orderDetail);
    }
}
