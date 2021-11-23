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
public class loaiThanhVien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maltv;
    private long tenltv;
    private String trangthai;
}
