package com.Repository;

import java.util.List;

import com.Entity.DatHang;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<DatHang,String>{
    public List<DatHang> findByMatvban(String matvban);
    public List<DatHang> findByMatvmua(String matvmua);
}
