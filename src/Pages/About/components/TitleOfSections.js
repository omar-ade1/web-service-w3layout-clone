import React from 'react'

function Title(props) {
  return (
    <div>
      <h2 className='pb-[50px] capitalize text-3xl text-center font-bold text-[#22123f] dark:text-[#eeeeee]'>{props.title}</h2>
    </div>
  )
}

export default Title
