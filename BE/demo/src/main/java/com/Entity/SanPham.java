package com.Entity;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import java.sql.Blob;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Getter
@Setter
@Table(name = "SanPham")
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long masp;
    private long maloai;
    private String tensp;
    private String gia;
    @Lob
    private Blob hinhanh;
    private String thongtinsanpham;
    private String soluong;
    private String danhgia;
    private String luotxem;
    private String trangthai;
}
