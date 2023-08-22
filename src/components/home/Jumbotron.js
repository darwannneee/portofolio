import React from 'react'
import "../../css/App.css"
import "../../css/Font.css"
import GithubLogo from "../../assets/img/home/github.png"
import PotoProfile from "../../assets/img/home/darwan.jpg"

function Jumbotron() {
  
  return (
    <div className='mx-8 my-6 md:mx-20 md:my-12 md:grid md:grid-cols-2'>
      <div>
      <div class="w-max">
    <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 text-blue-400 text-xl md:text-2xl fontTitle">BackEnd Developer</h1>
  </div>
        <h1 className='fontJudulJumbotron text-4xl md:text-6xl'>Hi, <br />I'm Darwan</h1>
        <smal className='fontDeskripsi text-xs/loose md:text-base/loose'>Hi, my name is Darwan, I'm currently studying S1 Informatics Engineering. For now i'm living in the City of Bandung.</smal>

        <div className='flex mt-2'>
          <img src={GithubLogo} className='w-4 md:w-5' alt='Github Logo'></img>
        </div>

        <button className="rounded-full text-white bg-blue-400 w-36 h-7 text-md font-semibold fontdeskripsiNavbar mt-4 hover:shadow-md md:h-9 md:w-36">Reach Me.</button>
      </div>
      <div className=''>
        <img src={PotoProfile} className='rounded-full w-72 mt-14 mx-auto md:w-80 md:mt-0' alt='Darwan'></img>
      </div>
    </div>
    
  )
}

export default Jumbotron;