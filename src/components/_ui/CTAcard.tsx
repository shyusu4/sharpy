import React from 'react';
import { Link } from '@/components/index';
import { linkRightArrow } from '@/assets/index';

interface CardProps {
  icon: JSX.Element;
  linkText: string;
  content: string;
}

export const CTAcard: React.FC<CardProps> = ({ icon, linkText, content }) => {
  return (
    <div className="card w-[26rem] bg-paste">
      <div className="card-body">
        <p className="text-xl font-semibold">{content}</p>
        <div className="flex items-center justify-between">
          <Link
            isIconVisible={true}
            iconRight={<img src={linkRightArrow.src} alt="Right Arrow" />}
          >
            {linkText}
          </Link>
          <div className="">{icon}</div>
        </div>
      </div>
    </div>
  );
};
