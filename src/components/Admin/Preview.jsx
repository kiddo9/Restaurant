


const Preview = ({name, price, details, image, rating, action}) => {
  return (
    <div>
        <div className="bg-[#0000008b] backdrop-blur-lg fixed inset-0 z-[100000000]"></div>
       
        <div className="border-2 p-3 border-black w-[22rem] md:w-[48rem] md:top-[50%] md:h-[60rem] xl:w-[80rem]  xl:h-[47rem] z-[100000000000] absolute left-[50%] top-[50%] xl:top-[55%] translate-x-[-50%] translate-y-[-50%] rounded-xl ">
            <div className="fixed top-3 right-3 cursor-pointer" onClick={action}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white md:size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <img src={image} alt="" className="w-96 h-96" />
                <div>
                    <h1 className='font-bold text-5xl text-gray-200'>{name}</h1>
                    <p className='font-bold text-4xl text-gray-200 mt-3'>${price}</p>
                    <p className='font-bold text-3xl text-yellow-400 mt-3'>rating{rating}</p>
                </div>
            </div>
            <p className="mt-6 text-white">
           {details}
            </p>
            
        </div>
    </div>
  )
}

export default Preview