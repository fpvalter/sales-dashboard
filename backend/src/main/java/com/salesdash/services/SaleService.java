package com.salesdash.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.salesdash.dto.SaleDTO;
import com.salesdash.entities.Sale;
import com.salesdash.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		
		Page<Sale> result =  this.repository.findAll(pageable);
		
		return result.map(x -> new SaleDTO(x));
	}
	
}
