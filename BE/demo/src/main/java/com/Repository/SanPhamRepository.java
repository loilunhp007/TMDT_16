package com.Repository;

import com.Entity.Sanpham;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SanPhamRepository extends JpaRepository<Sanpham,String> {
    
}
