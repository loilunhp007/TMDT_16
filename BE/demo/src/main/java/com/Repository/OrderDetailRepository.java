package com.Repository;

import java.util.List;

import com.Entity.CT_DatHang;
import com.Entity.CT_DatHangId;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<CT_DatHang,CT_DatHangId>{
    public List<CT_DatHang> findByMadh(String madh);
    public Long countByMasp(String masp);
    public List<CT_DatHang> findAllByMasp(String masp);
}
