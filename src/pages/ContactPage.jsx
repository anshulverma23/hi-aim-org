import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/UI/ScrollReveal";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="animate-slide-up pt-36 pb-16 px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-yellow-600 font-semibold mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </ScrollReveal>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border border-green-300 rounded-xl text-green-700">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <ScrollReveal direction="up" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 lg:p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 transition resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold to-gold-dark text-white rounded-md px-6 py-3 font-bold hover:shadow-lg transition transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <StaggerContainer className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <StaggerItem>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 h-full">
                <p className="text-yellow-600 text-sm uppercase tracking-widest mb-2">
                  Email
                </p>
                <p className="text-gray-700">info@hi-aim.com</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 h-full">
                <p className="text-yellow-600 text-sm uppercase tracking-widest mb-2">
                  Phone
                </p>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 h-full">
                <p className="text-yellow-600 text-sm uppercase tracking-widest mb-2">
                  Location
                </p>
                <p className="text-gray-700">New York, USA</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
