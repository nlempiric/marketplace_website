import React, { useState } from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import { PiCaretUpBold } from 'react-icons/pi'

const Dropdown = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Create
        <span>{isHovered ? <PiCaretUpBold/> : <PiCaretDownBold/>}</span>
      {isHovered && (
        <div className="absolute top-full z-50 left-0 bg-black border border-gray-300 p-2 shadow-md">
          <ul>
            <li>Mint</li>
            <li>Transfer</li>
            <li>Update</li>
          </ul>
        </div>
      )}
      </div>

    </div>
  )
}

export default Dropdown
