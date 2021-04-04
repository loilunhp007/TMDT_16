package com.Entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Setter
@Getter
public class Quyen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maq;
    private String tenquyen;
    private String mota;

}
