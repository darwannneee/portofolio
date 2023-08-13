import '../../css/App.css';
import '../../css/Font.css'
import React, { useState } from 'react'

function Navbar() {
    const [Open, setOpen] = useState(false);

    const handleOpneChange = async () => {
        setOpen(!Open);
    };

    console.log(Open);

  return (
    <nav className=''>
        <div className='py-6 px-6 md:px-12 md:flex justify-between'>
            <div className='flex justify-between'>
                <h1 className='fontNavbar text-2xl md:text-4xl'>Darwan</h1>

                {/* Svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${Open ? 'hidden' : 'block'} md:hidden`} onClick={handleOpneChange} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${Open ? 'block' : 'hidden'} md:hidden`} onClick={handleOpneChange} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </div>
            
            <div className={`${Open ? 'block' : 'hidden'} md:text-center md:flex`}>
                <h4 className='md:mx-6'>Tentang Saya</h4>
                <h4 className='md:mx-6'>Skill</h4>
            </div>

            <div className={`${Open ? 'block' : 'hidden'} md:text-center md:flex`}>
                <button className='bg-blue-400 w-28 h-7 rounded-full'>Reach Me.</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;