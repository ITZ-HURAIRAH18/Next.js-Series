"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-10 space-y-4">
      
      <Button
        onClick={() =>
          toast.success("User created successfully!")
        }
      >
        Success Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() =>
          toast.error("Login failed. Try again!")
        }
      >
        Error Toast
      </Button>

      <Button
        onClick={() =>
          toast("Custom Toast", {
            description: "This is a custom toast with action!",
            action: {
              label: "Click Me",
              onClick: () => toast.info("Button clicked!"),
            },
          })
        }
      >
        Custom Toast
      </Button>
    </div>
  );
}
