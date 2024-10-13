package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "pending_offers")
public class PendingOffer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Unique identifier for the pending offer
    private int pendingOfferId;

    // Many-to-One relationship with User
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // Reference to the User entity

    // Many-to-One relationship with Offers
    @ManyToOne
    @JoinColumn(name = "offer_id", nullable = false)
    private Offers offer; // Reference to the Offers entity

    private int orderId; // Reference to the order associated with this offer
    private char isActive; // Status of the offer (active/inactive)
    private Date receivedDate; // Date when the offer was received
    private int totalDayActive; // Total number of active days for the offer
}
