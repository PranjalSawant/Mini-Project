package com.example.demo.services;

import com.example.demo.entities.PendingOffer;
import com.example.demo.repositories.PendingOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PendingOfferService {

    @Autowired
    private PendingOfferRepository pendingOfferRepository;

    public List<PendingOffer> getPendingOffersByUserId(Long userId) {
        return pendingOfferRepository.findPendingOffersByUserId(userId);
    }
}
