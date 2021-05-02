package com.Services;

import java.util.List;
import java.util.Optional;

import com.Entity.DatHang;
import com.Entity.UserDetail;
import com.Repository.OrderRepository;
import com.Repository.UserDetailRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional(rollbackFor = Exception.class)
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserDetailRepository userDetailRepository;

    public DatHang getOrderById(String madh) throws Exception{
        Optional<DatHang> op = orderRepository.findById(madh);
        if(op.isEmpty()){
            throw new Exception("not found");
        }
        else{
           return  op.get();
        }

    }
    public List<DatHang> getAllOrderByTVBan(String matvban){
        UserDetail userDetail = userDetailRepository.findById(matvban).get();
        return orderRepository.findByTvban(userDetail);
    }
    public List<DatHang> getAllOrderByTrangthai(int trangthai){
        return orderRepository.findByTrangthai(trangthai);
    }
    public List<DatHang> getAllOrderByTVMua(String matvmua){
        UserDetail userDetail = userDetailRepository.findById(matvmua).get();
        return orderRepository.findByTvmua(userDetail);
    }
    public List<DatHang> getAllOrder(){
        return orderRepository.findAll();
    }
    public DatHang saveDathang(DatHang order){
         return orderRepository.save(order);

    }
}
