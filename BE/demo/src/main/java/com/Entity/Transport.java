package com.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "transport")
public class Transport {
    @Id
    @Column(name = "tid",length = 5,nullable = false) 
    private String tid;
    @Column(name = "name",nullable = false)
    private String tname;
    @Column(name = "fee",nullable = false)
    private String fee;

}
