const baseUrl = import.meta.env.BASE_URL

const assetUrl = (fileName) => `${baseUrl}assets/images/${encodeURIComponent(fileName)}`

const menuItems = [
  {
    id: 1,
    Name: "Signature Latte",
    price: 220,
    image: assetUrl("Signature Latte.jpg"),
  },
  {
    id: 2,
    Name: "Premium Espresso",
    price: 150,
    image: assetUrl("Premium Espresso.jpg"),
  },
  {
    id: 3,
    Name: "Cold Brew Deluxe",
    price: 240,
    image: assetUrl("Cold Brew Deluxe.jpg"),
  },
  {
    id: 4,
    Name: "Americano",
    price: 130,
    image: assetUrl("Americano.jpg"),
  },
  {
    id: 5,
    Name: "Cappuccino",
    price: 200,
    image: assetUrl("Cappuccino.jpg"),
  },
  { id: 6, Name: "ColdBrew", price: 210, image: assetUrl("ColdBrew.jpg") },
  {
    id: 7,
    Name: "Flat White",
    price: 180,
    image: assetUrl("FlatWhite.jpg"),
  },
  {
    id: 8,
    Name: "Iced Latte",
    price: 190,
    image: assetUrl("IcedLatte.jpg"),
  },
  {
    id: 9,
    Name: "Macchiato",
    price: 160,
    image: assetUrl("Macchiato.jpg"),
  },
  { id: 10, Name: "Mocha", price: 210, image: assetUrl("Mocha.jpg") },
];

export default menuItems;
