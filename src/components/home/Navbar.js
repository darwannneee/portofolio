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
        <div className='py-6 px-6 justify-between items-center md:flex md:py-2 md:px-12 '>
            <div className='flex justify-between'>
                <h1 className='fontNavbar text-2xl md:text-4xl'>Darwan.</h1>

                {/* Svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${Open ? 'hidden' : 'block'} md:hidden`} onClick={handleOpneChange} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${Open ? 'block' : 'hidden'} md:hidden`} onClick={handleOpneChange} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </div>
            
            <div className={`${Open ? 'block' : 'hidden'} py-2 flex-col justify-between w-full md:flex-row md:flex md:items-center`}>
                <div className="flex flex-col md:flex-row mx-auto">
                    <a href="#aboutMe" className="text-black block py-2 md:text-1xl md:px-16 fontdeskripsiNavbar">About Me</a>
                    <a href="#skill" className="text-black block py-2 md:text-1xl md:px-16 fontdeskripsiNavbar">Skill</a>
                    <a href="#project" className="text-black block py-2 md:text-1xl md:px-16 fontdeskripsiNavbar">Project</a>
                </div>
                <div className="py-3">
                    <button className="rounded-full text-white bg-blue-400 w-36 text-md font-semibold fontdeskripsiNavbar hover:shadow-md md:h-9 md:w-36">Reach Me.</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;