const baseUrl = import.meta.env.BASE_URL

const menuItems = [
  {
    id: 1,
    Name: "Signature Latte",
    price: 220,
    image: `${baseUrl}assets/images/Signature Latte.jpg`,
  },
  {
    id: 2,
    Name: "Premium Espresso",
    price: 150,
    image: `${baseUrl}assets/images/Premium Espresso.jpg`,
  },
  {
    id: 3,
    Name: "Cold Brew Deluxe",
    price: 240,
    image: `${baseUrl}assets/images/Cold Brew Deluxe.jpg`,
  },
  {
    id: 4,
    Name: "Americano",
    price: 130,
    image: `${baseUrl}assets/images/Americano.jpg`,
  },
  {
    id: 5,
    Name: "Cappuccino",
    price: 200,
    image: `${baseUrl}assets/images/Cappuccino.jpg`,
  },
  { id: 6, Name: "ColdBrew", price: 210, image: `${baseUrl}assets/images/ColdBrew.jpg` },
  {
    id: 7,
    Name: "Flat White",
    price: 180,
    image: `${baseUrl}assets/images/FlatWhite.jpg`,
  },
  {
    id: 8,
    Name: "Iced Latte",
    price: 190,
    image: `${baseUrl}assets/images/IcedLatte.jpg`,
  },
  {
    id: 9,
    Name: "Macchiato",
    price: 160,
    image: `${baseUrl}assets/images/Macchiato.jpg`,
  },
  { id: 10, Name: "Mocha", price: 210, image: `${baseUrl}assets/images/Mocha.jpg` },
];

export default menuItems;
