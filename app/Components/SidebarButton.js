import React from 'react'

const SidebarButton = ( {Icon, value, image} ) => {
  return (
    <div>
        <button className='w-3/4 p-2 my-6 flex justify-start items-center bg-zinc-300 active:translate-y-1 hover:[box-shadow:0_0_5px_8px_#e4e4e7] active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
    transition-all duration-100 [box-shadow:0_6px_0_0_#e4e4e7,0_10px_0_0_#f4f4f5] active:bg-zinc-300 rounded-md'>
      {Icon && !image && <Icon />}
      {image && <img src={image} className='w-7 rounded-full' />}
      <span className='ml-3'>{value}</span>
      </button>
    </div>
  )
}

export default SidebarButton