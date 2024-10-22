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
        {/* Sidebar */}
        <div className="col-12 col-md-2 p-0">
          <Sidebar setActiveComponent={setActiveComponent} />
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-10 ">
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
