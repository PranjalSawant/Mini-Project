package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "offer_terms_conditions")
public class OfferTermsConditions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; // Unique identifier for the terms and conditions

    @ManyToOne
    @JoinColumn(name = "offer_id", nullable = false)
    private Offers offer; // Reference to the Offers entity

    @Column(name = "term", nullable = false)
    private String term; // The term or condition

    // No-arg constructor for JPA
    public OfferTermsConditions() {}
}
