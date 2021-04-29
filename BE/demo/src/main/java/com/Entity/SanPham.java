package com.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Getter
@Setter
@Table(name = "sanpham")
public class Sanpham{

    @Id
    private String masp;
    private String maloai;
    private String tensp;
    private int gia;
    private String hinhanh;
    private String thongtinsanpham;
    private int soluong;
    private int danhgia;
    private int luotxem;
    private int trangthai;
    @ManyToOne
    @JoinColumn(name = "matv")
    private UserDetail userDetail;
}
