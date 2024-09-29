package com.example.demo.entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "pending_collection")
public class PendingCollection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int collectionId;

    private int userId;
    private String collectionType;
    private String collectionName;
    private String collectionDescription;
    private boolean isAssigned;
    private Date collectionDateTime;
    private String collectionStatus;
    private String collectionState;
    private String collectionCity;
    private String collectionZip;
    private String collectionCountry;

    // Getters and Setters
    public int getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(int collectionId) {
        this.collectionId = collectionId;
    }

    // Add other getters and setters...
}
