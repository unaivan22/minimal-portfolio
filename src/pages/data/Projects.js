import React, { Component } from 'react'
import data from './data.json'

import { FiArrowUpRight } from 'react-icons/fi';

class Projects extends Component {
	render() {
		return (
            <div className='grid grid-cols-1 gap-y-12'>
                { data.Proj.map((projectSelected, i) => {
						return (
                            <div className='grid grid-cols-3 gap-x-8'>
                                <div className='grid col-span-2 leading-tight'>
                                    <p className='font-light text-zinc-500 text-xs2'>{projectSelected.year}</p>
                                    <h3 className='font-medium text-zinc-700 text-sm'>{projectSelected.title}</h3>
                                    <p className='font-light text-zinc-500 text-sm'>{projectSelected.desc}</p>
                                    <a className='flex' href='/'>
                                        <p className='text-xs underline'>Try it out</p>
                                        <FiArrowUpRight />
                                    </a>
                                </div>
                                <div className='grid'>
                                    <img src={projectSelected.img} className='w-full aspect-square object-cover' />
                                </div>
                            </div>
						);
					})
				}
            </div>
        );
    }
} 
export default Projects;
