package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "pending_offers")
public class PendingOffer {
    @Id
    @Column(name = "offerId") //offerId for reference
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int offerId;

    private int orderId;
    private Boolean isActive; // Status of the offer
    private Date receivedDate;
    private int totalDayActive;

    // Many-to-One  with User
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId", insertable = false, updatable = false)
    private User user; // User entity

    @Column(name = "userId") //userId for reference
    private int userId;

    // Many-to-One with Offers
    @ManyToOne
    @JoinColumn(name = "offerId", referencedColumnName = "offerId", insertable = false, updatable = false)
    private Offers offer; //Offers entity

}
