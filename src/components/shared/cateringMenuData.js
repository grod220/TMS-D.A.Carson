import BucketOfBalls from "./OrderModule/images/bucket-of-balls.jpg";
import EggplantStack from "./OrderModule/images/eggplant-stack.jpg";
import Tortellini from "./OrderModule/images/tortellini.jpg";
import BakedZiti from "./OrderModule/images/baked-ziti.jpg";
import CapreseSalad from "./OrderModule/images/caprese-salad.jpg";
import StoppeSalad from "./OrderModule/images/stoppe-salad.jpg";
import FocacciaGrande from "./OrderModule/images/focaccia-grande.jpg";
import Polenta from "./OrderModule/images/polenta.jpg";
import WhiteBeanRagu from "./OrderModule/images/white-bean-ragu.jpg";

export default [
  {
    category: "Mains",
    items: [
      {
        name: "Bucket of Balls",
        price: 29.95,
        description: "13 balls one style, includes sauce and focaccia bread",
        image: BucketOfBalls,
        options: [
          {
            name: "Choice of Meatball",
            choices: [
              { name: "Nonna's Traditional Italian", selection: true },
              { name: "Sausage Pepper & Onions", gf: true, selection: true },
              { name: "Sausage ball", gf: true, selection: true },
              { name: "Chicken Marsala", gf: true, selection: true },
              { name: "Chicken Parmigiana", gf: true, selection: true },
              { name: "Chicken Buffalo Bleu", gf: true, selection: true },
              { name: "Porcupine Ball", selection: true },
              { name: "Spicy Pork", gf: true, selection: true },
              { name: "Mac & Cheese Meatball", selection: true },
              { name: "Mediterranean-Lamb", gf: true, selection: true },
              {
                name: "Vegetarian/Vegan",
                gf: true,
                vegetarian: true,
                selection: true
              },
              { name: "Eggplant, Zucchini, Quinoa/Vegan", selection: true },
              { name: "Polenta Balls", selection: true },
              { name: "Iana's Gem", extra: 1.5, addition: true },
              {
                name: "Crab Balls with Red Pepper Remoulade sauce",
                extra: 12,
                selection: true
              },
              {
                name: "Gator Balls with Spicy Lemon Aioli",
                extra: 12,
                selection: true
              }
            ]
          },
          {
            name: "Choice of Sauce",
            choices: [
              { name: "Roasted Tomato", gf: true, selection: true },
              { name: "Peppers and Onions", gf: true, selection: true },
              { name: "Creamy Provolone", gf: true, selection: true },
              { name: "Marsala Mushroom", gf: true, selection: true },
              { name: "Isabella’s Signature Pesto", gf: true, selection: true },
              { name: "Vegan Pesto", gf: true, vegan: true, selection: true },
              { name: "Buffalo Bleu", gf: true, selection: true },
              { name: "Spicy Pork", gf: true, selection: true }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Famiglia Favorites",
    items: [
      {
        name: "Baked Ziti (half-pan)",
        price: 50,
        description: "Serves 10",
        image: BakedZiti
      },
      {
        name: "Baked Ziti (full-pan)",
        price: 90,
        description: "Serves 25",
        image: BakedZiti
      },
      {
        name: "Eggplant Stack (half-pan)",
        price: 60,
        description: "",
        image: EggplantStack,
        vegetarian: true
      },
      {
        name: "Eggplant Stack (full-pan)",
        price: 120,
        description: "",
        image: EggplantStack,
        vegetarian: true
      },
      {
        name: "Cheese Tortellini (half-pan)",
        price: 70,
        description: "",
        image: Tortellini
      },
      {
        name: "Cheese Tortellini (full-pan)",
        price: 120,
        description: "",
        image: Tortellini
      },
      {
        name: "Lasagna Bolognese (half-pan)",
        price: 70,
        description: "",
      },
      {
        name: "Lasagna Bolognese (full-pan)",
        price: 125,
        description: "",
      }
    ]
  },
  {
    category: "Salads served with focaccia",
    items: [
      {
        name: "Stoppe Salad (half-pan)",
        price: 50,
        description: "Serves 10",
        image: StoppeSalad
      },
      {
        name: "Stoppe Salad (full-pan)",
        price: 90,
        description: "Serves 25",
        image: StoppeSalad
      },
      {
        name: "Caprese Salad (half-pan)",
        price: 60,
        description: "",
        image: CapreseSalad
      },
      {
        name: "Caprese Salad (full-pan)",
        price: 120,
        description: "",
        image: CapreseSalad
      },
      {
        name: "Roasted Vegetable Salad (half-pan)",
        price: 75,
        description: "",
        vegan: true
      },
      {
        name: "Roasted Vegetable Salad (full-pan)",
        price: 150,
        description: "",
        vegan: true
      }
    ]
  },
  {
    category: "Focaccia Pizza",
    items: [
      {
        name: "Focaccia Grande Pizza",
        price: 26.95,
        description: "14 pieces with two toppings",
        image: FocacciaGrande,
        options: [
          {
            name: "Choice of Toppings",
            maximum: 10,
            choices: [
              { name: "Banana Peppers", extra: 1.5, addition: true },
              { name: "Onions", extra: 1.5, addition: true },
              { name: "Red Peppers", extra: 1.5, addition: true },
              { name: "Anchovies", extra: 1.5, addition: true },
              { name: "Tomatoes", extra: 1.5, addition: true },
              { name: "Arugula", extra: 1.5, addition: true }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "À la Carte Sides",
    items: [
      {
        name: "Penne Pasta (half-pan)",
        price: 40,
        description: "With choice of sauce",
        gf: true,
        vegan: true,
        options: [
          {
            name: "Choice of Sauce",
            choices: [
              { name: "Roasted Tomato", gf: true, selection: true },
              { name: "Peppers and Onions", gf: true, selection: true },
              { name: "Creamy Provolone", gf: true, selection: true },
              { name: "Marsala Mushroom", gf: true, selection: true },
              { name: "Isabella’s Signature Pesto", gf: true, selection: true },
              { name: "Buffalo Bleu", gf: true, selection: true },
              { name: "Spicy Pork", gf: true, selection: true }
            ]
          },
          {
            name: "Gluten free pasta option",
            choices: [{ name: "Gluten free", addition: true }]
          }
        ]
      },
      {
        name: "Penne Pasta (full-pan)",
        price: 80,
        description: "With choice of sauce",
        gf: true,
        vegan: true,
        options: [
          {
            name: "Choice of Sauce",
            choices: [
              { name: "Roasted Tomato", gf: true, selection: true },
              { name: "Peppers and Onions", gf: true, selection: true },
              { name: "Creamy Provolone", gf: true, selection: true },
              { name: "Marsala Mushroom", gf: true, selection: true },
              { name: "Isabella’s Signature Pesto", gf: true, selection: true },
              { name: "Buffalo Bleu", gf: true, selection: true },
              { name: "Spicy Pork", gf: true, selection: true }
            ]
          },
          {
            name: "Gluten free pasta option",
            choices: [{ name: "Gluten free", addition: true }]
          }
        ]
      },
      {
        name: "White Bean Ragu (half-pan)",
        price: 60,
        vegan: true,
        gf: true,
        image: WhiteBeanRagu
      },
      {
        name: "White Bean Ragu (full-pan)",
        price: 90,
        vegan: true,
        gf: true,
        image: WhiteBeanRagu
      },
      {
        name: "Creamy Polenta (half-pan)",
        price: 50,
        gf: true,
        image: Polenta
      },
      {
        name: "Creamy Polenta (full-pan)",
        price: 90,
        gf: true,
        image: Polenta
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Cannoli (10 minimum)",
        price: 2.5
      },
      {
        name: "Cookies",
        price: 1
      },
      {
        name: "Chef’s Selection Cookies",
        price: 2
      }
    ]
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Coke (2 liter)",
        price: 5
      },
      {
        name: "Diet Coke (2 liter)",
        price: 5
      },
      {
        name: "Sprite (2 liter)",
        price: 5
      },
      {
        name: "Fanta Orange (2 liter)",
        price: 5
      },
      {
        name: "Sweet Tea (1 gallon)",
        price: 7
      },
      {
        name: "Unsweet Tea (1 gallon)",
        price: 7
      },
      {
        name: "Lemonade (1 gallon)",
        price: 7
      },
      {
        name: "Bottled Water",
        price: 1
      },
      {
        name: "Pellegrino",
        price: 3
      }
    ]
  }
];
