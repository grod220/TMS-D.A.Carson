import StoppeTrio from "./OrderModule/images/stoppe-trio.jpg";
import Smash from "./OrderModule/images/smash.jpg";
import VeggieFlight from "./OrderModule/images/veggie-flight.jpg";
import BucketOfBalls from "./OrderModule/images/bucket-of-balls.jpg";
import EggplantStack from "./OrderModule/images/eggplant-stack.jpg";
import Tortellini from "./OrderModule/images/tortellini.jpg";
import Lasagna from "./OrderModule/images/lasagna.jpg";
import BakedZiti from "./OrderModule/images/baked-ziti.jpg";
import Panino from "./OrderModule/images/panino.jpg";
import PastaFagioli from "./OrderModule/images/pasta-fagioli.jpg";
import PastaAglia from "./OrderModule/images/pasta-aglia.png";
import CapreseSalad from "./OrderModule/images/caprese-salad.jpg";
import StoppeSalad from "./OrderModule/images/stoppe-salad.jpg";
import Focaccia from "./OrderModule/images/focaccia.jpg";
import FocacciaGrande from "./OrderModule/images/focaccia-grande.jpg";
import Polenta from "./OrderModule/images/polenta.jpg";
import WhiteBeanRagu from "./OrderModule/images/white-bean-ragu.jpg";
import FiveBall from "./OrderModule/images/five-ball.jpg";
import FocacciaBites from "./OrderModule/images/focaccia-bites.jpg";
import BakedMozzarella from "./OrderModule/images/baked-mozz.png";
import CrabBalls from "./OrderModule/images/crab-balls.jpg";
import Calamari from "./OrderModule/images/calamari.jpg";
import Cappuccino from "./OrderModule/images/cappuccino.png";

