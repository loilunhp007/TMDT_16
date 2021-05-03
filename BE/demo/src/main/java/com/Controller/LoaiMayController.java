package com.Controller;

import java.util.List;

import com.Entity.LoaiMay;
import com.Services.LoaiMayService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@CrossOrigin(origins = "http:localhost:4200")
@RequestMapping(value = "category")
public class LoaiMayController {
    @Autowired
    private LoaiMayService loaiMayService;
    @GetMapping
    public ResponseEntity<List<LoaiMay>> getAllLoaiMay(){
        List<LoaiMay> loaimay = loaiMayService.getAllLoaiMay();
        return ResponseEntity.status(HttpStatus.OK).body(loaimay);
    }
}
