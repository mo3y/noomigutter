import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="relative h-[600px] rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/d/u/3/embed?mid=1_jsbZ61wujjHM6vMJymJeXVqboTE2rg&ehbc=2E312F" width="100%" height="100%"
        
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Service Area Map"
        className="absolute inset-0"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none border-4 border-[#FF204E] rounded-xl"></div>
    </div>
  );
};

export default Map;
