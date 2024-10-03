package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "pending_offers")
public class PendingOffer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int offerId;

    private int userId;
    private int orderId;
    private String offerDetails;
    private boolean isActive; // Status of the offer

}
