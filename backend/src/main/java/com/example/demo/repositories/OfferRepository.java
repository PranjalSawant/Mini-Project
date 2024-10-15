package com.example.demo.repositories;

import com.example.demo.entities.Offers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<Offers, Integer> {
}
