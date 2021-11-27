import * as React from 'react';

export const Dropdown = ({ children, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <button
      className={className}
      aria-haspopup="true"
      type="button"
      aria-expanded={isOpen}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen: isOpen,
        })
      )}
    </button>
  );
};
