import React from 'react';

interface CardProps {
  icon: JSX.Element;
  title: string;
  content: string;
}

export const ServicesCard: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="card w-96 bg-lightPink border-2 border-primary shadow-solid rounded-lg p-6">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center lg:items-start">
        <div>{icon}</div>
        <div className="flex flex-col flex-1 text-center lg:text-left">
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-2">{content}</p>
        </div>
      </div>
    </div>
  );
};
