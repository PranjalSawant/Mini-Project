package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate IDs
    private int userId;

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private long phone;
    private char isVerified;

    // Address fields
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private String country;

    // One-to-many relationship with UserAddress
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserAddress> addresses;

    // One-to-many relationship with PendingOffer
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PendingOffer> pendingOffers; // Reference to PendingOffer
}
