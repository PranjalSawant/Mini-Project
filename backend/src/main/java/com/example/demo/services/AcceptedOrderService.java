package com.example.demo.services;

import com.example.demo.entities.AcceptedOrder;
import com.example.demo.repositories.AcceptedOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AcceptedOrderService {

    @Autowired
    private AcceptedOrderRepository acceptedOrderRepository;

    public void saveAcceptedOrder(AcceptedOrder acceptedOrder) {
        acceptedOrderRepository.save(acceptedOrder);
    }
}
