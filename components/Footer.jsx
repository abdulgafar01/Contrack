import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t bg-white">
        <div className="p-5 text-center">
            {currentYear}  contrack.All Rights reserved
        </div>
      
    </footer>
  )
}

export default Footer
