

function FifthSec() {
  return (
    <div className="relative">
      <div>
        <img src="images/cta-img-bg 1.png" className="h-44" alt="" />
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-xl font-semibold text-center">Get Or Promo Code by
           Subscribing To our  Newsletter
        </h2>
        <div className="flex px-3 py-1 mt-3 bg-white border w-72 rounded-xl">
            <input type="text" placeholder="Enter your email" className="py-3 bg-transparent" />
            <button className="bg-[#EA6D27] px-3 rounded-xl">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default FifthSec
