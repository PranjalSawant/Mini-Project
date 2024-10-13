package com.example.demo.repositories;

import com.example.demo.entities.PendingOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PendingOfferRepository extends JpaRepository<PendingOffer, Integer> {
    @Query("SELECT po FROM PendingOffer po JOIN po.user u JOIN po.offer o WHERE u.userId = :userId")
    List<PendingOffer> findPendingOffersByUserId(@Param("userId") Long userId);
}
