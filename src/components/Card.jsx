

function Card() {
    const Cardcard = [
        {
            id: 1,
            Title: "Lumpia with Suace",
            Price: "$" + 12,
            Description: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
            image: "images/dish-1 1.png"
        },
        {
            id: 2,
            Title: "Fish and VEggie",
            Price: "$" + 12,
            Description: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
            image: "images/dish-3 1.png"
        },
        {
            id: 3,
            Title: "Tufo chili",
            Price: "$" + 12,
            Description: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
            image: "images/dish-5.png"
        },
        {
            id: 4,
            Title: "Egg and Cucumber",
            Price: "$" + 12,
            Description: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
            image: "images/dish-4.png"
        }
    ];

  return (
    <div >
        <div className="grid grid-cols-1 mx-4 mt-16 gap-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:px-44" >
      {Cardcard.map((card) => (
        <div key={card.id} className="relative" >
            
            <div className="relative flex justify-center">
            <img src={card.image} alt="" className="w-44" />
            <h4 className="bg-[#101A24] py-4 px-3 w-14 h-14 rounded-full absolute top-14 right-20">{card.Price}</h4>
            </div>
           <div className="border-2 border-white pb-10 rounded-tl-[30%] w-64 h-72 mx-auto rounded-br-[30%] flex flex-col justify-center gap-10 px-8 -mt-20">
           <span className="text-[#101A24] text-center mt-24 text-3xl font-semibold">{card.Title}</span>
            <p className="text-[#5C6574]">{card.Description}</p>
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Card
