import React from 'react'
import TrainCard from './TrainCard'

function Train() {

    const trainCardData = ['Quick to ramp','Easy to optimize','Quick to scale up','Works with all your existing tools']

  return (
    <section className='sm:pt-0 pt-6 px-4'>

      <div className='bg-[url(/train.png)] bg-no-repeat bg-cover max-w-[1344px] mx-auto  rounded-2xl bg-clip-border'>
        


        <div className='sm:py-20 py-[32px] px-6 xl:ml-[500px] lg:ml-[400px] md:ml-[200px] sm:ml-24'>

            <h1 className='text-white font-Montserrat md:text-[40px] text-[24px] max-w-[502px]'>Train your aiDR on your... <span className='font-medium italic text-Aqua'>prefered email st|</span></h1>

            <p className='font-light text-white sm:text-2xl text-[18px] sm:max-w-[450px] sm:pt-7 pt-4 max-w-[249px]'>You&apos;re in control. Train your aiDR on elements of your Marketing strategy.</p>

            <div className='flex flex-wrap gap-2 sm:gap-4 max-w-[600px] sm:pt-16 pt-5'> 
             {trainCardData.map((data,index)=>(
               <TrainCard key={index} data={data} />
             ))}
            </div>

        </div>

     </div>
    </section>
  )
}

export default Train