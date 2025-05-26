import React from 'react';

interface LinkAppProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  name: string;
  target?: '_self' | '_blank';
  rel?: string;
}

const LinkApp = ({
  link,
  name,
  target = '_self',
  rel = 'noopener noreferrer', // Default for security best practice
  ...rest
}: LinkAppProps) => {
  // Only set rel attribute when target is _blank for security
  const safeRel = target === '_blank' ? rel : undefined;

  return (
    <a
      className="font-semibold text-sm text-gray-400"
      href={link}
      target={target}
      rel={safeRel}
      {...rest}
    >
      {name}
    </a>
  );
};

export default LinkApp;