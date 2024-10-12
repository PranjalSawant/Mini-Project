package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PickupRequestDTO {
    private int userId;
    private int userAddressId;
    private String collectionType;
    private String collectionName;
    private String collectionDescription;
    private PickupAddressDTO pickupAddress;
    private String pickupDate;       // Desired date for the pickup (YYYY-MM-DD format)
    private String pickupStartTime;  // Desired start time for the pickup (HH:mm format)
    private String pickupEndTime;    // Desired end time for the pickup (HH:mm format)

    @Getter
    @Setter
    public static class PickupAddressDTO {
        private String address;
        private String city;
        private String state;
        private String zip;
        private String country;
    }
}
