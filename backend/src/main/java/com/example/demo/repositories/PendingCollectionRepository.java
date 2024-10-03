package com.example.demo.repositories;

import com.example.demo.entities.PendingCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PendingCollectionRepository extends JpaRepository<PendingCollection, Integer> {
    List<PendingCollection> findByCollectionZipAndCollectionStatus(String zip, String status);

    // find pickups by zip code and assigned status
    List<PendingCollection> findByCollectionZipAndIsAssigned(String collectionZip, char isAssigned);
}
