import { createServerClient } from "@/lib/supabaseServer";
import Link from "next/link";

const HospitalListPage = async () => {
  // Initialize Supabase client
  const supabase = createServerClient();
  
  // Fetch hospital data from Supabase
  const { data: hospitalsData, error } = await supabase
    .from('hospital')
    .select('*')
    .order('id', { ascending: true }); // Order by id
  
  if (error) {
    console.error('Error fetching hospitals:', error);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">🏥 Hospital Directory</h1>
        <Link 
          href="/hospital2.0/HospitalForm"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          ➕ Add New Hospital
        </Link>
      </div>

      {/* Table of Records */}
      {hospitalsData && hospitalsData.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h3 className="text-lg font-semibold text-gray-800">
              📋 Hospital Records ({hospitalsData.length})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">#ID</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">City</th>
                  <th className="py-3 px-6 text-left">State</th>
                  <th className="py-3 px-6 text-left">Department</th>
                  <th className="py-3 px-6 text-left">Established</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {hospitalsData.map((hospital) => (
                  <tr
                    key={hospital.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{hospital.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{hospital.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{hospital.city}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{hospital.state}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{hospital.department}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{hospital.established_year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {hospitalsData && hospitalsData.length === 0 && (
        <div className="text-center p-12 bg-gray-50 rounded-lg">
          <div className="text-8xl mb-4">🏥</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Hospitals Found</h3>
          <p className="text-gray-500 mb-6">Start building your hospital directory by adding the first hospital.</p>
          <Link 
            href="/hospital2.0/HospitalForm"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add First Hospital
          </Link>
        </div>
      )}
    </div>
  );
};

export default HospitalListPage;