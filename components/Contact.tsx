'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{ message: string; error: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ message: 'Please fill in all fields.', error: true });
      return;
    }

    try {
      // For now, simulate form submission with timeout
      setStatus(null);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({ message: 'Message sent! Thank you.', error: false });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ message: 'Failed to send message. Try again later.', error: true });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {status && (
          <p className={`mb-4 ${status.error ? 'text-red-600' : 'text-green-600'}`} role="alert">
            {status.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
