import React from 'react'

const UserCardComponent = (props) => {
  return (
    <div className=' mt-20 inline-block justify-center  shadow-2xl rounded-2xl w-72 h-auto mx-5 cursor-pointer bg-white hover:drop-shadow-2xl hover:scale-110 hover:border-orange'>
      
      <div className='mx-auto w-65 font-bold text-center text-xl text-dark_gray mt-10'>{props.content1}</div>
      <div className='mx-auto w-65 font-normal text-center text-base text-dark_gray mt-5'>{props.conten5} </div>
      <div className='mx-auto w-65 font-normal text-center text-base text-dark_gray ml-10 mr-10'>{props.content5}</div>
      <div className='mx-auto w-65 font-normal text-center text-5xl text-dark_gray mt-5'>{props.content3}</div>
      <div className='mx-auto w-65 font-normal  text-center text-xs text-zinc-600 text-dark_gray mt-1'>{props.content4}</div>

        <a className='block rounded-md font-medium  text-center text-sm text-orange border-orange hover:bg-orange hover:text-[#FFFFFF] border-2 w-28 h-9 py-1.5 px-4 mt-7 mb-12 mx-auto' href={props.url}>
          Buy Now
        </a>
    </div>
  )
}

export default UserCardComponent;