import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="relative h-[600px] rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d623238.0881181836!2d-77.66651263229291!3d38.9730778758289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cbf9ba8f291d%3A0x3a5c9c2a9e67d35a!2sDMV%20area!5e0!3m2!1sen!2sus!4v1708457405537!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Service Area Map"
        className="absolute inset-0"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none border-4 border-[#FF204E] rounded-xl"></div>
    </div>
  );
};

export default Map;