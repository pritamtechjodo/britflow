// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Banner';
import FeaturedProduct from './FeaturedProduct';
import Footer from './Footer';
import Header from './Header';
import HotProduct from './HotProduct';
import ProductCard from './ProductCard';
import Sale from './Sale';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';
import Category from './Category';
import Offer from './Offer';

// Home Component (for Home Route)
const Home = () => (
  <div className="bg-gray-100">
    <Banner />
    <div className="flex flex-wrap justify-center items-center">
      {[
        { badgeColor: 'blue' },
        { badgeColor: 'blue' },
        { badgeColor: 'blue' },
        { badgeColor: 'red' },
        { badgeColor: 'red' },
        { badgeColor: 'blue' },
        { badgeColor: 'blue' },
        { badgeColor: 'blue' },
      ].map((product, index) => (
        <ProductCard
          key={index}
          isNew={true}
          badgeColor={product.badgeColor}
          imageAlt="Placeholder image of a kids toy"
        />
      ))}
    </div>
    <Sale />
    <FeaturedProduct />
    <Offer />
    <HotProduct />
  </div>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
