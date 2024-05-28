import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

const linkStyles = cva('flex items-center justify-between gap-2', {
  variants: {
    intent: {
      primary: '',
      secondary: '',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof linkStyles> {}

export const Link = ({
  intent,
  isIconVisible = false,
  iconLeft,
  iconRight,
  ...props
}: Props) => {
  return (
    <ButtonOrLink className={linkStyles({ intent })} {...props}>
      {isIconVisible && iconLeft}
      {props.children}
      {isIconVisible && iconRight}
    </ButtonOrLink>
  );
};
