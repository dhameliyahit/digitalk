import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value.trim() === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: 'This field is required.'
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
          }));
        }
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: 'Email address is required.'
          }));
        } else if (!emailPattern.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: 'Invalid email address.'
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: ''
          }));
        }
        break;
      case 'contactNumber':
        const phonePattern = /^[0-9]{10}$/;
        if (value.trim() === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            contactNumber: 'Contact number is required.'
          }));
        } else if (!phonePattern.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            contactNumber: 'Invalid contact number. Must be 10 digits.'
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            contactNumber: ''
          }));
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional client-side validation
    let valid = true;
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        validateField(field, formData[field]);
        valid = false;
      }
    });

    if (valid) {
      // Handle form submission (e.g., send data to an API)
      console.log('Form submitted:', formData);
      // Clear form or show success message
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: ''
      });
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={`mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm py-3 px-4 ${errors.firstName ? 'border-red-500' : ''}`}
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={`mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm py-3 px-4 ${errors.lastName ? 'border-red-500' : ''}`}
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm py-3 px-4 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm py-3 px-4 ${errors.contactNumber ? 'border-red-500' : ''}`}
            />
            {errors.contactNumber && <p className="mt-1 text-sm text-red-600">{errors.contactNumber}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
