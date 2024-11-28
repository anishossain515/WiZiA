import React from 'react'
import { RestData } from './Utilities/Data'

function Rest() {
  return (
    <section className='sm:pt-0 pt-[60px] px-6  max-w-[1400px] mx-auto'>
        
        <div className='bg-[url(/rest.png)] bg-no-repeat bg-cover bg-center rounded-2xl bg-clip-border'>

        <div className='sm:py-[69px] py-14 md:px-[72px] sm:px-14 px-8'>
         <h1 className='font-Montserrat font-semibold md:text-[32px] text-[24px] text-white sm:max-w-[591px] max-w-[279px]'>Allocate effort where your reps make an inpact.</h1>
         <h3 className='text-Aqua font-Montserrat font-medium italic md:text-[32px] sm:text-2xl text-[18px] pt-[9px]'>Let us handle the rest.</h3>
         <p className='text-white font-light sm:text-[20px] max-w-[582px] pt-[17px]'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>

         <div className='max-w-[700px] flex flex-wrap gap-[32px] md:pt-[94px] sm:pt-20 pt-10'>
           {RestData.map(({percent,des},index)=>(
             <div key={index} className='max-w-[194px]'>
               <p className='text-Aqua font-Montserrat font-bold md:text-[40px] sm:text-[34px] text-[25px]'>{percent}</p>
                <p className='text-[#E9EEF1] font-Montserrat font-medium sm:text-[20px]'>{des}</p>
             </div>
           ))}
         </div>

        </div>  

        </div>

    </section>
  )
}

export default Rest