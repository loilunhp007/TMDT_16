package com.Controller;

import java.util.List;

import com.Entity.CT_DatHang;
import com.Services.OrderDetailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "orderdetail")
public class OrderDetailController {
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/get/{{madh}}}")
    public List<CT_DatHang> getOrderDetail(@PathVariable(name = "madh")String madh){
            return orderDetailService.getAllOrderDetailByMahd(madh);
    }
    @PutMapping("/add")
    public CT_DatHang addOrderDetail(CT_DatHang orderDetail){
        return orderDetailService.saveDathang(orderDetail);

    }
}
