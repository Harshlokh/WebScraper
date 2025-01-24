import React, { useState } from "react";

const NavbarCompo = () => {

    const [showEmail, setShowEmail] = useState(false);


  return (
    <div className='flex bg-blue-300 py-5 font-bold justify-center gap-5 mb-5 items-center'>
      <a href=''>  <p className='hover:underline decoration-2'>Home</p>     </a>
      <a href='https://www.linkedin.com/in/harshlokhande486/'>  <p className='hover:underline decoration-2'>About Me</p></a>
      <span
        className="text-md font-bold cursor-pointer "
        onMouseEnter={() => setShowEmail(true)}
        onMouseLeave={() => setShowEmail(false)}
      >
        {showEmail ? "harshlokhande486@gmail.com" : "Email"}
      </span>        
    </div>
  )
}

export default NavbarCompo
