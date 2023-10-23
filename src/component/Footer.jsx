import React from 'react'

const Footer = () => {
  return (
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex justify-between py-6 border-t border-1 border-gray-300 flex-wrap gap-4 ">
      <div className="">
        Copyright © 2022.com, All rights reserved.
      </div>
      <div>
        <ul className="flex gap-4 text-[#505072] flex-wrap ">
        <li>Terms & Condition</li>
        <li>Privacy Policiy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
