package com.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@IdClass(CT_DatHangId.class)
public class CT_DatHang {
    @Id
    private String madh;
    @Id
    private String masp;
    private String soluong;
    private String gia;
    private String diachigiao;
    private String diachinhan;
    private String tongtien;
    private String thanhtoan;
}
