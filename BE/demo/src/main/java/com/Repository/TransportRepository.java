package com.Repository;

import com.Entity.Transport;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TransportRepository extends JpaRepository<Transport,String> {
    
}
