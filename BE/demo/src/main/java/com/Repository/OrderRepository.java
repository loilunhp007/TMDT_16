package com.Repository;

import java.util.List;

import com.Entity.DatHang;
import com.Entity.UserDetail;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<DatHang,String>{
    public List<DatHang> findByTvban(UserDetail tvban);
    public List<DatHang> findByTvmua(UserDetail tvmua);
    public List<DatHang> findByTrangthaiAndTvban(int trangthai,UserDetail tvban);
}
