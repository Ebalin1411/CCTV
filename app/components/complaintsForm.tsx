'use client';

import { useState } from 'react';
import { createComplaint } from '../actions/complaints';

export default function ComplaintForm() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData(e.currentTarget);
    const res = await createComplaint(formData);

    if (res.success) {
      setSuccess('✅ Complaint submitted successfully!');
      (e.target as HTMLFormElement).reset();
    } else {
      setError(res.error || 'Something Went Wrong');
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">New Complaint</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}

        <input
          type="text"
          name="customerId"
          placeholder="Enter Your Mobile Number"
          required
          className="w-full border p-2 rounded-md"
        />

        <input
          type="text"
          name="title"
          placeholder="Enter Your Complaint"
          maxLength={200}
          required
          className="w-full border p-2 rounded-md"
        />

        <textarea
          name="description"
          placeholder="Installation, Repair or service?"
          required
          className="w-full border p-2 rounded-md"
        ></textarea>

        <select
          name="status"
          className="w-full border p-2 rounded-md"
          defaultValue="pending"
        >
          <option value="pending">Pending</option>
          <option value="assigned">Assigned</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="declined">Declined</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          SUBMIT YOUR COMPLAINTS
        </button>
      </form>
    </div>
  );
}
