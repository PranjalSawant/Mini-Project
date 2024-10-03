package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Table(name = "users")
@Entity
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
}
