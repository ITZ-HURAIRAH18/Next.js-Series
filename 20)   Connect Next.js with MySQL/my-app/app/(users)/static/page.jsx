import { supabase } from '@/lib/supabaseClient'

export default async function StudentPage() {
  // ✅ Fetch all rows from Student table
  const { data: students, error } = await supabase
    .from('Student')
    .select('id, created_at, name')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching students:', error.message)
    return <p className="text-red-600">Error: {error.message}</p>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Student Records</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-2/3">
        {students && students.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border-b p-2">ID</th>
                <th className="border-b p-2">Name</th>
                <th className="border-b p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="border-b p-2">{student.id}</td>
                  <td className="border-b p-2">{student.name}</td>
                  <td className="border-b p-2">
                    {new Date(student.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found.</p>
        )}
      </div>
    </div>
  )
}
