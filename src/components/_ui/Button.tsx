import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = cva('relative px-8 py-2 rounded-full font-medium', {
  variants: {
    intent: {
      primary:
        'text-white bg-secondary isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-pink-200 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-300',
      secondary:
        'bg-transparent border border-primary isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary hover:border-secondary hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-300',
    },
    iconVisible: {
      true: '',
    },
  },
  defaultVariants: {
    intent: 'primary',
    iconVisible: false,
  },
});

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ intent, iconVisible, ...props }: Props) {
  return (
    <ButtonOrLink
      className={buttonStyles({ intent, iconVisible })}
      {...props}
    />
  );
}
