import React from 'react'

const MainBlock = ({item}) => {
  const {title, url} = item
  console.log(title);
  return (
    <div className='relative h-[508px] rounded-lg overflow-hidden cursor-pointer group'>
      <img className='w-full h-full group-hover:rotate-3 group-hover:scale-125 transition-transform' src={url} alt={title} />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
      <div className='absolute inset-0 right-14 left-14 text-white translate-y-[80%] group-hover:translate-y-10 transition-all duration-500'>
        <h2 className='font-bold text-xl mb-2'>
            {title}
        </h2>
        <span className='text-white/75'>
            Charity Offer •  Mar 21, 2021
        </span>
        <p className='mt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque veniam accusamus ducimus. Delectus et eaque aliquam sit consectetur. Molestias officia aliquam doloribus exercitationem, quibusdam quam optio odit eum provident sunt pariatur quis iure corrupti quod velit, consectetur temporibus natus, ipsam nostrum! Doloribus porro adipisci laboriosam aspernatur quo molestias enim!
        </p>
      </div>
    </div>
  )
}

export default MainBlock
