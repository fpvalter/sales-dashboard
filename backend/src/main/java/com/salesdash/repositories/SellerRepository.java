package com.salesdash.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.salesdash.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

}
