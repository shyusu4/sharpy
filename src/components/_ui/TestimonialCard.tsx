import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { star } from '@/assets/index';

const testimonialCardStyles = cva('card w-96 lg:w-[26rem]', {
  variants: {
    intent: {
      yellow: 'bg-yellow',
      blue: 'bg-paste',
      lightPink: 'bg-lightPink',
      pink: 'bg-pink',
      lightGreen: 'bg-lightGreen',
    },
  },
  defaultVariants: {
    intent: 'yellow',
  },
});

interface CardProps extends VariantProps<typeof testimonialCardStyles> {
  intent: 'yellow' | 'blue' | 'pink' | 'lightPink' | 'lightGreen';
  icon: JSX.Element;
  author: string;
  review: string;
}

export const TestimonialCard: React.FC<CardProps> = ({
  icon,
  author,
  review,
  intent,
}) => {
  return (
    <div className={testimonialCardStyles({ intent })}>
      <div className="card-body">
        <p className="text-xl font-medium leading-8 pb-6 border-b-2 border-white">
          {review}
        </p>
        <div className="flex items-center justify-center gap-4 pt-5">
          <div className="avatar">
            <div className="w-20 rounded-full">{icon}</div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold">{author}</h4>
            <div className="flex justify-between w-28">
              <img src={star.src} alt="star" />
              <img src={star.src} alt="star" />
              <img src={star.src} alt="star" />
              <img src={star.src} alt="star" />
              <img src={star.src} alt="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
