package com.Repository;

import java.util.List;

import com.Entity.Cart;
import com.Entity.Sanpham;
import com.Entity.UserDetail;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long>{

    public List<Cart> findByUserDetail(UserDetail userDetail);
    public Cart findByProductAndUserDetail(Sanpham product,UserDetail userDetail);
}
