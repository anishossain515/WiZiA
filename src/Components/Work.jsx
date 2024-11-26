import React from 'react'
import WorkCard from './Common/WorkCard'
import { WorkData } from './Utilities/Data'

function Work() {
  return (
    <section>

        <div className='py-[120px] px-5 flex flex-wrap items-center justify-center gap-6 max-w-[1500px] mx-auto'>
            {WorkData.map(({img,heading,des},index)=>(
              <WorkCard img={img} heading={heading} des={des} key={index} />
            ))}
        </div>

    </section>
  )
}

export default Work