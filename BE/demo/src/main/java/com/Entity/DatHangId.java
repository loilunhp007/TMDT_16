package com.Entity;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class DatHangId implements Serializable {
    @Id
    private String madh;
    @Id
    @ManyToOne
    @JoinColumn(name = "masp")
    private Sanpham sanpham;
    private DatHangId(){}
    private DatHangId(String madh,Sanpham sanpham){
        this.madh = madh;
        this.sanpham= sanpham;
    }
    
}
