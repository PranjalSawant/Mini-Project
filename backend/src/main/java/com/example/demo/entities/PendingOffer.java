package com.example.demo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "pending_offers")
public class PendingOffer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int offerId; // Unique identifier for the offer

    private int userId; // User ID related to the offer
    private int orderId; // Order ID for successful orders
    private String offerDetails; // Details about the offer
    private boolean isActive; // Status of the offer

    // Getters and Setters
    public int getOfferId() {
        return offerId;
    }

    public void setOfferId(int offerId) {
        this.offerId = offerId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getOfferDetails() {
        return offerDetails;
    }

    public void setOfferDetails(String offerDetails) {
        this.offerDetails = offerDetails;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
