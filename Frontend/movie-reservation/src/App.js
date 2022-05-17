import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';

// Admin Side
import Dashboard from './components/dashboard/DashboardLoder';
import DisplayAllMovie from './pages/Movies/DisplayAll';
import AddMovie from './pages/Movies/AddMovie';
import UpdateMovie from './pages/Movies/UpdateMovie';

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
          <Route path="/new-movie" element={<AddMovie />} />
          <Route path="/update-movie/:id" element={<UpdateMovie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
