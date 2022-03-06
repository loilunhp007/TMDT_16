package com.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "qlcmt")
@Entity
@Getter
@Setter
@IdClass(CmtId.class)
public class QLComment {
    @Id
    private String madh;
    @Id
    private String masp;
    private String noidung;
    private String sao;
}
