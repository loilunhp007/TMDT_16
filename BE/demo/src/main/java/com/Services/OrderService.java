package com.Services;

import java.util.List;

import com.Entity.DatHang;
import com.Repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    public List<DatHang> getAllOrderByTVBan(String matvban){
        return orderRepository.findByMatvban(matvban);
    }
    public List<DatHang> getAllOrder(){
        return orderRepository.findAll();
    }
    public DatHang saveDathang(DatHang order){
        return orderRepository.save(order);
    }
}
