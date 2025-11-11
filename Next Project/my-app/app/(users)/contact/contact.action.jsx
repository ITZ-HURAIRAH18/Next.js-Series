"use server";

import { redirect } from "next/navigation";

import { createServerClient } from "../../../lib/supabaseServer.js";

export const contactAction = async (previousState, fullName, email, message) => {
  try {
    // Create a fresh Supabase client for server actions
    const supabase = createServerClient();

    // Insert form data into Supabase
    const { data, error } = await supabase
      .from("ContactForm")
      .insert({
        full_name: fullName,
        email: email,
        message: message,
      })
      .select();

    // Handle insertion errors
    if (error) {
      console.error("Error submitting contact form:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Error details:", error.details);
      console.error("Error hint:", error.hint);
      return {
        success: false,
        message: `Error: ${error.message}`,
      };
    }

    // Success response
    // return { success: true, message: "Form submitted successfully!" };
    redirect("/")
  } catch (error) {
    // Re-throw redirect errors to allow Next.js to handle them
    if (error.digest?.startsWith("NEXT_REDIRECT")) throw error;
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: `Unexpected error: ${error.message}`,
    };
  }
};
