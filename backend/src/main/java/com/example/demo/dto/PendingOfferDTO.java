package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PendingOfferDTO {
    private int pendingOfferId;
    private UserDTO user;
    private Long offerId; // Assuming you might want to reference the offer
    private String collectionType; // Example field
    private String collectionDescription; // Example field
    private String receivedDate; // Example field
    private Boolean isActive; // Example field

    // Getters and Setters
}