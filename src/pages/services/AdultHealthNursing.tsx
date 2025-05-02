import React from 'react';
import ServiceBlogTemplate from './ServiceBlogTemplate';
import { Heart } from 'lucide-react';

const AdultHealthNursing: React.FC = () => {
  return (
    <ServiceBlogTemplate 
      defaultIcon={<Heart className="h-16 w-16" />}
      serviceName="Adult Health Nursing"
      serviceColor="from-blue-600 to-blue-400"
      serviceDescription="Expert resources and academic support for nursing students focusing on adult patient care, medical-surgical nursing, and healthcare innovations."
    />
  );
};

export default AdultHealthNursing; 