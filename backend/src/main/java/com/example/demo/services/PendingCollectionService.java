package com.example.demo.services;

import com.example.demo.entities.PendingCollection;
import com.example.demo.repositories.PendingCollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PendingCollectionService {

    @Autowired
    private PendingCollectionRepository pendingCollectionRepository;

    public void savePendingCollection(PendingCollection collection) {
        pendingCollectionRepository.save(collection);
    }
    public List<PendingCollection> getPickupsByZipCode(String zipCode) {
        return pendingCollectionRepository.findByCollectionZipAndCollectionStatus(zipCode, "Pending");
    }

    // find PendingCollection by ID
    public Optional<PendingCollection> findById(int collectionId) {
        return pendingCollectionRepository.findById(collectionId);
    }

    // Fetch pickups by pincode and where isAssigned is 'N'
    public List<PendingCollection> getPickupsByZipCodeAndIsAssigned(String zipCode, char isAssigned) {
        return pendingCollectionRepository.findByCollectionZipAndIsAssigned(zipCode, isAssigned);
    }
    public void deleteById(int collectionId) {
        pendingCollectionRepository.deleteById(collectionId);
    }
}
