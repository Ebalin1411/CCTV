'use client';

import { useState } from 'react';
import { createUser } from '../actions/user';

export default function RegisterPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData(e.currentTarget);
    const res = await createUser(formData);

    if (res.success) {
      setSuccess('✅ User registered successfully!');
    } else {
      setError('❌ ' + res.error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4 text-black"
      >
        <h1 className="text-2xl font-bold text-center">Register</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Phone Number"
          className="w-full border p-2 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border p-2 rounded-md"
        />
        <select name="role" required className="w-full border p-2 rounded-md">
          <option value="">Select Role</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="technician">Technician</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
