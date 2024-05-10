import React from 'react';

interface CardProps {
  icon: JSX.Element;
  title: string;
  content: string;
}

export const ServicesCard: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-center">
        <div className="mr-4">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
};
