package com.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class QLComment {
    @Id
    private long matv;
    @Id
    private long masp;
    private String noidung;
}
