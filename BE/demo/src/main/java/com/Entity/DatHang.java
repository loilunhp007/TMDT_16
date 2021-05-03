package com.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
    private String madh;
    @ManyToOne
    @JoinColumn(name = "matvban")
    private UserDetail tvban;
    @ManyToOne
    @JoinColumn(name = "matvmua")
    private UserDetail tvmua;
    private String ngaytao;
    private int tongtien;
    private int trangthai;

}
