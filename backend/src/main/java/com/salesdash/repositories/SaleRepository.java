package com.salesdash.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.salesdash.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
