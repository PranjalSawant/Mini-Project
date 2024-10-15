import React, { useState } from 'react';
import { UserInfo } from './UserInfo';
import { AgentInfo } from './AgentInfo';
import { OffersInfo } from './OffersInfo';
import { CollectionInfo } from './CollectionInfo';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';


const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState('userInfo');

  const renderContent = () => {
    switch (activeComponent) {
      case 'userInfo':
        return <UserInfo />;
      case 'agentInfo':
        return <AgentInfo />;
      case 'offers':
        return <OffersInfo />;
      case 'collectionInfo':
        return <CollectionInfo />;
      default:
        return <UserInfo />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="col" style={{ marginLeft: '250px' }}>
          <Topbar />
          <main className="p-4">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

  // const [activeTab, setActiveTab] = useState('users'); // Default to Users Tab

  // // Dummy Users Data
  // const usersData = [
  //   { id: 1, name: 'John Doe', email: 'john@example.com' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  //   { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
  // ];

  // // Dummy Transactions Data
  // const transactionsData = [
  //   { id: 101, seller: 'John Doe', amount: '$100', date: '2024-10-01' },
  //   { id: 102, seller: 'Jane Smith', amount: '$150', date: '2024-10-02' },
  //   { id: 103, seller: 'Mike Johnson', amount: '$200', date: '2024-10-03' },
  // ];

    // <div className="container mt-5">
    //   <h2>Admin Panel</h2>

    //   {/* Tabs Navigation */}
    //   <ul className="nav nav-tabs">
    //     <li className="nav-item">
    //       <a
    //         className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
    //         href="#!"
    //         onClick={() => setActiveTab('users')}
    //       >
    //         Users
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         className={`nav-link ${activeTab === 'transactions' ? 'active' : ''}`}
    //         href="#!"
    //         onClick={() => setActiveTab('transactions')}
    //       >
    //         Transactions
    //       </a>
    //     </li>
    //   </ul>

    //   <div className="tab-content mt-3">
    //     {/* Users Tab */}
    //     {activeTab === 'users' && (
    //       <div>
    //         <h3>Users Data</h3>
    //         <div className="row">
    //           {usersData.map(user => (
    //             <div className="col-md-4" key={user.id}>
    //               <div className="card mb-4">
    //                 <div className="card-body">
    //                   <h5 className="card-title">{user.name}</h5>
    //                   <p className="card-text">
    //                     <strong>Email:</strong> {user.email}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}

    //     {/* Transactions Tab */}
    //     {activeTab === 'transactions' && (
    //       <div>
    //         <h3>Transactions Data</h3>
    //         <div className="row">
    //           {transactionsData.map(transaction => (
    //             <div className="col-md-4" key={transaction.id}>
    //               <div className="card mb-4">
    //                 <div className="card-body">
    //                   <h5 className="card-title">Transaction ID: {transaction.id}</h5>
    //                   <p className="card-text">
    //                     <strong>Seller:</strong> {transaction.seller}<br />
    //                     <strong>Amount:</strong> {transaction.amount}<br />
    //                     <strong>Date:</strong> {transaction.date}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>

// import React, { useState, useEffect } from 'react';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('users'); // Default to Users Tab
//   const [usersData, setUsersData] = useState([]);
//   const [transactionsData, setTransactionsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch Users Data
//   useEffect(() => {
//     setLoading(true);
//     fetch('/api/users') // Replace with your actual backend endpoint
//       .then(response => response.json())
//       .then(data => {
//         setUsersData(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//         setLoading(false);
//       });
//   }, []);

//   // Fetch Transactions Data
//   useEffect(() => {
//     setLoading(true);
//     fetch('/api/transactions') // Replace with your actual backend endpoint
//       .then(response => response.json())
//       .then(data => {
//         setTransactionsData(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching transactions:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2>Admin Panel</h2>

//       {/* Tabs Navigation */}
//       <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <a
//             className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
//             href="#!"
//             onClick={() => setActiveTab('users')}
//           >
//             Users
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className={`nav-link ${activeTab === 'transactions' ? 'active' : ''}`}
//             href="#!"
//             onClick={() => setActiveTab('transactions')}
//           >
//             Transactions
//           </a>
//         </li>
//       </ul>

//       <div className="tab-content mt-3">
//         {loading && <p>Loading...</p>}

//         {/* Users Tab */}
//         {activeTab === 'users' && !loading && (
//           <div>
//             <h3>Users Data</h3>
//             <div className="row">
//               {usersData.map(user => (
//                 <div className="col-md-4" key={user.id}>
//                   <div className="card mb-4">
//                     <div className="card-body">
//                       <h5 className="card-title">{user.name}</h5>
//                       <p className="card-text">
//                         <strong>Email:</strong> {user.email}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Transactions Tab */}
//         {activeTab === 'transactions' && !loading && (
//           <div>
//             <h3>Transactions Data</h3>
//             <div className="row">
//               {transactionsData.map(transaction => (
//                 <div className="col-md-4" key={transaction.id}>
//                   <div className="card mb-4">
//                     <div className="card-body">
//                       <h5 className="card-title">Transaction ID: {transaction.id}</h5>
//                       <p className="card-text">
//                         <strong>Seller:</strong> {transaction.seller}<br />
//                         <strong>Amount:</strong> {transaction.amount}<br />
//                         <strong>Date:</strong> {transaction.date}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

