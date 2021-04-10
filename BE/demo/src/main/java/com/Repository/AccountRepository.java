package com.Repository;

import com.Entity.TaiKhoan;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<TaiKhoan, Long>{
    
}
