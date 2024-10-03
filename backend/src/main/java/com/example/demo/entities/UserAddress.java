package com.example.demo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "user_addresses")
public class UserAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addressId;
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private String country;

    // Many-to-one relationship with User
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Foreign key column
    private User user;

}
