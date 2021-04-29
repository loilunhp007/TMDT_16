package com.Repository;

import java.util.List;

import com.Entity.Sanpham;
import com.Entity.UserDetail;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SanPhamRepository extends JpaRepository<Sanpham,String> {
    public List<Sanpham> findByTrangthai(int trangthai);
    public Sanpham findByTensp(String tensp);
    public List<Sanpham> findByUserDetail(UserDetail userDetail);
    public List<Sanpham> findByTenspContains(String tensp);
}   
