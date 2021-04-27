package com.Repository;

import java.util.List;

import com.Entity.CT_DatHang;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<CT_DatHang,String>{
    public List<CT_DatHang> findByMahdn(String madhn);
}
