import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Link } from '@/components/index';
import { linkRightArrow } from '@/assets/index';

const CTAcardStyles = cva('card w-[26rem] h-52 rounded-lg', {
  variants: {
    intent: {
      yellow: 'bg-yellow',
      blue: 'bg-paste',
      pink: 'bg-pink',
    },
  },
  defaultVariants: {
    intent: 'yellow',
  },
});

interface CardProps extends VariantProps<typeof CTAcardStyles> {
  intent: 'yellow' | 'blue' | 'pink';
  icon: JSX.Element;
  linkText: string;
  content: string;
}

export const CTAcard: React.FC<CardProps> = ({
  icon,
  linkText,
  content,
  intent,
}) => {
  return (
    <div className={CTAcardStyles({ intent })}>
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
