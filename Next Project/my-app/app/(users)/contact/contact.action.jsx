"use server";

import { supabase } from "@/lib/supabaseClient";

export const contactAction = async (fullName, email, message) => {
  try {
    // Insert form data into Supabase
    const { error } = await supabase.from("ContactForm").insert([
      {
        full_name: fullName,
        email: email,
        message: message,
      },
    ]);

    // Handle insertion errors
    if (error) {
      console.error("Error submitting contact form:", error.message);
      return { success: false, message: "Error while submitting form." };
    }

    // Success response
    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { success: false, message: "Unexpected error occurred." };
  }
};
