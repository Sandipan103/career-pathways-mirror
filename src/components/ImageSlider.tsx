
import { useRef, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ImageSliderProps {
  images: string[];
  direction: "rtl" | "ltr";
  titles?: string[];
}

const ImageSlider = ({ images, direction, titles = [] }: ImageSliderProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Carousel
      className="w-full max-w-5xl mx-auto my-8 px-4"
      opts={{
        align: "start",
        loop: true,
        direction: direction === "rtl" ? "rtl" : "ltr",
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <img
                    src={image}
                    alt={titles[index] || `Slide ${index + 1}`}
                    className="h-60 w-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
              </HoverCardTrigger>
              {titles[index] && (
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{titles[index]}</h4>
                      <p className="text-sm">
                        Explore more about this program or institution.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              )}
            </HoverCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <CarouselPrevious className="static transform-none mx-2" />
        <CarouselNext className="static transform-none mx-2" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
