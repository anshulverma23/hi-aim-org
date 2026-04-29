import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="animate-slide-up pt-36 pb-16 px-4 lg:px-8 bg-gray-50 min-h-screen">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-yellow-600 font-semibold mb-3">
            Join Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
            Register Now
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Secure your spot at HI-AIM 2027. Complete the registration form below.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          
          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border border-green-300 rounded-xl text-green-700">
              Registration successful! We'll send you a confirmation email shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 lg:p-8">
              
              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First name"
                    className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last name"
                    className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-6">
                <label className="block text-sm text-gray-700 font-medium mb-2">
                  Email Address
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

              {/* Phone + Company */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-2">
                    Company / Organization
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 transition"
                  />
                </div>
              </div>

              {/* Role */}
              <div className="mt-6">
                <label className="block text-sm text-gray-700 font-medium mb-2">
                  Your Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 transition"
                >
                  <option value="">Select your role</option>
                  <option value="delegate">Delegate</option>
                  <option value="exhibitor">Exhibitor</option>
                  <option value="sponsor">Sponsor</option>
                  <option value="speaker">Speaker</option>
                  <option value="press">Press/Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold to-gold-dark text-white rounded-md px-6 py-3 font-bold hover:shadow-lg transition transform hover:-translate-y-1"
            >
              Complete Registration
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;