import React from 'react'


import Navbar from './misc/Navbar'
import Projects from './data/Projects';
import Articles from './data/Articles';
import Footer from './misc/Footer';


import { FiArrowUpRight } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto sm:px-24 md:px-32 xl:px-80 lg:px-80 mt-32 grid gri-col-1 gap-y-24">
        <section className='grid grid-col-1 gap-y-4'>
            <img src='assets/homeAvatar.png' />
            <h2 className='font-medium text-zinc-700 text-lg'>I craft interfaces</h2>
            <p className='font-light text-zinc-500 text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <a className='flex' href='/'>
                <p className='text-xs underline'>Take me to the magic land </p>
                <FiArrowUpRight />
            </a>
        </section>

        <section>
            <h3 className='font-medium text-zinc-700 text-sm mb-12'>Selected projects</h3>

            <Projects />

            <a className='flex items-center mt-6' href='/'>
                <p className='text-sm'>View all projects</p>
                <FiArrowRight />
            </a>
        </section>

        <section>
            <h3 className='font-medium text-zinc-700 text-sm mb-12'>Articles</h3>

            <Articles />

            <a className='flex items-center mt-6' href='/'>
                <p className='text-sm'>View all articles</p>
                <FiArrowRight />
            </a>
        </section>

        <section>
            <div className='grid grid-cols-3 gap-x-4 rounded-xl bg-zinc-100 p-8'>
                <div className='grid col-span-2'>
                    <h2 className='font-medium text-zinc-700 text-sm'>Join my newsletter</h2>
                    <p className='font-light text-zinc-500 text-sm'>I regularly share my professional or personal updates on substack! </p>
                    <div className='flex gap-x-2 mt-2'>
                        <input class="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email address" />
                        <button class="bg-white text-black font-light py-2 px-4 rounded-xl">Subscribe</button>
                    </div>
                </div>
                <div className='grid'>
                    <img src='assets/newsletter.png' className=' aspect-square object-cover' />
                </div>
            </div>
        </section>

        <Footer />
      
      </div>
    </div>
  )
}
