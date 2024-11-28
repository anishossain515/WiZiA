import React from 'react'

function TrainCard({data}) {
  return (
    <div className='flex items-center gap-2.5'>
        <img src="/check.png" alt="checkMark" />
        <p className='text-[#14BCB2] font-medium text-xl'>{data}</p>
    </div>
  )
}

export default TrainCard