package com.Controller;

import java.util.List;

import com.Entity.CT_DatHang;
import com.Entity.CT_DatHangId;
import com.Entity.Sanpham;
import com.Services.OrderDetailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "orderdetail")
public class OrderDetailController {
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/get/{madh}")
    public List<CT_DatHang> getOrderDetail(@PathVariable(name = "madh")String madh){
            return orderDetailService.getAllOrderDetailByMahd(madh);
    }
    @PostMapping("/add")
    public ResponseEntity<CT_DatHang> addOrderDetail(@RequestBody CT_DatHang orderDetail){
        CT_DatHang orderDetail2= orderDetailService.saveDathang(orderDetail);
             return ResponseEntity.status(HttpStatus.OK).body(orderDetail2);
             

    }
    @PutMapping("/put")
    public ResponseEntity<CT_DatHang> UpdateOrderDetail(@RequestBody CT_DatHang orderDetail){

        CT_DatHang orderDetail2= orderDetail;
        orderDetail2.setThanhtoan(orderDetail.getTongtien());
        CT_DatHang orderDetail3= orderDetailService.saveDathang(orderDetail2);
        return   ResponseEntity.status(HttpStatus.OK).body(orderDetail3);

    }
    @GetMapping("/get/thongke/{masp}")
        public ResponseEntity<Long> CountByMasp(@PathVariable(name ="masp")String masp){
            Long num = orderDetailService.findByMasp(masp);
            return ResponseEntity.status(HttpStatus.OK).body(num);    
        }
        @GetMapping("/get/tongtien/{masp}")
        public ResponseEntity<List<CT_DatHang>> getTongtienByMasp(@PathVariable(name ="masp")String masp){
            List<CT_DatHang> num = orderDetailService.GetTongtienByMasp(masp);
            return ResponseEntity.status(HttpStatus.OK).body(num);    
        }
}
