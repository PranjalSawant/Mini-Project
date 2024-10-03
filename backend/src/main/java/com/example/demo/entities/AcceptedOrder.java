package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "accepted_orders")
public class AcceptedOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId; // Unique identifier for the order fk Pending collection
    private int userId;
    private int agentId;
    private String orderStatus;

    @OneToOne
    @JoinColumn(name = "collection_id", referencedColumnName = "collectionId")
    private PendingCollection pendingCollection;
}
