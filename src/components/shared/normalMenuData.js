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
    category: "Appetizers",
    items: [
      {
        name: "Fried Calamari",
        price: 9.95,
        image: Calamari,
        gf: true
      },
      {
        name: "Spicy Fried Shrimp",
        price: 10.95,
        gf: true
      },
      {
        name: "4 Ball Sampler",
        price: 8.95,
        image: FiveBall,
        vegetarian: true,
        vegan: true,
        options: [
          {
            name: "Choice of Meatballs",
            minimum: 1,
            maximum: 4,
            choices: [
              { name: "Nonna's Traditional Italian", addition: true },
              { name: "Sausage Pepper & Onions", gf: true, addition: true },
              { name: "Sausage", gf: true, addition: true },
              { name: "Chicken Marsala", gf: true, addition: true },
              { name: "Chicken Parmigiana", gf: true, addition: true },
              { name: "Chicken Buffalo Bleu", gf: true, addition: true },
              {
                name: "Vegetarian",
                gf: true,
                vegetarian: true,
                addition: true
              },
              { name: "Vegan", gf: true, vegan: true, addition: true },
              { name: "Spicy Pork", addition: true },
              {
                name: "Mac & Cheese Meatball",
                vegetarian: true,
                addition: true
              },
              { name: "Lamb", gf: true, addition: true },
              { name: "Jeffy’s Crab Ball", extra: 3, addition: true },
              { name: "Gator Meatball", extra: 3, addition: true },
              {
                name: "Polenta Ball",
                gf: true,
                vegetarian: true,
                addition: true
              },
              {
                name: "Eggplant Zucchini Quinoa",
                gf: true,
                vegan: true,
                addition: true
              },
              { name: "Porcupine Ball", addition: true }
            ]
          },
          {
            name: "Addon",
            choices: [
              {
                name: "Iana's Gem (fried egg)",
                extra: 1.5,
                gf: true,
                vegetarian: true,
                addition: true
              }
            ]
          }
        ]
      },
      {
        name: "Baked Mozzarella",
        price: 7.95,
        description: "Served with Crostini",
        image: BakedMozzarella,
        vegetarian: true
      },
      {
        name: "Focaccia Pizza",
        price: 9.95,
        vegan: true,
        vegetarian: true,
        image: Focaccia,
        options: [
          {
            name: "Choice of Toppings",
            choices: [
              {
                name: "Nonna's Traditional Italian",
                extra: 1.5,
                addition: true
              },
              {
                name: "Sausage Pepper & Onions",
                extra: 1.5,
                gf: true,
                addition: true
              },
              { name: "Sausage", extra: 1.5, gf: true, addition: true },
              {
                name: "Chicken Parmigiana",
                extra: 1.5,
                gf: true,
                addition: true
              },
              {
                name: "Chicken Buffalo Bleu",
                extra: 1.5,
                gf: true,
                addition: true
              },
              {
                name: "Vegetarian",
                extra: 1.5,
                gf: true,
                vegetarian: true,
                addition: true
              },
              {
                name: "Vegan",
                extra: 1.5,
                gf: true,
                vegan: true,
                addition: true
              },
              { name: "Spicy Pork", extra: 1.5, addition: true },
              { name: "Lamb", extra: 1.5, gf: true, addition: true },
              { name: "Jeffy’s Crab Ball", extra: 3, addition: true },
              { name: "Gator Meatball", extra: 3, addition: true },
              {
                name: "Iana's Gem (fried egg)",
                extra: 1.5,
                gf: true,
                vegetarian: true,
                addition: true
              },
              { name: "Banana Peppers", extra: 1.5, gf: true, vegan: true },
              { name: "onions", extra: 1.5, gf: true, vegan: true },
              { name: "peppers", extra: 1.5, gf: true, vegan: true },
              { name: "tomatoes", extra: 1.5, gf: true, vegan: true },
              { name: "anchovies", extra: 1.5, gf: true },
              { name: "arugula", extra: 1.5, gf: true, vegan: true }
            ]
          },
          {
            name: "Vegan",
            choices: [{ name: "no cheese", vegan: true, addition: true }]
          }
        ]
      },
      {
        name: "Garlic Focaccia Bites",
        price: 6.95,
        vegan: true,
        image: FocacciaBites
      },
      {
        name: "Meatball Lettuce Wrap",
        price: 7.25,
        vegan: true,
        options: [
          {
            name: "Choice of Meatballs",
            choices: [
              { name: "Nonna's Traditional Italian", selection: true },
              { name: "Sausage Pepper & Onions", gf: true, selection: true },
              { name: "Sausage", gf: true, selection: true },
              { name: "Chicken Marsala", gf: true, selection: true },
              { name: "Chicken Parmigiana", gf: true, selection: true },
              { name: "Chicken Buffalo Bleu", gf: true, selection: true },
              {
                name: "Vegetarian",
                gf: true,
                vegetarian: true,
                selection: true
              },
              { name: "Vegan", gf: true, vegan: true, selection: true },
              { name: "Spicy Pork", selection: true },
              {
                name: "Mac & Cheese Meatball",
                vegetarian: true,
                selection: true
              },
              { name: "Lamb", gf: true, selection: true },
              { name: "Jeffy’s Crab Ball", extra: 3, selection: true },
              { name: "Gator Meatball", extra: 3, selection: true },
              {
                name: "Polenta Ball",
                gf: true,
                vegetarian: true,
                selection: true
              },
              {
                name: "Eggplant Zucchini Quinoa",
                gf: true,
                vegan: true,
                selection: true
              },
              { name: "Porcupine Ball", selection: true }
            ]
          },
          {
            name: "Addon",
            choices: [
              {
                name: "Iana's Gem (fried egg)",
                extra: 1.5,
                gf: true,
                vegetarian: true,
                addition: true
              }
            ]
          }
        ]
      },
      {
        name: "Meatball Sliders",
        price: 7.95,
        vegan: true,
        options: [
          {
            name: "Choice of Meatballs",
            minimum: 1,
            maximum: 2,
            choices: [
              { name: "Nonna's Traditional Italian", addition: true },
              { name: "Sausage Pepper & Onions", gf: true, addition: true },
              { name: "Sausage", gf: true, addition: true },
              { name: "Chicken Marsala", gf: true, addition: true },
              { name: "Chicken Parmigiana", gf: true, addition: true },
              { name: "Chicken Buffalo Bleu", gf: true, addition: true },
              {
                name: "Vegetarian",
                gf: true,
                vegetarian: true,
                addition: true
              },
              { name: "Vegan", gf: true, vegan: true, addition: true },
              { name: "Spicy Pork", addition: true },
              {
                name: "Mac & Cheese Meatball",
                vegetarian: true,
                addition: true
              },
              { name: "Lamb", gf: true, addition: true },
              { name: "Jeffy’s Crab Ball", extra: 3, addition: true },
              { name: "Gator Meatball", extra: 3, addition: true },
              {
                name: "Polenta Ball",
                gf: true,
                vegetarian: true,
                addition: true
              },
              {
                name: "Eggplant Zucchini Quinoa",
                gf: true,
                vegan: true,
                addition: true
              },
              { name: "Porcupine Ball", addition: true }
            ]
          },
          {
            name: "Addon",
            choices: [
              {
                name: "Iana's Gem (fried egg)",
                extra: 1.5,
                gf: true,
                vegetarian: true,
                addition: true
              }
            ]
          }
        ]
      },
      {
        name: "3 Crab or Gator Balls",
        price: 11.95,
        image: CrabBalls,
        options: [
          {
            name: "Choice of Meatball",
            choices: [
              { name: "Crab Ball", selection: true },
              { name: "Gator Ball", gf: true, selection: true }
            ]
          }
        ]
      }
    ]
  }
];
