package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "offers")
public class Offers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "offer_id") // Ensure this matches the database column
    private int offerId; // Unique identifier for the offer

    private String offerName; // Name of the offer
    private String offerDescription; // Description of the offer
    private double discount; // Discount percentage or amount
    private char isActive;

    // One-to-many relationship with PendingOffer
    @OneToMany(mappedBy = "offer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PendingOffer> pendingOffers; // Reference to PendingOffer
}
