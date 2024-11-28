import React, { useEffect} from "react";

function UserInfo({
  des,
  name,
  position,
  totalUsers,
  setCurrentIndex,
  currentIndx,
})
{
useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentIndex((index)=> index === totalUsers - 1 ? 0 : index + 1)
    },3000)
    return ()=> clearInterval(interval)
},[setCurrentIndex,totalUsers])


  return (
    <div className="overflow-hidden flex flex-col items-center justify-center space-y-10 ">
      <img src="/apos.png" alt="apos" className="sm:w-24 sm:h-24 rounded-full" />

      <p className="text-white md:text-[32px] text-[22px] font-light sm:max-w-[950px] max-w-[320px] mx-auto text-center">{des}</p>

      <div>
        <p className="text-Aqua font-semibold sm:text-2xl text-xl text-center">{name}</p>
        <p className="text-[#96ACAF] md:text-[20px] text-sm">{position}</p>
      </div>

      {/* Circle Slider */}

      <div className="space-x-6">
        {Array.from(Array(totalUsers).keys()).map((index) => (
          <button
            key={index}
            onClick={()=>setCurrentIndex(index)}
            className={`size-[10px] rounded-full transition-all duration-300 ${
              index === currentIndx ? "bg-Aqua" : "bg-[#394648]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default UserInfo;
