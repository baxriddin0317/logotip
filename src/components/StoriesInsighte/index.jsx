// import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Block from './Block'
import MainBlock from './MainBlock'

export const StorieInsighte = () => {
    const [jsonArray, setJsonArray] = useState([]);
    const [activeJson, setActiveJson] = useState(1);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setJsonArray(data.slice(0,4)))
    }, []);
    
  return (
    <section className='py-24'>
        <div className="container mx-auto px-7">
            <div className='flex justify-between mb-12'>
                <h2 className='text-brand-blue-primary font-bold text-2xl whitespace-nowrap md:text-4xl'>
                    Our latest stories and insights
                </h2>
                <Link className='underline text-brand-orange-primary whitespace-nowrap' href={'#'}>
                    Let us inspire you
                </Link>
            </div>
            <div className='grid grid-cols-2 gap-16'>
                {jsonArray.filter((item) => item.id === activeJson).map((item) => (
                    <MainBlock key={item.id} item={item} />
                ))}
                <div className='flex flex-col gap-y-7'>
                    {jsonArray.filter((item) => item.id !== activeJson).map((item) => (
                        <Block setActiveJson={setActiveJson} item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
