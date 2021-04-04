package com.Entity;

import lombok.*;

import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
public class CT_DatHang {
    @Id
    private long mahdn;
    @Id
    private long masp;
    private String soluong;
    private String gia;
    private String tongtien;
}
