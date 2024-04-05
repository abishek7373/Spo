import './App.css';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
     </Router>
     <Footer />
   </div>
  );
}

export default App;
