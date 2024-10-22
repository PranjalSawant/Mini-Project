package com.example.demo.repositories;

import com.example.demo.dto.AcceptOrderDTO;
import com.example.demo.entities.AcceptedOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AcceptedOrderRepository extends JpaRepository<AcceptedOrder, Integer> {

//    @Query("SELECT AcceptOrderDTO(a.pendingCollection.collectionId, a.agentId, CONCAT(ag.agentFirstName, ' ', ag.agentLastName), CONCAT(u.firstname, ' ', u.lastname), a.pendingCollection.createdDate, a.pendingCollection.modifiedDate) FROM AcceptedOrder a JOIN User u ON a.userId = u.userId JOIN Agent ag ON a.agentId = ag.agentId WHERE a.orderStatus = 'Completed'")
//    List<AcceptOrderDTO> findCompletedOrders();

//    @Query("SELECT a.orderId, a.userId, u.firstname as user_first, u.lastname, a.agentId, ag.agentFirstName, ag.agentLastName, a.pendingCollection.collectionName, a.createdDate, a.modifiedDate " +
//            "FROM AcceptedOrder a " +
//            "JOIN User u ON a.userId = u.userId " +
//            "JOIN Agent ag ON a.agentId = ag.agentId " +
//            "JOIN PendingCollection pc ON a.pendingCollection.collectionId = pc.collectionId " +
//            "WHERE a.orderStatus = 'Completed'")
//    List<Object[]> findCompletedOrdersWithDetails();
//@Query("SELECT a " +
//        "FROM AcceptedOrder a " +
//        "JOIN User u ON a.userId = u.userId " +
//        "JOIN Agent ag ON a.agentId = ag.agentId " +
//        "JOIN PendingCollection pc ON a.pendingCollection.collectionId = pc.collectionId " +
//        "WHERE a.orderStatus = 'Completed'")
//List<Object[]> findCompletedOrdersWithDetails();
    @Query("SELECT a.orderId AS orderId, a.userId AS userId, a.agentId AS agentId, a.orderStatus AS orderStatus, " +
            "a.createdDate AS createdDate, a.modifiedDate AS modifiedDate, " +
            "u AS user, ag AS agent " +
            "FROM AcceptedOrder a " +
            "JOIN User u ON a.userId = u.userId " +
            "JOIN Agent ag ON a.agentId = ag.agentId " +
            "WHERE a.orderStatus = 'Completed'")
    List<Object[]> findCompletedOrdersWithDetails();

}
