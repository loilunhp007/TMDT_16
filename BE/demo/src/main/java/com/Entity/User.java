package com.Entity;

import lombok.*;

import javax.persistence.*;

import org.hibernate.annotations.ForeignKey;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
@Table(name = "taikhoan")
public class User {
    @Id
    private long uid;
    private String email;
    private String matkhau;
    private String trangthai;
    private String matv;
    public User(String email,String matkhau){
        this.email=email;
        this.matkhau=matkhau;
    }
}
