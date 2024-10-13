package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OfferDTO {
    private int offerId;
    private String offerName;
    private String offerDescription;
    private double discount;
}