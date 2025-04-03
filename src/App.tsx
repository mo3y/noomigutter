import CustomerServicePage from './components/CustomerServicePage';
import ReviewPage from './components/ReviewPage';
import { signInWithPopup, onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";




import emailjs from '@emailjs/browser';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Star, ChevronRight, Shield, Droplets, Home, Power, Brush, Facebook, Instagram, Menu, X } from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import ReviewCard from './components/ReviewCard';
import Map from './components/Map';
import AboutUs from './components/AboutUs';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    image: ''
  });

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  
    return () => unsubscribe();
  }, []);
  
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  
  const logout = () => {
    signOut(auth);
  };
  
/**
 *  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_7bypp26', // Replace with your actual Service ID
      'template_dloj44v', // Replace with your actual Template ID
      e.target as HTMLFormElement,
      'JCcPGlv3NAc8iktNs' // Replace with your actual User ID (Public Key)
    )
    .then((result) => {
      alert('Message sent successfully!');
      console.log('Email sent:', result);
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error('Error:', error);
    });
  };
  
 * @param e 
 */

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  
    emailjs.sendForm(
      'service_7bypp26', // Your Service ID
      'template_dloj44v', // Your Template ID
      e.target as HTMLFormElement, // Use the form directly
      'JCcPGlv3NAc8iktNs' // Your Public Key
    )
    .then((result) => {
      console.log('Email sent:', result.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error.text);
      alert('Failed to send message. Please try again.');
    });
  };
  
  
 
  
  const handleScheduleClick = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#contact-form';
    }
  };

  const services = [
    {
      title: 'Gutter Cleaning',
      icon: <Droplets className="w-8 h-8" />,
      description: 'Professional cleaning to ensure optimal water flow and prevent damage.',
      image: './src/assets/image1.jpg'
    },
    {
      title: 'Gutter Guard Installation',
      icon: <Shield className="w-8 h-8" />,
      description: 'Premium protection systems to keep debris out while letting water flow.',
      image: './src/assets/image2.jpg'
    },
    {
      title: 'Gutter Replacement',
      icon: <Home className="w-8 h-8" />,
      description: 'Complete gutter system installations with premium materials.',
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Power Washing',
      icon: <Power className="w-8 h-8" />,
      description: 'High-pressure cleaning to restore your property\'s appearance.',
      image: './src/assets/image4.jpg'
    },
    {
      title: 'Roof Cleaning',
      icon: <Brush className="w-8 h-8" />,
      description: 'Comprehensive roof maintenance for extended lifespan.',
      image: './src/assets/gutterclean.jpg'
    }
  ];

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const snapshot = await getDocs(collection(db, "reviews"));
        const reviewList = snapshot.docs
  .map(doc => doc.data())
  .filter(doc => doc.name && doc.comment && typeof doc.rating === 'number');

setReviews(reviewList.reverse());

// latest reviews first
      } catch (err) {
        console.error("Error loading reviews:", err);
      }
    };
  
    fetchReviews();
  }, []);
  
  /**
   *  {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Exceptional service! The team was professional and thorough.',
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1632154566628-ae5000521427?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best gutter service in the DMV area. Highly recommended!',
      date: '2024-02-10',
      image: 'https://images.unsplash.com/photo-1632154567874-7d1ff47e8d7e?auto=format&fit=crop&q=80&w=800'
    }
  ]);
   */
   

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const reviewWithDate = {
      ...newReview,
      date: new Date().toISOString().split("T")[0],
      image: user?.photoURL || ""

    };
  
    try {
      await addDoc(collection(db, "reviews"), reviewWithDate); // save to Firestore
      setReviews([reviewWithDate, ...reviews]); // update UI
      setNewReview({ name: "", rating: 5, comment: "", image: "" }); // reset form
    } catch (err) {
      console.error("Error adding review:", err);
      alert("Something went wrong while submitting the review.");
    }
  };
  
  

  const Navigation = () => (
    <nav className="bg-gray-900 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white font-bold text-xl">Noomi Gutters</Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-[#FF204E] transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-[#FF204E] transition-colors">About Us</Link>
            <Link to="/customer-service" className="text-white hover:text-[#FF204E] transition-colors">Customer Service</Link>
            <Link to="/review" className="text-white hover:text-[#FF204E] transition-colors"> Write a Review</Link>           

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF204E] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF204E] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block text-white hover:text-[#FF204E] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-[#FF204E] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
  to="/customer-service"
  className="block text-white hover:text-[#FF204E] transition-colors py-2"
  onClick={() => setIsMenuOpen(false)}
>
  Customer Service
</Link>
<Link
  to="/review"
  className="block text-white hover:text-[#FF204E] transition-colors py-2"
  onClick={() => setIsMenuOpen(false)}
>
  Write a Review
</Link>


              <div className="flex space-x-4 py-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF204E] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF204E] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./src/assets/background.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Noomi Gutters
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Professional Gutter Solutions That Protect Your Home
          </p>
          <button 
            onClick={() => window.location.href = '#contact-form'} 
             className="bg-[#FF204E] hover:bg-[#FF204E]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
             Schedule Service Now 
           </button>
           <br />
           <br />
          <button  onClick={() => window.location.href = '#contact-form'} 
             className="bg-[#FF204E] hover:bg-[#FF204E]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Reach Us for  free Estimate </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Service Area</h2>
          <Map />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Customer Reviews</h2>
          
          {reviews.length === 0 ? (
  <p className="text-center text-gray-400">No reviews yet.</p>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {reviews.slice(0, 4).map((review, index) => (
      <ReviewCard key={index} {...review} />
    ))}
  </div>
)}

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#FF204E]" />
                <a href="tel:1234567890" className="text-xl hover:text-[#FF204E] transition-colors">
                  (443) 417-5707 <br />
                  (443) 600-3696
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#FF204E]" />
                <a href="mailto:contact@noomigutters.com" className="text-xl hover:text-[#FF204E] transition-colors">
                  noomigutters@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#FF204E]" />
                <p className="text-xl">Maryland , VA , DC , PA </p>
              </div>
            </div>
       
            <form id="contact-form" onSubmit={sendEmail} className="space-y-6">
  <input type="text" name="user_name" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-800 rounded-lg" required />
  <input type="email" name="user_email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-800 rounded-lg" required />
  <textarea name="message" placeholder="Your Message" rows={4} className="w-full px-4 py-3 bg-gray-800 rounded-lg" required></textarea>
  <button type="submit" className="w-full bg-[#FF204E] text-white px-6 py-3 rounded-lg">Send Message</button>
</form>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white pt-16">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/customer-service" element={<CustomerServicePage sendEmail={sendEmail} />} />
          <Route
  path="/review"
  element={
    <ReviewPage
      user={user}
      loginWithGoogle={loginWithGoogle}
      logout={logout}
      newReview={newReview}
      setNewReview={setNewReview}
      handleReviewSubmit={handleReviewSubmit}
      reviews={reviews}
    />
  }
/>

         



        </Routes>
      </div>
    </Router>
  );
}

export default App;