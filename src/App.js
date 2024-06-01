import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import Order from './components/Order';
import Brands from './components/Brands';
import Reviews from './components/Reviews';
import Support from './components/Support';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <Carousel />
              {/* Другие компоненты вашего главного экрана */}
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;