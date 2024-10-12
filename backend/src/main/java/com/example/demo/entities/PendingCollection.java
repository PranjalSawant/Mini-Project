package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pending_collection")
public class PendingCollection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int collectionId;

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId", insertable = false, updatable = false)
    private User user; // Add a reference to the User entity

    private int userId; // This will stay for the foreign key reference
    private String collectionType;
    private String collectionName;
    private String collectionDescription;
    private char isAssigned;
    private Date collectionStartTime; // Start time for the collection
    private Date collectionEndTime;
    private String collectionStatus;
    private String collectionState;
    private String collectionCity;
    private String collectionZip;
    private String collectionCountry;
}
