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
    @Query(value = "SELECT sum(ctdh.thanhtoan) from CTDatHang ctdh join DatHang dh on ctdh.madh = dh.madh where dh.matvban=?1 and Month(dh.ngaytao)=?2  group by ctdh.masp",nativeQuery = true)
    public List<Long> findThanhtienGroupbyMasp(String matv,int thang);
    @Query(value = "SELECT sum(ctdh.soluong) from CTDatHang ctdh join DatHang dh on ctdh.madh = dh.madh where dh.matvban=?1 and Month(dh.ngaytao)=?2  group by ctdh.masp",nativeQuery = true)
    public List<Long> thongkesoluong(String matv,int thang);
    public List<CT_DatHang> findAllByMasp(String masp);
}
