import React, { Component } from 'react'
import data from './data.json'

import { FiArrowUpRight } from 'react-icons/fi';

class Articles extends Component {
	render() {
		return (
            <div className='grid grid-cols-1 gap-y-8'>
                { data.Articles.map((articleSelected, i) => {
						return (
                            <a href='/'>
                                <p className='font-light text-zinc-500 text-xs2'>{articleSelected.year}</p>
                                <h3 className='font-medium text-zinc-700 text-sm'>{articleSelected.year}</h3>
                                <p className='font-light text-zinc-500 text-sm'>{articleSelected.desc}</p>
                            </a>
						);
					})
				}
            </div>
        );
    }
} 
export default Articles;
