import React, { useState } from 'react'
import "../../css/Font.css"
import skillData from "../../datas/skill.json"

const Skill = () => {
  const [Skill, setSkill] = useState(false);

  function setSkillFalse() {
   setSkill(false)
  }

  function setSkillTrue() {
    setSkill(true)
  }

  return (
  <div className='mt-16'>
   <div className='w-56 h-8 border-2 border-blue-400 text-center mx-auto rounded-full grid grid-cols-2 fontDeskripsi'>
        <div className={`${!Skill ? 'bg-blue-400 text-white' : 'bg-white text-black'} rounded-full`}>
            <button className='text-sm/loose' onClick={setSkillFalse}>{'< /> Tech Stack '}</button>
        </div>
        <div className={`${Skill ? 'bg-blue-400 text-white' : 'bg-white text-black'} rounded-full`}>
            <button className='text-sm/loose' onClick={setSkillTrue}>Tools</button>
        </div>
   </div>

  {/* Skill Languange Programming or Tech Stack */}
  <div className='md:grid md:grid-cols-2 md:ml-24'>
   <div className={`${!Skill ? 'block' : 'hidden'} mt-6 grid grid-cols-3 md:grid-cols-5`}>
    {skillData.skill.map(skills => (
      <div className='mx-10 my-3'>
        <div className='rounded-full border h-12 w-12 mx-auto'>
         <img src={skills.imageUrl} className='w-5 my-4 mx-auto'></img>
        </div>
        <h1 className='fontDeskripsi font-semibold text-sm mt-2 text-center'>{skills.nameSkill}</h1>
        <h4 className='fontDeskripsi text-xs text-center'>{skills.level}</h4>
      </div>
    ))}
   </div>
  </div>

  <div className='md:grid md:grid-cols-2 md:ml-24'>
   <div className={`${Skill ? 'block' : 'hidden'} mt-6 grid grid-cols-3 md:grid-cols-4`}>
    {skillData.tools.map(tool => (
      <div className='mx-10 my-3'>
        <div className='rounded-full border h-12 w-12 mx-auto'>
         <img src={tool.imageUrl} className='w-5 my-4 mx-auto'></img>
        </div>
        <h1 className='fontDeskripsi font-semibold text-sm mt-2 text-center'>{tool.nameTools}</h1>
        <h4 className='fontDeskripsi text-xs text-center'>{tool.level}</h4>
      </div>
    ))}
   </div>
  </div>
  
  </div>
  )
}

export default Skill