import React from 'react';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import SignupPage from './pages/SignupPage';
import AssetsList from './components/assets/AssetsList';
import './styles/dashboard.css';

function App() {
  // Temporary toggle for demo purposes
  const showSignup = false;

  if (showSignup) {
    return <SignupPage />;
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <header className="header">
          <h2 className="welcome-text">Welcome back, Admin</h2>
        </header>
        
        <div className="widget-grid">
          <Widget 
            title="Total Users"
            value="12,345"
            description="Total users this month"
            icon={Users}
            color="#2563eb"
          />
          <Widget 
            title="Revenue"
            value="$54,321"
            description="Total revenue this month"
            icon={DollarSign}
            color="#16a34a"
          />
          <Widget 
            title="Orders"
            value="789"
            description="Orders this month"
            icon={ShoppingCart}
            color="#dc2626"
          />
          <Widget 
            title="Growth"
            value="+24.5%"
            description="Compared to last month"
            icon={TrendingUp}
            color="#9333ea"
          />
        </div>

        <AssetsList />
      </main>
    </div>
  );
}

export default App;