function SuccessError({Image, click, message, style}){
    return(
        <div>
            <div className="bg-[#0000008b] fixed inset-0 z-[100000000]"></div>
                <div className={`z-[100000000000] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[23.5rem] sm:w-96 h-80 rounded-xl ${style}`}>
                    <img className="mx-auto w-40 mt-3 rounded-full" src={Image}/>
                        <div className="px-8">
                            <p className="text-black text-center">{message}</p>
                            <button className="text-white w-80 bg-black py-3 rounded-xl mt-14 mx-auto"  onClick={click}>OK</button>
                        </div>
                </div>
        </div>
    )
}

export default SuccessError