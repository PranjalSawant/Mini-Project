package com.example.demo.controller;
import com.example.demo.dto.OfferDTO;
import com.example.demo.dto.PendingOfferDTO;
import com.example.demo.dto.PendingOffersResponseDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.entities.PendingOffer;
import com.example.demo.services.PendingOfferService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/offers")
@CrossOrigin(origins = "*")
public class PendingOfferController {

    // Assuming you have a service to fetch pending offers
    private final PendingOfferService pendingOfferService;

    public PendingOfferController(PendingOfferService pendingOfferService) {
        this.pendingOfferService = pendingOfferService;
    }

    @GetMapping("/{userId}")
    public PendingOffersResponseDTO getPendingOffers(@PathVariable Long userId) {
        List<PendingOffer> pendingOffers = pendingOfferService.getPendingOffersByUserId(userId);
        PendingOffersResponseDTO response = new PendingOffersResponseDTO();

        // Map the PendingOffer to DTOs
        List<PendingOfferDTO> pendingOfferDTOs = pendingOffers.stream().map(pendingOffer -> {
            PendingOfferDTO dto = new PendingOfferDTO();
            dto.setPendingOfferId(pendingOffer.getPendingOfferId());

            // Map User details
            UserDTO userDTO = new UserDTO();
            userDTO.setUserId(pendingOffer.getUser().getUserId());
            userDTO.setFirstname(pendingOffer.getUser().getFirstname());
            userDTO.setLastname(pendingOffer.getUser().getLastname());
            userDTO.setEmail(pendingOffer.getUser().getEmail());
            userDTO.setPhone(null);
            userDTO.setIsVerified(pendingOffer.getUser().getIsVerified());
            dto.setUser(userDTO);

            // Map Offer details
            OfferDTO offerDTO = new OfferDTO();
            offerDTO.setOfferId(pendingOffer.getOffer().getOfferId());
            offerDTO.setOfferName(pendingOffer.getOffer().getOfferName());
            offerDTO.setOfferDescription(pendingOffer.getOffer().getOfferDescription());
            offerDTO.setDiscount(pendingOffer.getOffer().getDiscount());
            dto.setOffer(offerDTO);

            // Set other fields like orderId, isActive, receivedDate, etc.
            dto.setOrderId(pendingOffer.getOrderId());
            dto.setIsActive(pendingOffer.getIsActive());
            dto.setReceivedDate(pendingOffer.getReceivedDate());
            dto.setTotalDayActive(pendingOffer.getTotalDayActive());

            return dto;
        }).toList();

        response.setPendingOffers(pendingOfferDTOs);
        return response;
    }

}
