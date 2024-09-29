package com.example.demo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "offers")
public class Offers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int offerId; // Unique identifier for the offer
    private String offerName; // Name of the offer
    private String offerDescription; // Description of the offer
    private double discount; // Discount percentage or amount

    // Getters and Setters
    public int getOfferId() {
        return offerId;
    }

    public void setOfferId(int offerId) {
        this.offerId = offerId;
    }

    public String getOfferName() {
        return offerName;
    }

    public void setOfferName(String offerName) {
        this.offerName = offerName;
    }

    public String getOfferDescription() {
        return offerDescription;
    }

    public void setOfferDescription(String offerDescription) {
        this.offerDescription = offerDescription;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }
}
