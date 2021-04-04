package com.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Thue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long matv;
    private String mahdn;
    private String tienthue;
}
