package com.example.demo.repositories;

import com.example.demo.entities.PendingCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PendingCollectionRepository extends JpaRepository<PendingCollection, Integer> {
    List<PendingCollection> findByCollectionZipAndCollectionStatus(String zip, String status);

    // find pickups by zip code and assigned status
    List<PendingCollection> findByCollectionZipAndIsAssigned(String collectionZip, char isAssigned);

    @Query("SELECT p FROM PendingCollection p JOIN FETCH p.user WHERE p.collectionZip = :pincode AND p.isAssigned = :isAssigned")
    List<PendingCollection> findByZipCodeAndIsAssigned(String pincode, char isAssigned);

    // Fetch all pending collections for a specific user
    List<PendingCollection> findByUserIdAndCollectionStatus(int userId, String collectionStatus);
}
