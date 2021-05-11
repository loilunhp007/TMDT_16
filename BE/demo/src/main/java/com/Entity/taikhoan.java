package com.Entity;

import lombok.*;

import javax.persistence.*;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
@Table(name = "taikhoan")
public class taikhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long uid;
    private String email;
    private String matkhau;
    private String trangthai;
    private String matv;
    public taikhoan(String email,String matkhau){
        this.email=email;
        this.matkhau=matkhau;
    }
}
