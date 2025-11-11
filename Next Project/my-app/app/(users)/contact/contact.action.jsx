"use server";

import { redirect } from "next/navigation";

import { createServerClient } from "../../../lib/supabaseServer.js";

export const contactAction = async (previousState, formData) => {
  try {
    // Extract form data
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate required fields
    if (!fullName || !email || !message) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    // Create a fresh Supabase client for server actions using lib/supabaseServer
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
    return { success: true, message: "Form submitted successfully!" };
    // redirect("/")
  } catch (error) {
    // Re-throw redirect errors to allow Next.js to handle them
    if (error.digest?.startsWith("NEXT_REDIRECT")) throw error;
    
    // Enhanced error logging
    console.error("Unexpected error:", error);
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    // Check if it's a fetch/network error
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      return {
        success: false,
        message: "Network error: Unable to connect to database. Please check your internet connection and try again.",
      };
    }
    
    return {
      success: false,
      message: `Unexpected error: ${error.message}`,
    };
  }
};
