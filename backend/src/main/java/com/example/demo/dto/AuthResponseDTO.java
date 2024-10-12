package com.example.demo.dto;

import com.example.demo.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AuthResponseDTO {
    private String status;
    private String message;
    private int id;
    private String username;
    private User user;
}
