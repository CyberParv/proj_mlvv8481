'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-6 mt-16">
      <p className="text-sm">&copy; {new Date().getFullYear()} Modern Restaurant. All rights reserved.</p>
    </footer>
  );
}
