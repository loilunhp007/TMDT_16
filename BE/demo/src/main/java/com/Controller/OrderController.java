package com.Controller;

import java.util.List;

import com.Entity.DatHang;
import com.Services.OrderDetailService;
import com.Services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/get/{matv}")
    public ResponseEntity<List<DatHang>> getDonhangByTVBan(@PathVariable(name = "matv")String matv ){
        List<DatHang> orders = orderService.getAllOrderByTVBan(matv);
        if(orders!=null){
            return ResponseEntity.status(HttpStatus.OK).body(orders);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(orders);
    }
    @PostMapping("/add")
    public ResponseEntity<DatHang> addOrder(@RequestBody DatHang order){
        DatHang order2 = orderService.saveDathang(order);
        return ResponseEntity.status(HttpStatus.OK).body(order2);
        
    }

}
