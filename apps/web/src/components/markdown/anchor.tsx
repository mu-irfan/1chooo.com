import React, { ReactNode } from 'react';

interface AnchorProps {
  children?: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: any; // To allow any additional props
}

const Anchor: React.FC<AnchorProps> = ({ children, ...props }) => {
  const isEmpty = !children ||
    (Array.isArray(children) && children.length === 0) ||
    (typeof children === 'string' && children.trim().length === 0) ||
    (React.Children.count(children) === 0);

  if (isEmpty) {
    return null;
  }

  return (
    <a
      className="code-highlight-yellow"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default Anchor;