import React from 'react';

type OverflowHiddenContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const OverflowHiddenContainer: React.FC<OverflowHiddenContainerProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`overflow-hidden ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default OverflowHiddenContainer;