package com.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "thanh_vien")
public class ThanhVien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long matv;
    private String sdt;
    private String loaithanhvien;
    private String ho;
    private String ten;
    private String diachi;
    private String ngaysinh;
    private String tenshop;
    private String gmail;
    private String ngaytao;
    private String trangthai;
}
