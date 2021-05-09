package com.Controller;

import java.util.List;

import com.Entity.QLComment;
import com.Services.CmtService;

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
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "cmt")
public class CmtController {
    @Autowired
    private CmtService cmtService;
    @GetMapping("/get")
    public ResponseEntity<List<QLComment>> getAllCmt(){
        List<QLComment> cmts =cmtService.getAllCmt();
        return ResponseEntity.status(HttpStatus.OK).body(cmts);
    }
    @PostMapping("/add")
    public ResponseEntity<QLComment> addCmt(@RequestBody QLComment cmt){
        System.out.println(cmt.toString());
        QLComment cmt2 = cmtService.addCmt(cmt);
        
        return ResponseEntity.status(HttpStatus.OK).body(cmt2);

    }
    @GetMapping("/get/{masp}")
    public ResponseEntity<List<QLComment>> getAllCmtByMasp(@PathVariable(name = "masp")String masp){
        List<QLComment> cmts =cmtService.getAllCmtBySp(masp);
        return ResponseEntity.status(HttpStatus.OK).body(cmts);
    }
    @GetMapping("/get/{madh}/{masp}")
    public ResponseEntity<QLComment> getCmtByMadhAndMasp(@PathVariable(name = "madh")String madh,@PathVariable(name = "masp")String masp){
        QLComment cmt =cmtService.getCmt(madh,masp);
        return ResponseEntity.status(HttpStatus.OK).body(cmt);
    }

}
