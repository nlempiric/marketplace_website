import React from 'react'
import { Link } from 'react-router-dom'

const NftDetailButtonComp = ({btnname,to}) => {
  return (
  
        <button className="w-full px-9 py-3 bg-[#050515] border border-1 border-[#050515] text-white rounded-md hover:text-[#050515] hover:bg-transparent ">
            <Link to={to}>{btnname}</Link>
        </button>
    
  )
}

export default NftDetailButtonComp
