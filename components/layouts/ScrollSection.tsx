import React from 'react'

type ScrollSectionProps = {
  children: React.ReactNode
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  return (
      <div className="scroll-section">
        {children}
      </div>
    );
}

export default ScrollSection