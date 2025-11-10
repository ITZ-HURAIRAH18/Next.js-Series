import { notFound } from "next/navigation";
import { Mail, Phone, Calendar, User, MapPin, Award } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";


export async function generateStaticParams() {
  const { data: students, error } = await supabase
    .from("Student")
    .select("id");

  if (error || !students) {
    return [];
  }

  return students.map((student) => ({
    id: student.id.toString(),
  }));
}
export default async function SingleStudent({ params }) {
  const resolvedParams = await params;
  const studentIdParam = resolvedParams?.id;
  const studentId = Number(studentIdParam);

  if (!studentIdParam || Number.isNaN(studentId)) {
    console.error("Invalid student id:", studentIdParam);
    return notFound();
  }

  // Fetch a single student by ID
  const { data: student, error } = await supabase
    .from("Student")
    .select("*")
    .eq("id", studentId)
    .single(); // Ensures only one record is returned

  if (error || !student) {
    console.error("Error fetching student:", error?.message);
    return notFound();
  }

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("")
      .toUpperCase();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
              {getInitials(student.name)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{student.name}</h2>
              {student.course && (
                <p className="text-blue-100 text-sm">{student.course}</p>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-3 text-gray-600">
            {student.email && (
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{student.email}</span>
              </div>
            )}

            {student.phone && (
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-sm">{student.phone}</span>
              </div>
            )}

            {student.address && (
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
                <div className="text-sm">{student.address}</div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100"></div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <div>
                <div className="text-xs text-gray-500">Grade</div>
                <div className="text-sm font-medium">{student.grade}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-purple-500" />
              <div>
                <div className="text-xs text-gray-500">Age</div>
                <div className="text-sm font-medium">{student.age}</div>
              </div>
            </div>
          </div>

          {student.joined_at && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-indigo-500" />
                <div>
                  <div className="text-xs text-gray-500">Joined</div>
                  <div className="text-sm font-medium">
                    {formatDate(student.joined_at)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 px-6 py-3 text-xs text-gray-500">
          ID: {student.id}
        </div>
      </div>
    </div>
  );
}
