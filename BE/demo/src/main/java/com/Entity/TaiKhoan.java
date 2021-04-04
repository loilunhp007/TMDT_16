package com.Entity;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
@Table(name = "TaiKhoan")
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String sdt;
    private String matkhau;
    private String trangthai;
}
