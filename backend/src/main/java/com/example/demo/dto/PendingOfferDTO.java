package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PendingOfferDTO {
    private int pendingOfferId;
    private UserDTO user;
    private OfferDTO offer;
    private int orderId;
    private char isActive;
    private Date receivedDate;
    private int totalDayActive;
}