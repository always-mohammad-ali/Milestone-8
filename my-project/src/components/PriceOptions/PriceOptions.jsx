import Price from "../Price/Price";

const PriceOptions = () => {

  const priceOptions = [
    {
      id: 1,
      type: "Basic",
      price: 30,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "1 free fitness assessment",
      ],
    },
    {
      id: 2,
      type: "Standard",
      price: 50,
      currency: "USD",
      features: [
        "All Basic features",
        "Group fitness classes",
        "Personal trainer (2 sessions/month)",
        "Access to sauna",
      ],
    },
    {
      id: 3,
      type: "Premium",
      price: 80,
      currency: "USD",
      features: [
        "All Standard features",
        "Unlimited personal trainer sessions",
        "Nutrition consultation",
        "Priority class booking",
        "VIP lounge access",
      ],
    },
    {
      id: 4,
      type: "Student",
      price: 25,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Discounted group fitness classes",
        "Study-friendly lounge",
        "Free Wi-Fi access",
      ],
    },
    {
      id: 5,
      type: "Family",
      price: 120,
      currency: "USD",
      features: [
        "Access for up to 4 family members",
        "All Premium features included",
        "Kids fitness programs",
        "Family yoga sessions",
        "Shared VIP lounge access",
      ],
    },
  ];

  return( 
        <div>
             <h2 className="text-3xl p-5 text-green-300">Choose your Best Price man!</h2>
             
             <div className="grid grid-cols-3 gap-5 p-5 ">
               {
                priceOptions.map(options => <Price options={options} key={options.id} ></Price>)
               }
             </div>
             
        </div>
  )
};

export default PriceOptions;
