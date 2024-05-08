import { ComponentProps } from 'react';
import Link from 'next/link';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;
export interface Props extends ButtonOrLinkProps {}

/**
 * Polymorphic component that renders either a button or a link,
 * depending on if the `href` prop is passed.
 */

export function ButtonOrLink({ href, ...props }: Props) {
  const isLink = typeof href !== 'undefined';
  const ButtonOrLink = isLink ? 'a' : 'button';

  let content = <ButtonOrLink {...props} />;

  if (isLink) {
    return (
      <Link href={href} legacyBehavior>
        {content}
      </Link>
    );
  }

  return content;
}
