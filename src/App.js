import React from 'react';
import Navbar from './components/Navbar'; // Ensure this path is correct
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Recommendations from './components/Recommendations';
import Tools from './components/Tools';
import AboutUs from './components/AboutUs'; // Import AboutUs component
import BHKSelection from './components/BHKSelection';
import KitchenLayouts from './components/KitchenLayouts';
import ImageCards from './components/ImageCards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BudgetEstimator from './components/BudgetEstimator';
import EstimationForm from './components/EstimationForm'; // Import the new EstimationForm
import KitchenDesignFeatures from './components/KitchenDesignFeatures'; // Adjust the import path as needed
import WardrobeHeight from './components/WardrobeHeight'; // Import the new component
import Terrace from './components/Terrace'; // Import the Terrace component
import PoojaRoom from './components/PoojaRoom';
import Cart from './components/Cart';

import SignIn from './components/SignIn'; // Adjust path accordingly
import SignUp from './components/SignUp';
import SearchResults from './components/SearchResults';
import 'leaflet/dist/leaflet.css';
import LivingRoomView from './components/LivingRoomView';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/budgetestimator" element={<BudgetEstimator />} />
        
          <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
          <Route path="/full-home" element={<BHKSelection />} />
          <Route path="/kitchen" element={<KitchenLayouts />} />
          <Route path="/image-cards" element={<ImageCards />} />
          <Route path="/estimation-form" element={<EstimationForm />} /> {/* Add EstimationForm route */}
          <Route path="/" element={<Home />} />
          <Route path="/kitchen-design-features" element={<KitchenDesignFeatures />} />
          <Route path="/wardrobe" element={<WardrobeHeight />} /> {/* Add the new route */}
          <Route path="/terrace" element={<Terrace />} /> {/* Add this route */}
          <Route path="/poojaroom" element={<PoojaRoom />} />
          <Route path="/cart" element={<Cart />} /> {/* Add the Cart route */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
          path="/search"
          element={<SearchResults searchQuery={new URLSearchParams(window.location.search).get('query')} />}
        />
        <Route path="/livingroomview" element={<LivingRoomView />} />
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
