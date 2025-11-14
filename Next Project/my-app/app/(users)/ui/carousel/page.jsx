"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselExample() {
  const slides = [
    "/Pictures/Hurairah.png",
    "/Pictures/Hurairah.png",
      "/Pictures/Hurairah.png",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-3xl">
        <Carousel className="w-full">
          <CarouselContent>
            {slides.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-72 overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-2xl font-semibold">
                    Slide {index + 1}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
