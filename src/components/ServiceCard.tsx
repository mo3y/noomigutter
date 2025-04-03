import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, image }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-[#FF204E]">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;