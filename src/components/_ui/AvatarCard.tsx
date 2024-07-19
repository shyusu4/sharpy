import React from 'react';

interface CardProps {
  avatarImg: string;
  name: string;
  role: string;
}

export const AvatarCard: React.FC<CardProps> = ({ name, role, avatarImg }) => {
  return (
    <div className="card">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-2xl cursor-pointer">
        <img
          src={avatarImg}
          className="w-full max-w-[18rem] transition duration-300 ease-in-out hover:scale-110"
          alt={name}
        />
      </div>
      <div className="card-content mt-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray text-base">{role}</p>
      </div>
    </div>
  );
};
