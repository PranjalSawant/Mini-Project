package com.example.demo.controller;

import com.example.demo.dto.GeneralResponseDTO;
import com.example.demo.entities.Offers;
import com.example.demo.repositories.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/offers", produces = "application/json")
@CrossOrigin(origins = "*")
public class OffersController {

    @Autowired
    private OfferRepository offersRepository;

    @PostMapping()
    public ResponseEntity<GeneralResponseDTO> createOffer(@RequestBody Offers offerRequest) {
        // Save to database
        Offers savedOffer = offersRepository.save(offerRequest);
        return ResponseEntity.ok(new GeneralResponseDTO("success", "Offer created with ID: " + savedOffer.getOfferId()));
    }
}
