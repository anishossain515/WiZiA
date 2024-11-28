import { Button } from '@nextui-org/react'
import React from 'react'
import { BtnArrow } from './Utilities/Icons'
import Btn from './Common/Btn'

function NewEra() {
  return (
    <section>
        <div className='md:py-[96px] sm:py-20 py-14 px-6 max-w-[1400px] mx-auto text-center'>
            <p className='text-Aqua font-Montserrat sm:text-[20px] text-sm'>GET STARTED</p>
            <h1 className='text-[36px] font-Montserrat font-bold italic text-white max-w-[327px] sm:max-w-[800px] mx-auto'>Embrace the new era of outbound.</h1>
            <p className='font-light sm:text-[20px] text-[18px] text-white pt-[23px] max-w-[600px] mx-auto'>Wizia lets you train, activate, and optimize aiDRs. 
            Take your outbound to new levels of performance and efficiency.</p>
            <Btn/>
        </div>
    </section>
  )
}

export default NewEra