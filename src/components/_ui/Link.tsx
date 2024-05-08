import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

const linkStyles = cva('font-medium', {
  variants: {
    intent: {
      primary: '',
      secondary: '',
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
    VariantProps<typeof linkStyles> {}

export function Link({ intent, iconVisible, ...props }: Props) {
  return (
    <ButtonOrLink className={linkStyles({ intent, iconVisible })} {...props} />
  );
}
