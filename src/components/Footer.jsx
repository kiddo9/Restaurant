

function Footer() {
  return (
    <div className="px-2 py-5">
      <div className="grid grid-cols-1 gap-4">
        <div>
        <div className="flex">
            <img src="images/logo 1.png" alt="" /> <h1 className="relative -bottom-6 text-2xl font-sans font-semibold text-[#101A24]">restaurant</h1>
        </div>
        <p className="text-[#101A28]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .Learn more</p>
        </div>

        <div className="text-[#101A24]">
          <h2 className="text-xl font-semibold">NAVIGATION</h2>
          <ul>
            <li>Menu</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Main dishes</li>
          </ul>
        </div>

        <div className="text-[#101A24]">
          <h2 className="text-xl font-semibold">Dishes</h2>
          <ul>
            <li>Egg and Cumcumber</li>
            <li>tofu chili</li>
            <li>Fish and Veggies</li>
            <li>Lumpets</li>
          </ul>
        </div>

        <div className="text-[#101A24]">
          <h2 className="text-xl font-semibold">Follow us</h2>
          
          <ul className="flex gap-9">
            <li><img src="images/Facebook.png" className="w-16" /></li>
            <li className="border rounded-full p-5 border-[#101A24]"><img src="images/icons8-instagram 1.png" /></li>
            <li className="border rounded-full p-4 border-[#101A24]"><img src="images/image 2.png" /></li>
        
          </ul>
        </div>
      </div>
      <div className="text-xl text-[#101A24]">
        <h2 className="text-xl font-semibold">Opening Hours</h2>
        <div className="grid grid-cols-1 gap-5 mt-3">
          <div>
            <h5 className="text-lg font-normal">Monday - Friday</h5>
            <p>8am to 9pm</p>
          </div>

          <div>
            <h5 className="text-lg font-normal">Saturday</h5>
            <p>8am to 9pm</p>
          </div>

          <div>
            <h5 className="text-lg font-normal">Sunday</h5>
            <p>CLOSED</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-[#101A24] flex gap-2 py-3">
        <p>&copy; 2022 Restaurants. All Right Reserved. Designed by Isaac</p>
        <div>
          <p>Terms</p>
          <p>Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
