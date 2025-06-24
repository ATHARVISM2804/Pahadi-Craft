import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ContactSlider from './components/ContactSlider';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Collections from './components/Collections';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import About from './pages/About';
import FragranceGuide from './pages/FragranceGuide';
import CustomOrder from './pages/CustomOrder';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminPanel from './components/admin/AdminPanel';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import Faq from './pages/Faq';
import CareGuide from './pages/CareGuide';
import Dashboard from './pages/Dashboard';
import Checkout from './components/Checkout';
import UserProfile from './pages/UserProfile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF8F2]">
        <Navbar />
        <Cart />
        <ContactSlider />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/fragrance-guide" element={<FragranceGuide />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/care-guide" element={<CareGuide />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Collections />
      <WhyChooseUs />
      <Testimonials />
      <Instagram />
    </main>
  );
};

export default App;
