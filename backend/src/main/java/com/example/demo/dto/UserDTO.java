package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private int userId;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;
    private String isVerified;

    // Getters and Setters
}