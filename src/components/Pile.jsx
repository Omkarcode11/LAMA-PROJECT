import React from 'react'

function Pile({selected,i=1,text='Sample'}) {


  return (
    <div className={`flex items-center ${selected && 'bg-purple-600'} ${ selected?"text-white":'text-black'} rounded-full px-4 py-2 my-2 ${!selected && 'hover:bg-[#cec7d9]'} cursor-pointer`}>
      <div className={`${selected?'bg-purple-900':'bg-[#bbb1cb]'} rounded-full w-8 h-8 flex items-center justify-center`}>
        <span className="text-sm">{i}</span>

      </div>
      <div>
      <span className="ml-2 text-sm font-medium">{text}</span>
      </div>
    </div>
  )
}

export default Pile