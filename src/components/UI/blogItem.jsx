import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BlogItem({ item }) {
  return (
    <div className="gap-4 items-start overflow-hidden cursor-pointer" key={item.id}>
      <div className="mt-1  shrink-0 flex justify-center">
        <img className=' max-h-[350px]' src={item.image} alt="" />
      </div>
      <div className='pb-3'>
        <p className='py-2 font-normal text-base text-gray-500' > <FontAwesomeIcon icon={faCalendarAlt} className='pr-3 text-lg text-[#214581]'/>12/12/2024</p>
        <h2 className="one-line-paragraph font-bold text-xl  text-[#214581]">{item.title}</h2>{" "}
        <p className="two-line-paragraph !max-w-[100%]  text-[#214581] mt-2 leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}
