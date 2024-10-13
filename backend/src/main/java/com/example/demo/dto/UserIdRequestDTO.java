package com.example.demo.dto;

public class UserIdRequestDTO {
    private int userId;

    public UserIdRequestDTO(int userId) {
        this.userId = userId;
    }

    public UserIdRequestDTO() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
