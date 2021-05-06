package com.salesdash.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.salesdash.dto.SaleSuccessDTO;
import com.salesdash.dto.SaleSumDTO;
import com.salesdash.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	@Query("SELECT new com.salesdash.dto.SaleSumDTO(sale.seller, SUM(sale.amount)) "
			+ "FROM Sale sale "
			+ "GROUP BY sale.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.salesdash.dto.SaleSuccessDTO(sale.seller, SUM(sale.visited), SUM(sale.deals)) "
			+ "FROM Sale sale "
			+ "GROUP BY sale.seller")
	List<SaleSuccessDTO> successGroupedBySeller();
}
