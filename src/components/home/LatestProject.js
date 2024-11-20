import React from 'react'

const LatestProject = () => {
  return (
   <div className='mt-10'>
      <h1 className='text-blue-400 fontJudulJumbotron text-center text-2xl'>Latest Project</h1>

      <h1 className='text-xs/loose fontDeskripsi mt-2 text-center'>Designed and built a visually appealing website for a creative agency, focusing on an intuitive user experience and striking visuals. </h1>

      <div className='mx-16 mt-6 grid md:grid-cols-3 gap-y-5'>
        <div className='w-72 md:w-96 rounded-lg'>
          <a href='https://ecoute.id'>
            <img src='https://rfvazcvvtrgdknkonewo.supabase.co/storage/v1/object/public/ecoute/Website/Ecoute/Ecoute.png?t=2024-11-20T06%3A39%3A05.702Z' />
              <div>
                <h1 className='text-center text-xl font-bold fontTitle pt-3'>Ecoute Agency</h1>
                <h1 className='fontdeskripsiNavbar text-center'>2024</h1>
              </div>
          </a>
        </div>
        <div className='w-72 md:w-96 rounded-lg'>
          <a href='https://hanjagroup.com/'>
            <img src='https://rfvazcvvtrgdknkonewo.supabase.co/storage/v1/object/public/ecoute/Website/HanjaGroup/HanjaGroup.png' />
              <div>
                <h1 className='text-center text-xl font-bold fontTitle pt-3'>Hanja Group</h1>
                <h1 className='fontdeskripsiNavbar text-center'>2024</h1>
              </div>
          </a>
        </div>
        <div className='w-72 md:w-96 rounded-lg'>
          <a href='https://exsaverse.io'>
            <img src='https://rfvazcvvtrgdknkonewo.supabase.co/storage/v1/object/public/ecoute/Website/Landing-Exsaverse/Landing-Exsaverse.png' />
              <div>
                <h1 className='text-center text-xl font-bold fontTitle pt-3'>Exsaverse Maintence</h1>
                <h1 className='fontdeskripsiNavbar text-center'>2024</h1>
              </div>
          </a>
        </div>
        <div className='w-72 md:w-96 rounded-lg'>
          <a href='#'>
            <img src='https://rfvazcvvtrgdknkonewo.supabase.co/storage/v1/object/public/ecoute/Website/WeddingOnline/WeddingOnline.png' />
              <div>
                <h1 className='text-center text-xl font-bold fontTitle pt-3'>Wedding Online</h1>
                <h1 className='fontdeskripsiNavbar text-center'>2024</h1>
              </div>
          </a>
        </div>
        <div className='w-72 md:w-96 rounded-lg'>
          <a href='https://toodzy.vercel.app/'>
            <img src='https://rfvazcvvtrgdknkonewo.supabase.co/storage/v1/object/public/ecoute/Website/ToodyzNFT/ToodzyNft.png?t=2024-11-20T06%3A52%3A35.187Z' />
              <div>
                <h1 className='text-center text-xl font-bold fontTitle pt-3'>ToodzyNFT</h1>
                <h1 className='fontdeskripsiNavbar text-center'>2023</h1>
              </div>
          </a>
        </div>
      </div>
   </div>
  )
}

export default LatestProject