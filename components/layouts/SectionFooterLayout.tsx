import React from 'react'
import Footer from '@/components//Footer'

type  SectionFooterLayoutProps = {
  children: React.ReactNode
}

const SectionFooterLayout: React.FC<SectionFooterLayoutProps> = ({ children }) => {
  return (
    <div className={`reveal-container`}>
      <div className="scroll-reveal">
        {children}
      </div>
    </div>
  )
}

export default SectionFooterLayout