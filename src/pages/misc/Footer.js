import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';


export default function Footer() {
  return (
    <div className='my-4'> 
      <div className='grid grid-cols-2'>
        <div className='grid'>
          <h4>Contact</h4>
          <div className='flex gap-x-2'>
            <a className='flex items-center mt-2' href='/'>
                <p className='text-sm underline'>Twitter</p>
                <FiArrowUpRight />
            </a>
            <a className='flex items-center mt-2' href='/'>
                <p className='text-sm underline'>Dribbble</p>
                <FiArrowUpRight />
            </a>
            <a className='flex items-center mt-2' href='/'>
                <p className='text-sm underline'>Linkedin</p>
                <FiArrowUpRight />
            </a>
          </div>
        </div>
        <div className='grid text-right'>
          <p>I 😍️ feedbacks.</p>
          <div className='flex justify-self-end gap-x-2'>
            <BsStarFill color="lightgray" fontSize="1em" />
            <BsStarFill color="lightgray" fontSize="1em" />
            <BsStarFill color="lightgray" fontSize="1em" />
            <BsStarFill color="lightgray" fontSize="1em" />
            <BsStarFill color="lightgray" fontSize="1em" />
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <h1 className='text-sm'>Original Design by Spike Fuchao Yuan</h1>
        <a className='underline text-sm font-bold' href='https://www.figma.com/community/file/1071188711165074571'>Here the figma</a>
      </div>
    </div>
  )
}
