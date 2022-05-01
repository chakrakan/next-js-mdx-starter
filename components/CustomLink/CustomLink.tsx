import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import NextLink from "next/link";

type CustomLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default function CustomLink({
  href,
  className,
  children,
  ...rest
}: CustomLinkProps) {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a className={`${className}`} {...rest}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      className={`${className}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
}
