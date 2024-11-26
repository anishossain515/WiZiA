import React from 'react'

function WorkCard({img,heading,des}) {
  return (
    <div className='max-w-[384px]'>
        <img src={img} alt="workImg"/>
        <h1 className='md:text-[28px] text-[22px] text-white font-Montserrat font-semibold pt-6'>{heading}</h1>
        <p className='sm:text-[22px] text-base font-light text-white max-w-[384px] pt-4'>{des}</p>
    </div>
  )
}

export default WorkCard