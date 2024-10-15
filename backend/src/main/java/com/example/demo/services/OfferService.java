package com.example.demo.services;

import com.example.demo.dto.OfferDTO;
import com.example.demo.entities.Offers;
import com.example.demo.repositories.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    @Transactional
    public OfferDTO createOffer(OfferDTO offerDTO) {
        Offers offer = new Offers();
        offer.setOfferName(offerDTO.getOfferName());
        offer.setOfferDescription(offerDTO.getOfferDescription());
        offer.setDiscount(offerDTO.getDiscount());
        offer.setIsActive(offer.getIsActive());
        Offers savedOffer = offerRepository.save(offer);

        // Convert savedOffer entity back to DTO
        OfferDTO savedOfferDTO = new OfferDTO();
        savedOfferDTO.setOfferId(savedOffer.getOfferId());
        savedOfferDTO.setOfferName(savedOffer.getOfferName());
        savedOfferDTO.setOfferDescription(savedOffer.getOfferDescription());
        savedOfferDTO.setDiscount(savedOffer.getDiscount());
        savedOfferDTO.setIsActive('Y'); // Default status as active

        return savedOfferDTO;
    }
}
