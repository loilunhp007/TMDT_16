package com.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
@Table(name = "dathang")
public class DatHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String madh;
    private String matvban;
    private String matvmua;
    private String ngaytao;
    private int ongtien;
    private int trangthai;

}
