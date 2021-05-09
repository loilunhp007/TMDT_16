package com.Services;

import java.util.List;

import com.Entity.CmtId;
import com.Entity.QLComment;
import com.Repository.CmtRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Transactional(rollbackFor = Exception.class)
@Service
public class CmtService {
    @Autowired
    private CmtRepository cmtRepository;
    public List<QLComment> getAllCmt(){
        return cmtRepository.findAll();
    }
    public QLComment addCmt(QLComment cmt){
        return cmtRepository.save(cmt);
    }
    public List<QLComment> getAllCmtBySp(String masp){
        return cmtRepository.findAllByMasp(masp);
    }
    public QLComment getCmt(String madh,String masp){
        return cmtRepository.findByMadhAndMasp(madh, masp);
    }
}
