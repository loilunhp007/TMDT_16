package com.Entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Data
@Getter
@Setter
@Table(name = "thanhvien")
public class UserDetail {
    @Id
    @Column(name = "matv")
    private long matv;
    private String sdt;
    private String loaithanhvien;
    private String ho;
    private String ten;
    private String diachi;
    private String ngaysinh;
    private String gmail;
    private String ngaytao;
    private String trangthai; 
}
