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
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <Dialog open={open} onOpenChange={setOpen}>
        {/* Trigger Button */}
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)} className="bg-primary hover:bg-primary/80">
            Open Modal
          </Button>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent className="bg-card text-card-foreground border border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Welcome!</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              This is a ShadCN modal example in Next.js.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => setOpen(false)}
              variant="destructive"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
