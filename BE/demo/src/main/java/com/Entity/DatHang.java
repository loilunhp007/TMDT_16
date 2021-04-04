package com.Entity;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
public class DatHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long madh;
    private long matvban;
    private long matvmua;
    private String ngaytao;
    private String tongtien;
    private String trangthai;

}
