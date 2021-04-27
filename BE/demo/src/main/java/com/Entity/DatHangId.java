package com.Entity;

import java.io.Serializable;

public class DatHangId implements Serializable {
    private String mahdn;
    private String masp;
    private DatHangId(){}
    private DatHangId(String mahdn,String masp){
        this.mahdn = mahdn;
        this.masp = masp;
    }
    
}
