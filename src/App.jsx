import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardOrders from './pages/DashboardOrders';
import DashboardProduction from './pages/DashboardProduction';
import DashboardWarehouse from './pages/DashboardWarehouse';
import ProductDetails from './pages/ProductDetails';

// Temporary bypass of Layout for debugging
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/order" element={<DashboardOrders />} />
        <Route path="/orders" element={<DashboardOrders />} />
        <Route path="/production" element={<DashboardProduction />} />
        <Route path="/warehouse" element={<DashboardWarehouse />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;