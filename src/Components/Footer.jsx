import React from 'react'
import facebook from '../assets/facebook-brands-solid.svg'
import insta from '../assets/instagram-brands-solid.svg'
import twitter from '../assets/twitter-brands-solid.svg'

const Footer = () => {
  return (
    <div className=" w-11/12 h-28 flex flex-col gap-5 p-4 items-center bg-emerald-100 mt-20">
      <div className=" flex justify-center gap-5">
      <img src={facebook} alt="facebook"   className="w-5" />
      <img src={twitter} alt="twitter"  className="w-5" />
      <img src={insta} alt="instagram" className="w-5" /> 
      </div>
      <h2 className="font-serif text-lg ">All rights reserved with Books.com </h2>
    </div>
  )
}

export default Footer
