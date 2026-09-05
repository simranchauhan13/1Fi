const products = [
  {
    id: 1,
    name: "Samsung Galaxy S25",
    price: 74999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
    variants: ["128 GB", "256 GB"],
    emiPlans: [
      { months: 12, amount: 6250 },
      { months: 24, amount: 3125 }
    ]
  },
  {
    id: 2,
    name: "Apple iPhone 16",
    price: 79999,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
    variants: ["128 GB", "256 GB"],
    emiPlans: [
      { months: 12, amount: 6667 },
      { months: 24, amount: 3334 }
    ]
  },
  {
    id: 3,
    name: "HP Laptop",
    price: 64999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    variants: ["8 GB RAM", "16 GB RAM"],
    emiPlans: [
      { months: 12, amount: 5417 },
      { months: 24, amount: 2709 }
    ]
  }
];

export default products;