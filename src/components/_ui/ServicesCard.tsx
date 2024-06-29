import React from 'react';

interface CardProps {
  icon: JSX.Element;
  title: string;
  content: string;
}

export const ServicesCard: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="card w-fit xl:w-[26rem] h-fit bg-lightPink border-2 border-primary shadow-solid rounded-lg p-6">
      <div className="flex flex-col xl:flex-row gap-5 items-center justify-center xl:items-start">
        <div>{icon}</div>
        <div className="flex flex-col flex-1 text-center xl:text-left">
          <h4 className="font-semibold text-2xl">{title}</h4>
          <p className="mt-2 text-base">{content}</p>
        </div>
      </div>
    </div>
  );
};
