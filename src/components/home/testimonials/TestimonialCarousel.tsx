
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  testimonials: any[];
  autoPlay: boolean;
  isPaused: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TestimonialCarousel = ({ 
  testimonials, 
  autoPlay, 
  isPaused,
  onMouseEnter,
  onMouseLeave
}: TestimonialCarouselProps) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (!api || !autoPlay || isPaused) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, autoPlay, isPaused]);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  
  return (
    <div 
      className="max-w-6xl mx-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Carousel
        setApi={setApi}
        className="w-full relative"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="absolute -left-12 top-1/2 bg-black/40 border-portfolio-purple/30 hover:bg-black/60 text-white" />
          <CarouselNext className="absolute -right-12 top-1/2 bg-black/40 border-portfolio-purple/30 hover:bg-black/60 text-white" />
        </div>
      </Carousel>
      
      {/* Indicator dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current 
                ? "bg-gradient-to-r from-portfolio-purple to-portfolio-blue w-6" 
                : "bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
