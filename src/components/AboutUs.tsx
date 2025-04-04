import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">About Noomi Gutters</h1>
        
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000"
            alt="Noomi Gutters Team"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl mb-6">
            Noomi Gutters has proudly served the DMV area as a trusted leader in gutter solutions.
            With a commitment to excellence, we specialize in gutter cleaning, replacement, protection systems, and exterior maintenance. Our highly trained team brings years of hands-on experience, professionalism, and attention to detail to every job—ensuring homes and businesses are protected year-round. At Noomi Gutters, customer satisfaction isn’t just a promise — it’s the foundation of everything we do
            </p>
            
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
              To protect homes and businesses with superior gutter solutions while providing unmatched
              customer service. We believe in doing the job right the first time, every time.
            </p>
            
            <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Over 1,000 satisfied customers in the DMV area</li>
              <li>Premium materials and cutting-edge techniques</li>
              <li>Comprehensive warranty on all services</li>
              <li>Free estimates and competitive pricing</li>
            </ul>
            
            <h2 className="text-3xl font-semibold mb-4">Connect With Us</h2>
            <p className="mb-4">
              Follow us on social media for tips, updates, and special offers:
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574891194230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-[#FF204E] transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span>Facebook</span>
              </a>
              <a
                 href="https://www.instagram.com/noomigutters?igsh=emxraTVqcHlqMTl1" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-[#FF204E] transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;