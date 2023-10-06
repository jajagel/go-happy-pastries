
import { veg, mango, fruit, fb, grab, fbRed, grabRed, phone, cash, tart, storeB1, storeB2 } from "../assets";

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "menu",
      title: "Menu",
    },
    {
      id: "order",
      title: "How to Order",
    },
    {
      id: "store",
      title: "Location",
    },
  ];

export const otherLinks = [
  {
    id: "facebook",
    url: "https://www.facebook.com/profile.php?id=100068841231624",
    img: fb,
  },
  {
    id: "grab",
    url: "https://food.grab.com/ph/en/restaurant/go-happy-pastries---km6/2-C3U1GLKWUBN2VJ?exp_src=share&itemID=PHITE2023042309285797184&fbclid=IwAR08HXLtmT",
    img: grab,
  },
];

export const goHappyMenu = [
  {
    Pizza: [
      {
          id: "veg",
          title: "Veggie Meat",
          price: "₱ 310",
          img: veg,
          bestseller: false,
      },
      {
          id: "mango",
          title: "Mango Pizza",
          price: "₱ 320",
          img: mango,
          bestseller: true,
      },
      {
          id: "fruit",
          title: "Tropical Fruit",
          price: "₱ 275",
          img: fruit,
          bestseller: false,
      },
    ],
    Dessert: [
      {
          id: "tart",
          title: "Portuguese Tart",
          price: 
          {
            one: "16 pcs - ₱ 315",
            two: "8 pcs - ₱ 160",
          },
          img: tart,
          bestseller: false,
      },
    ]
  }
];

export const orderOptions = [
    {
        id: "option-1",
        icon: fbRed,
        description: "You can send us your orders via our Facebook Page",
    },
    {
        id: "option-2",
        icon: phone,
        description: "For faster transactions, please contact us at 09394643885",
    },
    {
        id: "option-3",
        icon: grabRed,
        description: "You can also order through Grab Food, Grab Pabili or Grab Express",
    },
    {
        id: "option-4",
        icon: cash,
        description: "We accept Gcash and cash as mode of payments",
    },
  ];

  export const storeLocations = [
    {
      id: "store-1",
      address: "Olympian Lane New Bldg. Mabini Street Baguio City",
      operatingHours: "6:30 AM - 6:30 PM Daily",
      img: storeB1,
    },
    {
      id: "store-2",
      address: "2/F Als Bldg. KM.6 La Trinidad, Benguet",
      operatingHours: "6:30 AM - 6:30 PM Daily",
      img: storeB2,
    },
  ];

  export const copyright = "© 2023 Go Happy Pastries. All Rights Reserved."