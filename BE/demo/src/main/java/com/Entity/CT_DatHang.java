package com.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
@Entity
@Table(name="ctdathang")
@IdClass(DatHangId.class)
public class CT_DatHang {
    @Id
    private String madh;
    @Id
    @ManyToOne
    @JoinColumn(name = "masp")
    private Sanpham product;
    private String soluong;
    private String gia;
    private String tongtien;
    private String thanhtoan;
}
