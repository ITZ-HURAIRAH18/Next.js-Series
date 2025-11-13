"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function DrawerExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <Drawer open={open} onOpenChange={setOpen}>
        {/* Trigger Button */}
        <DrawerTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Open Drawer
          </Button>
        </DrawerTrigger>

        {/* Drawer Content */}
        <DrawerContent className="bg-gray-900 border-t border-gray-700 text-white">
          <DrawerHeader>
            <DrawerTitle className="text-xl">Drawer Panel</DrawerTitle>
            <DrawerDescription className="text-gray-400">
              You can place any content or form inside this drawer.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4">
            <p>This is a ShadCN drawer example in Next.js.</p>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                onClick={() => setOpen(false)}
                className="bg-red-600 hover:bg-red-700"
              >
                Close Drawer
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
