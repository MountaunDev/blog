import React from 'react'
import { WiAlien } from "react-icons/wi";

const HeaderLogo = () => {
  return (
    <div className='flex items-center justify-center'>
      <WiAlien size={70}/>
      <h3>Mountain Dev</h3>
    </div>
  )
}

export default HeaderLogo