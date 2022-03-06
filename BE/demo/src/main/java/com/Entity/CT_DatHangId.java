package com.Entity;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class CT_DatHangId implements Serializable {
    
    private String madh;
    private String masp;
    private CT_DatHangId(){}
    private CT_DatHangId(String madh,String masp){
        this.madh = madh;
        this.masp= masp;
    }
    public String getMadh() {
        return madh;
    }
    public void setMadh(String madh) {
        this.madh = madh;
    }
    public String getMasp() {
        return masp;
    }
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((madh == null) ? 0 : madh.hashCode());
        result = prime * result + ((masp == null) ? 0 : masp.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        CT_DatHangId other = (CT_DatHangId) obj;
        if (madh == null) {
            if (other.madh != null)
                return false;
        } else if (!madh.equals(other.madh))
            return false;
        if (masp == null) {
            if (other.masp != null)
                return false;
        } else if (!masp.equals(other.masp))
            return false;
        return true;
    }
    @Override
    public String toString() {
        return "CT_DatHangId [madh=" + madh + ", masp=" + masp + "]";
    }
    public void setMasp(String masp) {
        this.masp = masp;
    }
    

}
