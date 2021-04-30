package com.Services;

import java.util.List;


import com.Entity.DatHang;
import com.Repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional(rollbackFor = Exception.class)
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    public List<DatHang> getAllOrderByTVBan(String matvban){
        return orderRepository.findByMatvban(matvban);
    }
    public List<DatHang> getAllOrderByTVMua(String matvmua){
        return orderRepository.findByMatvmua(matvmua);
    }
    public List<DatHang> getAllOrder(){
        return orderRepository.findAll();
    }
    public DatHang saveDathang(DatHang order){
         return orderRepository.save(order);

    }
}
