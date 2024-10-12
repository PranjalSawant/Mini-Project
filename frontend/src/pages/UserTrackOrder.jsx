import React from 'react'
import { Titles } from '../components/Titles'

export const UserTrackOrder = () => {
     // Dummy data for orders
  const orders = [
    {
      orderId: 1,
      orderDate: '2023-10-01',
      customerName: 'John Doe',
      product: 'Laptop',
      status: 'Completed',
    },
    {
      orderId: 2,
      orderDate: '2024-10-10',
      customerName: 'Jane Smith',
      product: 'Smartphone',
      status: 'Pending',
    },
    {
      orderId: 3,
      orderDate: '2024-10-08',
      customerName: 'Michael Brown',
      product: 'Tablet',
      status: 'Processing',
    },
    {
      orderId: 4,
      orderDate: '2023-09-15',
      customerName: 'Emily White',
      product: 'Headphones',
      status: 'Completed',
    },
  ];
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#d4edda'; // Green background for completed orders
      case 'Pending':
        return '#fff3cd'; // Yellow background for pending orders
      case 'Processing':
        return '#cce5ff'; // Blue background for processing orders
      default:
        return '#ffffff'; // Default white background
    }
  };
  return (
    <div className='container'>
        <Titles textColor="text-olive" heading="Follow Your Waste's Journey to Cash!"/>
        <table className="table table-striped">
        <thead className="thead-dark bg-olive text-white">
          <tr>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              
            >
              <td>{order.orderId}</td>
              <td>{order.orderDate}</td>
              <td>{order.customerName}</td>
              <td>{order.product}</td>
              <td><span className='badge rounded-pill' style={{ backgroundColor: getStatusColor(order.status), color:"black" }}>{order.status} </span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-5"></div>
    </div>
  )
}
