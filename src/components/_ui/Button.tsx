import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = cva('btn md:btn-lg relative rounded-full', {
  variants: {
    intent: {
      primary:
        'text-white bg-secondary isolation-auto z-10 before:absolute before:w-full before:transition-all before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-deepPink before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700',
      secondary:
        'btn-outline bg-transparent border border-primary isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary hover:border-secondary hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-300',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export const Button = ({
  intent,
  isIconVisible = false,
  iconLeft,
  iconRight,
  ...props
}: Props) => {
  return (
    <ButtonOrLink className={buttonStyles({ intent })} {...props}>
      {isIconVisible && iconLeft}
      {props.children}
      {isIconVisible && iconRight}
    </ButtonOrLink>
  );
};
