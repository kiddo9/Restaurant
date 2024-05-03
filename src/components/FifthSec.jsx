

function FifthSec() {
  return (
    <div className="relative 2xl:mx-40">
      <div>
        <img src="images/cta-img-bg 1.png" className="h-44 sm:w-screen 2xl:h-52 2xl:rounded-3xl" alt="" />
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-xl font-semibold text-center sm:text-2xl 2xl:text-4xl">Get Or Promo Code by
           Subscribing To our  Newsletter
        </h2>
        <div className="flex px-3 py-1 mt-3 bg-white border w-72 rounded-xl sm:w-96 2xl:w-[36rem]">
            <input type="text" placeholder="Enter your email" className="py-3 bg-transparent outline-none text-[#101A24] sm:w-80 2xl:w-[34rem]" />
            <button className="bg-[#EA6D27] px-3 rounded-xl">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default FifthSec
