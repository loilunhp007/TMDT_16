package com.Repository;

import com.Entity.LoaiMay;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoaiMayRepository extends JpaRepository<LoaiMay,String> {
    
}
