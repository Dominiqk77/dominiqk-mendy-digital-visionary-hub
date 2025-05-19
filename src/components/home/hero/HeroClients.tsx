
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroClients = () => {
  return (
    <div className="flex items-center justify-center mt-8 sm:mt-12">
      <div className="flex -space-x-4">
        <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 1" loading="eager" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 2" loading="eager" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1580518337843-f959e992563b?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 3" loading="eager" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 4" loading="eager" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 5" loading="eager" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-white text-sm ml-2">
        <span className="font-semibold text-portfolio-purple shimmer-text">Solutions Digitales Pro</span> disponibles dès maintenant
      </p>
    </div>
  );
};

export default HeroClients;
