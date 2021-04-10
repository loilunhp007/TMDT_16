package com.Services;

import com.Entity.UserDetail;
import com.Repository.UserDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDetailRepository tvRepository;
    public List<UserDetail> getAllThanhVien(){
        return tvRepository.findAll();
    }
    public UserDetail getThanhVien(long matv){

        return tvRepository.findById(matv).get();
    }
    public UserDetail save(UserDetail userDetail){
        return tvRepository.save(userDetail);
    }
    public void xoa (long id){
        tvRepository.deleteById(id);
    }

}
