"use server";

import { createClient } from "@supabase/supabase-js";

export const contactAction = async (fullName, email, message) => {
  try {
    // Create a fresh Supabase client for server actions to avoid schema cache issues
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Missing Supabase environment variables");
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
      db: {
        schema: "public",
      },
    });

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
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: `Unexpected error: ${error.message}`,
    };
  }
};
