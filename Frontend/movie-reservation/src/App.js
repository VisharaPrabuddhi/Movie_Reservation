import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';

// Admin Side
import Dashboard from './components/dashboard/DashboardLoder';
import DisplayAllMovie from './pages/Movies/DisplayAll';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movie" element={<DisplayAllMovie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