export default [
  {
    category: "Mains",
    items: [
      {
        name: "Stoppe Trio",
        price: 10.95,
        description: "Served with side, Stoppe salad, and any style meatball",
        image: StoppeTrio,
        options: [
          {
            name: "Choice of Meatball",
            choices: [
              { name: "Nonna's Traditional Italian", selection: true },
              { name: "Sausage Pepper & Onions", gf: true, selection: true },
              { name: "Jeffy’s Sausage", gf: true, selection: true },
              { name: "Chicken Marsala", gf: true, selection: true },
              { name: "Chicken Parmigiana", gf: true, selection: true },
              { name: "Chicken Buffalo Bleu", gf: true, selection: true },
              { name: "Vegetarian", gf: true, selection: true },
              { name: "Vegan", gf: true, selection: true },
              { name: "Spicy Pork", gf: true, selection: true },
              { name: "Mac & Cheese Meatball", selection: true },
              { name: "Lamb", gf: true, selection: true },
              { name: "Jeffy’s Crab Ball", extra: 3, selection: true },
              { name: "Gator Meatball", extra: 3, selection: true },
              { name: "Iana's Gem", extra: 1.5, addition: true }
            ]
          },
          {
            name: "Choice of Side",
            choices: [
              { name: "Creamy Polenta", selection: true },
              { name: "White Bean Ragu", selection: true },
              { name: "Penne Pasta", gf: true, selection: true },
              { name: "Linguine", selection: true }
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
              { name: "Buffalo Bleu", gf: true, selection: true },
              { name: "Spicy Pork", gf: true, selection: true }
            ]
          }
        ]
      },
      {
        name: "Meatball Smash",
        price: 9.95,
        description: "Served on fresh ciabatta roll and Stoppe salad",
        vegan: true,
        image: Smash,
        options: [
          {
            name: "Choice of Meatball",
            choices: [
              { name: "Nonna's Traditional Italian", selection: true },
              { name: "Sausage Pepper & Onions", gf: true, selection: true },
              { name: "Jeffy’s Sausage", gf: true, selection: true },
              { name: "Chicken Marsala", gf: true, selection: true },
              { name: "Chicken Parmigiana", gf: true, selection: true },
              { name: "Chicken Buffalo Bleu", gf: true, selection: true },
              {
                name: "Vegetarian",
                gf: true,
                extra: 2,
                vegan: true,
                selection: true
              },
              { name: "Spicy Pork", gf: true, selection: true },
              { name: "Mac & Cheese Meatball", selection: true },
              { name: "Lamb", gf: true, selection: true }
            ]
          }
        ]
      },
      {
        name: "Meatball Flight",
        price: 19.95,
        description:
          "Includes 5 meatballs, polenta or white bean ragu, focaccia, & beverage",
        image: VeggieFlight,
        options: [
          {
            name: "Choice of Meatball",
            minimum: 1,
            maximum: 5,
            choices: [
              { name: "Nonna's Traditional Italian", addition: true },
              { name: "Sausage Pepper & Onions", gf: true, addition: true },
              { name: "Jeffy’s Sausage", gf: true, addition: true },
              { name: "Chicken Marsala", gf: true, addition: true },
              { name: "Chicken Parmigiana", gf: true, addition: true },
              { name: "Chicken Buffalo Bleu", gf: true, addition: true },
              { name: "Vegetarian", gf: true, vegan: true, addition: true },
              { name: "Spicy Pork", gf: true, addition: true },
              { name: "Mac & Cheese Meatball", addition: true },
              { name: "Lamb", gf: true, addition: true },
              { name: "Jeffy’s Crab Ball", extra: 3, addition: true },
              { name: "Gator Meatball", extra: 3, addition: true }
            ]
          },
          {
            name: "Choice of Side",
            choices: [
              { name: "Creamy Polenta", selection: true },
              { name: "White Bean Ragu", selection: true }
            ]
          },
          {
            name: "Choice of Beverage",
            choices: [
              { name: "Coke", selection: true },
              { name: "Diet Coke", selection: true },
              { name: "Sprite", selection: true },
              { name: "Fanta Orange", selection: true },
              { name: "Unsweet Tea", selection: true },
              { name: "Lemonade", selection: true },
              { name: "Coffee", selection: true }
            ]
          }
        ]
      },
      {
        name: "Bucket of 13 meatballs",
        price: 24.95,
        description: "One style, with choice of sauce & focaccia",
        image: BucketOfBalls,
        options: [
          {
            name: "Choice of Meatball",
            choices: [
              { name: "Nonna's Traditional Italian", selection: true },
              { name: "Sausage Pepper & Onions", gf: true, selection: true },
              { name: "Jeffy’s Sausage", gf: true, selection: true },
              { name: "Chicken Marsala", gf: true, selection: true },
              { name: "Chicken Parmigiana", gf: true, selection: true },
              { name: "Chicken Buffalo Bleu", gf: true, selection: true },
              {
                name: "Vegetarian",
                gf: true,
                vegetarian: true,
                extra: 6,
                selection: true
              },
              { name: "Spicy Pork", gf: true, selection: true },
              { name: "Mac & Cheese Meatball", selection: true },
              { name: "Lamb", gf: true, selection: true },
              { name: "Jeffy’s Crab Ball", extra: 12, selection: true },
              { name: "Gator Meatball", extra: 12, selection: true },
              { name: "Iana's Gem", extra: 1.5, addition: true }
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
        name: "Eggplant Stack",
        price: 10.95,
        description: "Served with Stoppe salad and focaccia",
        image: EggplantStack,
        vegetarian: true
      },
      {
        name: "Cheese Ravioli and Meatball",
        price: 10.95,
        description: "Served with stoppe salad and focaccia"
      },
      {
        name: "Tortellini in Pink Sauce",
        price: 10.95,
        description: "Served with stoppe salad and focaccia",
        image: Tortellini
      },
      {
        name: "Lasagna Bolognese",
        price: 10.95,
        description: "Served with stoppe salad and focaccia",
        image: Lasagna
      },
      {
        name: "Vegetarian Lasagna",
        price: 10.95,
        description: "Served with stoppe salad and focaccia",
        vegetarian: true
      },
      {
        name: "Baked Ziti",
        price: 10.95,
        description: "Served with stoppe salad and focaccia",
        image: BakedZiti
      },
      {
        name: "Eggplant Panino",
        price: 10.95,
        description: "Served with stoppe salad and focaccia",
        vegan: true,
        image: Panino
      },
      {
        name: "Pasta Fagioli",
        price: 10.95,
        gf: true,
        image: PastaFagioli
      },
      {
        name: "Pasta Aglia E Olio",
        price: 10.95,
        description: "Served with stoppe salad and focaccia",
        vegan: true,
        gf: true,
        image: PastaAglia
      },
      {
        name: "Pasta Primavera Vegan - Penne with Seasonal",
        price: 10.95,
        vegan: true,
        gf: true
      }
    ]
  },
  {
    category: "Fresh Crisp Salads",
    items: [
      {
        name: "Caprese Salad",
        price: 7.5,
        description: "Service with focaccia",
        image: CapreseSalad
      },
      {
        name: "Stoppe Salad",
        price: 6.95,
        description: "Service with focaccia",
        image: StoppeSalad
      },
      {
        name: "Roasted Vegetable Salad",
        price: 7.5,
        description: "Service with focaccia"
      }
    ]
  },
  {
    category: "Focaccia Pizza",
    items: [
      {
        name: "Focaccia Pizza",
        price: 10.95,
        description: "Vegan also available",
        vegan: true,
        image: Focaccia,
        options: [
          {
            name: "Choice of Toppings",
            maximum: 10,
            choices: [
              { name: "Meatball", extra: 1.5, addition: true },
              { name: "Vegan meatball", extra: 1.5, addition: true },
              { name: "Isabella’s Pesto", extra: 1.5, addition: true },
              { name: "Salami", extra: 1.5, addition: true },
              { name: "Banana Peppers", extra: 1.5, addition: true },
              { name: "Onions", extra: 1.5, addition: true },
              { name: "Red Peppers", extra: 1.5, addition: true },
              { name: "Olives", extra: 1.5, addition: true },
              { name: "Anchovies", extra: 1.5, addition: true },
              { name: "Tomatoes", extra: 1.5, addition: true },
              { name: "Arugula", extra: 1.5, addition: true }
            ]
          },
          {
            name: "Vegan",
            choices: [{ name: "no cheese", addition: true }]
          }
        ]
      },
      {
        name: "Focaccia Grande Pizza",
        price: 29.95,
        description: "14 pieces with two toppings",
        image: FocacciaGrande,
        options: [
          {
            name: "Choice of Toppings",
            maximum: 2,
            choices: [
              { name: "Meatball", addition: true },
              { name: "Isabella’s Pesto", addition: true },
              { name: "Salami", addition: true },
              { name: "Banana Peppers", addition: true },
              { name: "Onions", addition: true },
              { name: "Red Peppers", addition: true },
              { name: "Olives", addition: true },
              { name: "Anchovies", addition: true },
              { name: "Tomatoes", addition: true },
              { name: "Arugula", addition: true }
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
        name: "Creamy Polenta",
        price: 6.25,
        gf: true,
        image: Polenta
      },
      {
        name: "White Bean Ragu",
        price: 6.25,
        vegan: true,
        gf: true,
        image: WhiteBeanRagu
      },
      {
        name: "Penne Pasta",
        price: 6.25,
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
      }
    ]
  },
  {
    category: "Appetizers",
    items: [
      {
        name: "Meatballs on a stick",
        price: 6.95
      },
      {
        name: "5 balls",
        price: 8.95,
        image: FiveBall
      },
      {
        name: "Garlic Focaccia Bites",
        price: 6.95,
        vegan: true,
        gf: true,
        image: FocacciaBites
      },
      {
        name: "Baked Mozzarella",
        price: 7.95,
        image: BakedMozzarella
      },
      {
        name: "Gator Balls",
        price: 10.95
      },
      {
        name: "Crab Balls",
        price: 10.95,
        image: CrabBalls
      },
      {
        name: "Fried Calamari",
        price: 9.95,
        image: Calamari
      },
      {
        name: "3 Meatball Slider",
        price: 6.95,
        vegan: true
      }
    ]
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Coke",
        price: 2.5
      },
      {
        name: "Diet Coke",
        price: 2.5
      },
      {
        name: "Sprite",
        price: 2.5
      },
      {
        name: "Root Beer",
        price: 2.5
      },
      {
        name: "Unsweet Tea",
        price: 2.5
      },
      {
        name: "Lemonade",
        price: 2.5
      },
      {
        name: "Cappuccino",
        price: 3.5,
        image: Cappuccino
      },
      {
        name: "Iced Cappuccino",
        price: 3.5
      },
      {
        name: "Espresso",
        price: 3.5
      },
      {
        name: "Double Espresso",
        price: 5
      },
      {
        name: "Coffee",
        price: 1.5
      },
      {
        name: "Pellegrino",
        price: 3
      }
    ]
  }
];
