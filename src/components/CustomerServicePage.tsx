import React from 'react';

const CustomerServicePage = ({ sendEmail }) => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Customer Service</h2>
        <p className="text-center text-lg mb-10 text-white/80">
          You can reach us by phone Monday through Friday from 9:00 AM to 5:00 PM, 7 days a week. 
          For your convenience, feel free to send us an email at any time — our team will respond as soon as possible.
        </p>

        <form id="contact-form" onSubmit={sendEmail} className="space-y-6 bg-white/5 p-6 rounded-xl">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-800 rounded-lg"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-gray-800 rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-800 rounded-lg"
            required
          ></textarea>
          <button type="submit" className="w-full bg-[#FF204E] text-white px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomerServicePage;
