"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <Dialog open={open} onOpenChange={setOpen}>
        {/* Trigger Button */}
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)} className="bg-blue-600 hover:bg-blue-700">
            Open Modal
          </Button>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent className="bg-gray-900 text-white border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Welcome!</DialogTitle>
            <DialogDescription className="text-gray-400">
              This is a ShadCN modal example in Next.js.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => setOpen(false)}
              className="bg-red-600 hover:bg-red-700"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
