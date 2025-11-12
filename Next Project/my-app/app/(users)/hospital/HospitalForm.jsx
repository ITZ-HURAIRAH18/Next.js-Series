"use client";

import { useRouter } from "next/navigation";
import { createHospitalAction } from "./hospital.action";

export const HospitalForm = () => {
  const router = useRouter();
  const handleCreateHospital = async (formData) => {
    const data = Object.fromEntries(formData);
    await createHospitalAction(data);
    router.refresh();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🏥 Add New Hospital
        </h2>
        <form
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 bg-white shadow-lg p-6 rounded-xl border"
          action={handleCreateHospital}
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
            className="sm:col-span-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add Hospital
          </button>
        </form>
      </div>
    </>
  );
};