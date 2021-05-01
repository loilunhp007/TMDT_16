package com.Entity;

import java.io.Serializable;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class DatHangId implements Serializable {
    private String madh;
    @ManyToOne
    @JoinColumn(name = "masp")
    private Sanpham product;
    private DatHangId(){}
    private DatHangId(String madh,Sanpham product){
        this.madh = madh;
        this.product= product;
    }
    
}
