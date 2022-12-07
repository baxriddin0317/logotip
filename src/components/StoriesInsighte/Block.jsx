
const Block = ({item, setActiveJson}) => {
  
  // const handleClick = () => {
  //   setActiveJson(item.id);
  // }

  return (
    <div onClick={() => setActiveJson(item.id)} className='flex gap-14 items-center cursor-pointer hover:bg-black/10'>
        <div className='min-w-[214px] h-[151px]'>
            <img className='w-full h-full' src={item.url} alt={item.title} />
        </div>
        <div>
            <h2 className='mb-2.5 text-xl font-bold text-brand-blue-primary'>
                {item.title}
            </h2>
            <span className='text-brand-blue-primary/60'>
            Blog •  Mar 21, 2021
            </span>
        </div>
    </div>
  )
}

export default Block
