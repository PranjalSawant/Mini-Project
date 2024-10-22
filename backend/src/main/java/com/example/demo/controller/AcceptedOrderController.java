//package com.example.demo.controller;
//
//import com.example.demo.dto.AcceptOrderDTO;
//import com.example.demo.repositories.AcceptedOrderRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/orders")
//@CrossOrigin(origins = "*")
//public class AcceptedOrderController {
//
//    @Autowired
//    private AcceptedOrderRepository acceptedOrderRepository;
//    public AcceptedOrderController(AcceptedOrderRepository acceptedOrderRepository) {
//        this.acceptedOrderRepository = acceptedOrderRepository;
//    }
//
//
////    @GetMapping("/completed")
////    public List<Object[]> getCompletedOrders() {
////        return acceptedOrderRepository.findCompletedOrdersWithDetails();
////    }
//
//    @GetMapping("/completed")
//    public List<Map<String, Object>> getCompletedOrders() {
//        List<Object[]> results = acceptedOrderRepository.findCompletedOrdersWithDetails();
//        List<Map<String, Object>> response = new ArrayList<>();
//
//        for (Object[] result : results) {
//            Map<String, Object> map = new HashMap<>();
//            map.put("orderId", result[0]);
//            map.put("userId", result[1]);
//            map.put("agentId", result[2]);
//            map.put("orderStatus", result[3]);
//            map.put("createdDate", result[4]);
//            map.put("modifiedDate", result[5]);
//            map.put("user", result[6]); // Directly add the User object
//            map.put("agent", result[7]); // Directly add the Agent object
//            response.add(map);
//        }
//
//        return response;
//    }
//
//}
