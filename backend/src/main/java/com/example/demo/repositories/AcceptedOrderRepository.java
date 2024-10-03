package com.example.demo.repositories;

import com.example.demo.entities.AcceptedOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcceptedOrderRepository extends JpaRepository<AcceptedOrder, Integer> {
}
