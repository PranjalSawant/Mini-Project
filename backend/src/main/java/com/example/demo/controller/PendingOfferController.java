package com.example.demo.controller;
import com.example.demo.dto.PendingOfferDTO;
import com.example.demo.dto.PendingOffersResponseDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.entities.PendingOffer;
import com.example.demo.services.PendingOfferService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class PendingOfferController {

    // Assuming you have a service to fetch pending offers
    private final PendingOfferService pendingOfferService;

    public PendingOfferController(PendingOfferService pendingOfferService) {
        this.pendingOfferService = pendingOfferService;
    }

    @GetMapping("/users/{userId}/pending-offers")
    public PendingOffersResponseDTO getPendingOffers(@PathVariable Long userId) {
        List<PendingOffer> pendingOffers = pendingOfferService.getPendingOffersByUserId(userId);
        PendingOffersResponseDTO response = new PendingOffersResponseDTO();

        List<PendingOfferDTO> pendingOfferDTOs = pendingOffers.stream().map(pendingOffer -> {
            PendingOfferDTO dto = new PendingOfferDTO();
            dto.setPendingOfferId(pendingOffer.getPendingOfferId());

            UserDTO userDTO = new UserDTO();
            userDTO.setUserId(pendingOffer.getUser().getUserId());
            userDTO.setFirstname(pendingOffer.getUser().getFirstname());
            userDTO.setLastname(pendingOffer.getUser().getLastname());
            userDTO.setEmail(pendingOffer.getUser().getEmail());
            userDTO.setPhone("");
            userDTO.setIsVerified("");

            dto.setUser(userDTO);
            // Set other fields as needed
            return dto;
        }).toList();

        response.setPendingOffers(pendingOfferDTOs);
        return response;
    }
}
