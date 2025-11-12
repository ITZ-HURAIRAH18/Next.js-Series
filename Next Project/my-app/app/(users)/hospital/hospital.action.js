"use server";

import { createServerClient } from "@/lib/supabaseServer";
import { revalidatePath } from "next/cache";

export const createHospitalAction = async (data) => {
  try {
    // Initialize Supabase client
    const supabase = createServerClient();
    
    const { name, city, state, department, established_year } = data;

    // Insert data into Supabase
    const { data: insertedData, error } = await supabase
      .from('hospital')
      .insert([
        {
          name,
          city,
          state,
          department,
          established_year // Keep as text since all fields are TEXT type
        }
      ])
      .select(); // Return the inserted data

    if (error) {
      console.error('Supabase error:', error);
      return { 
        success: false, 
        message: `Error while submitting hospital data: ${error.message}` 
      };
    }

    revalidatePath("/hospital");

    return { 
      success: true, 
      message: "Hospital data submitted successfully",
      data: insertedData[0] // Return the inserted hospital data
    };
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;
    console.error('Unexpected error:', error);

    return { 
      success: false, 
      message: "Unexpected error while submitting hospital data" 
    };
  }
};