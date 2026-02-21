'use client';

import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh salmon grilled to perfection with herbs.',
    price: '$25'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crisp romaine with Caesar dressing and parmesan.',
    price: '$12'
  },
  {
    id: 3,
    name: 'Steak Frites',
    description: 'Juicy steak served with crispy fries.',
    price: '$30'
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2>
      <ul className="max-w-4xl mx-auto space-y-6">
        {menuItems.map(({ id, name, description, price }) => (
          <li
            key={id}
            className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 pb-4"
          >
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            </div>
            <span className="mt-2 md:mt-0 text-indigo-600 font-semibold">{price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
