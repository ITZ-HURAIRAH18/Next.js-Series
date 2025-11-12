"use client";

import { useState } from "react";
import { createHospitalAction } from "./hospital.action";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HospitalFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleCreateHospital = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    
    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      const result = await createHospitalAction(data);
      
      if (result.success) {
        setMessage("✅ " + result.message);
        // Reset form
        event.target.reset();
        // Optionally redirect back to list after success
        setTimeout(() => {
          router.push("/hospital2.0");
        }, 2000);
      } else {
        setMessage("❌ " + result.message);
      }
    } catch (error) {
      setMessage("❌ Failed to add hospital");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Navigation */}
      <div className="mb-6">
        <Link 
          href="/hospital2.0"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Hospital List
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">
        🏥 Add New Hospital
      </h2>
      
      <form
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 bg-white shadow-lg p-6 rounded-xl border"
        onSubmit={handleCreateHospital}
      >
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            name="name"
            placeholder="Hospital Name"
            required
          />
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            name="city"
            placeholder="City"
            required
          />
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            name="state"
            placeholder="State"
            required
          />
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            name="department"
            placeholder="Department"
            required
          />
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="number"
            name="established_year"
            placeholder="Established Year (e.g. 2005)"
            min="1800"
            max={new Date().getFullYear()}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`sm:col-span-2 py-3 px-6 rounded-lg font-medium transition-colors ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed text-white' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Adding Hospital...' : 'Add Hospital'}
          </button>
        </form>
        
        {/* Message Display */}
        {message && (
          <div className={`mt-4 p-3 rounded-lg text-center ${
            message.includes('✅') 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}>
            {message}
          </div>
        )}
      </div>
  );
}