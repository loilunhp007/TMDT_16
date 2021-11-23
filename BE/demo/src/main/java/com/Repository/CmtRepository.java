package com.Repository;

import java.util.List;

import com.Entity.CmtId;
import com.Entity.QLComment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface CmtRepository extends JpaRepository<QLComment,CmtId>{
    public List<QLComment> findAllByMasp(String masp);
    public QLComment findByMadhAndMasp(String madh,String masp);
}
