package com.Entity;

import java.io.Serializable;

public class DatHangId implements Serializable {
    private String madh;
    private String masp;
    private DatHangId(){}
    private DatHangId(String madh,String masp){
        this.madh = madh;
        this.masp = masp;
    }
    
}
