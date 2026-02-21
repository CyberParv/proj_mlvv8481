'use client';

import { useState } from 'react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: ''
  });

  const [status, setStatus] = useState<{ message: string; error: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.date || !formData.time || !formData.guests) {
      setStatus({ message: 'Please complete all fields.', error: true });
      return;
    }

    try {
      setStatus(null);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({ message: 'Reservation successful! We look forward to seeing you.', error: false });
      setFormData({ name: '', date: '', time: '', guests: '' });
    } catch {
      setStatus({ message: 'Failed to make reservation. Please try again later.', error: true });
    }
  };

  return (
    <section id="reservations" className="py-16 px-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Make a Reservation</h2>

      <form onSubmit={handleSubmit} noValidate aria-label="Reservation form">
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
          <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-medium mb-1">
            Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="guests" className="block text-gray-700 font-medium mb-1">
            Number of Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select guests
            </option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
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
          Reserve Now
        </button>
      </form>
    </section>
  );
}
