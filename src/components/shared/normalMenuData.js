import StoppeTrio from "./OrderModule/images/stoppe-trio.jpg";
import Smash from "./OrderModule/images/smash.jpg";
import VeggieFlight from "./OrderModule/images/veggie-flight.jpg";
import BucketOfBalls from "./OrderModule/images/bucket-of-balls.jpg";
import EggplantStack from "./OrderModule/images/eggplant-stack.jpg";
import Tortellini from "./OrderModule/images/tortellini.jpg";
import BakedZiti from "./OrderModule/images/baked-ziti.jpg";
import Panino from "./OrderModule/images/panino.jpg";
import PastaFagioli from "./OrderModule/images/pasta-fagioli.jpg";
import PastaAglia from "./OrderModule/images/pasta-aglia.png";
import CapreseSalad from "./OrderModule/images/caprese-salad.jpg";
import StoppeSalad from "./OrderModule/images/stoppe-salad.jpg";
import Focaccia from "./OrderModule/images/focaccia.jpg";
import Polenta from "./OrderModule/images/polenta.jpg";
import WhiteBeanRagu from "./OrderModule/images/white-bean-ragu.jpg";
import FiveBall from "./OrderModule/images/five-ball.jpg";
import FocacciaBites from "./OrderModule/images/focaccia-bites.jpg";
import BakedMozzarella from "./OrderModule/images/baked-mozz.png";
import CrabBalls from "./OrderModule/images/crab-balls.jpg";
import Calamari from "./OrderModule/images/calamari.jpg";
import Cappuccino from "./OrderModule/images/cappuccino.png";
import PastaBowl from "./OrderModule/images/pasta-bowl.jpg";
import Cake from "./OrderModule/images/cake.jpg";

const choiceOfSide = {
  name: "Choice of Side",
  choices: [
    { name: "Creamy Polenta", gf: true, vegetarian: true, selection: true },
    { name: "White Bean Ragu", gf: true, vegan: true, selection: true },
    { name: "Penne Pasta", vegan: true, selection: true },
    { name: "Gluten-free Penne", vegan: true, gf: true, selection: true },
    { name: "Linguine", vegan: true, selection: true }
  ]
};

const addonMeatballs = {
  name: "Optional Meatballs",
  choices: [
    { name: "Nonna's Traditional Italian", extra: 2, addition: true },
    {
      name: "Sausage Pepper & Onions",
      extra: 2,
      gf: true,
      addition: true
    },
    { name: "Sausage", extra: 2, gf: true, addition: true },
    { name: "Chicken Marsala", extra: 2, gf: true, addition: true },
    {
      name: "Chicken Parmigiana",
      extra: 2,
      gf: true,
      addition: true
    },
    {
      name: "Chicken Buffalo Bleu",
      extra: 2,
      gf: true,
      addition: true
    },
    {
      name: "Vegetarian",
      extra: 2,
      gf: true,
      vegetarian: true,
      addition: true
    },
    {
      name: "Vegan",
      extra: 2,
      gf: true,
      vegan: true,
      addition: true
    },
    { name: "Spicy Pork", extra: 2, addition: true },
    {
      name: "Mac & Cheese Meatball",
      extra: 2,
      vegetarian: true,
      addition: true
    },
    { name: "Lamb", extra: 2, gf: true, addition: true },
    { name: "Jeffy’s Crab Ball", extra: 3, addition: true },
    { name: "Gator Meatball", extra: 3, addition: true },
    {
      name: "Polenta Ball",
      extra: 2,
      gf: true,
      vegetarian: true,
      addition: true
    },
    {
      name: "Eggplant Zucchini Quinoa",
      extra: 2,
      gf: true,
      vegan: true,
      addition: true
    },
    { name: "Porcupine Ball", extra: 2, addition: true }
  ]
};

const notPricedMeatballSelection = [
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
];

const notPricedMeatballAdditions = [
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
];

const gemChoice = {
  name: "Iana's Gem (fried egg)",
  extra: 1.5,
  gf: true,
  addition: true
};

const addOnGem = {
  name: "Add-on",
  choices: [gemChoice]
};

const addOnGemAndSubSalad = {
  name: "Add-on",
  choices: [
    gemChoice,
    {
      name: "Substitute Caprese Salad",
      extra: 1.5,
      vegetarian: true,
      gf: true,
      addition: true
    }
  ]
};

const glutenFreePastaChoice = {
  name: "Alternative pasta",
  gf: true,
  choices: [
    { name: "Gluten-free penne", vegan: true, gf: true, addition: true }
  ]
};

const choiceOfSauce = {
  name: "Choice of Sauce",
  choices: [
    {
      name: "Roasted Tomato",
      gf: true,
      vegan: true,
      selection: true
    },
    {
      name: "White Wine Peppers and Onion",
      gf: true,
      vegan: true,
      selection: true
    },
    {
      name: "Creamy Provolone",
      gf: true,
      vegetarian: true,
      selection: true
    },
    {
      name: "Marsala Mushroom",
      gf: true,
      vegetarian: true,
      selection: true
    },
    {
      name: "Isabella’s Signature Pesto",
      gf: true,
      vegan: true,
      selection: true
    },
    { name: "Spicy Pork Sauce", gf: true, selection: true }
  ]
};

const veganOption = {
  name: "Vegan-option",
  choices: [{ name: "No cheese", vegan: true, addition: true }]
};

export const deserts = {
  category: "Desserts",
  items: [
    {
      name: "Artisanal Desserts",
      description:
        "From our very own La Differenza Bakery. Subject to availability, please call the store for info.",
      vegetarian: true,
      isPromo: true,
      image: Cake,
      price: ""
    },
    {
      name: "Cannoli",
      price: 2.5,
      vegetarian: true
    },
    {
      name: "Chef’s Selection Cookies",
      price: 2,
      vegetarian: true
    }
  ]
};

export default [
  {
    category: "Entrées",
    items: [
      {
        name: "Meatball Flight",
        price: 19.95,
        description: "5 balls served with side, focaccia, and fountain drink",
        image: VeggieFlight,
        vegan: true,
        gf: true,
        options: [
          {
            name: "Choice of Meatballs",
            minimum: 1,
            maximum: 5,
            choices: notPricedMeatballAdditions
          },
          addOnGem,
          choiceOfSide,
          {
            name: "Choice of Beverage",
            choices: [
              { name: "Coke", vegan: true, selection: true },
              { name: "Diet Coke", vegan: true, selection: true },
              { name: "Sprite", vegan: true, selection: true },
              { name: "Sweet Tea", vegan: true, selection: true },
              { name: "Unsweet Tea", vegan: true, selection: true },
              { name: "Lemonade", vegan: true, selection: true }
            ]
          }
        ]
      },
      {
        name: "Stoppe Trio",
        price: 11.95,
        description: "3 Meatballs served with side, stoppe Salad and focaccia",
        image: StoppeTrio,
        vegan: true,
        gf: true,
        options: [
          {
            name: "Choice of Meatballs",
            minimum: 1,
            maximum: 3,
            choices: notPricedMeatballAdditions
          },
          addOnGemAndSubSalad,
          choiceOfSide
        ]
      },
      {
        name: "Focaccia Pizza",
        price: 9.95,
        vegan: true,
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
              gemChoice,
              {
                name: "Mushrooms",
                extra: 1.5,
                gf: true,
                vegan: true,
                addition: true
              },
              {
                name: "Banana Peppers",
                extra: 1.5,
                gf: true,
                vegan: true,
                addition: true
              },
              {
                name: "Onions",
                extra: 1.5,
                gf: true,
                vegan: true,
                addition: true
              },
              {
                name: "Peppers",
                extra: 1.5,
                gf: true,
                vegan: true,
                addition: true
              },
              {
                name: "Tomatoes",
                extra: 1.5,
                gf: true,
                vegan: true,
                addition: true
              },
              { name: "Anchovies", extra: 1.5, gf: true, addition: true },
              {
                name: "Arugula",
                extra: 1.5,
                gf: true,
                vegan: true,
                addition: true
              }
            ]
          },
          {
            name: "Vegan",
            choices: [{ name: "no cheese", vegan: true, addition: true }]
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
        price: 12.95,
        description:
          "Served over Penne or Linguine. Stoppe Salad, Focaccia included",
        image: EggplantStack,
        vegan: true,
        options: [
          addonMeatballs,
          addOnGemAndSubSalad,
          {
            name: "Optional pasta",
            choices: [
              { name: "Linguine", extra: 2, addition: true },
              { name: "Penne", extra: 2, addition: true },
              { name: "Gluten-free penne", extra: 2, gf: true, addition: true }
            ]
          },
          {
            name: "Vegan-option",
            choices: [{ name: "No cheese", vegan: true, addition: true }]
          }
        ]
      },
      {
        name: "Cheese Tortellini",
        price: 11.95,
        description:
          "Pillowy cheese filled pasta in pink sauce with touch of garlic",
        image: Tortellini,
        vegetarian: true,
        options: [addonMeatballs, addOnGemAndSubSalad]
      },
      {
        name: "Cheese Tortellini tossed with Sausage Meatball in Pink Sauce",
        price: 12.95,
        options: [addonMeatballs, addOnGemAndSubSalad]
      },
      {
        name: "Baked Ziti",
        price: 11.95,
        gf: true,
        vegetarian: true,
        description:
          "Tossed with house-made 3 cheese mix, Roasted Tomato Sauce and Mozzarella",
        image: BakedZiti,
        options: [addonMeatballs, addOnGemAndSubSalad, glutenFreePastaChoice]
      },
      {
        name: "Pasta Fagioli",
        price: 10.95,
        description:
          "Hearty Vegetarian dish with Linguine, White Bean Ragu, Fresh Herbs and Spices",
        gf: true,
        image: PastaFagioli,
        options: [addonMeatballs, addOnGemAndSubSalad, glutenFreePastaChoice]
      },
      {
        name: "Pasta Aglia E Olio",
        price: 10.95,
        description:
          "Linguine tossed with Olive Oil, Red Pepper Flakes, a hint of Anchovies, Fresh Basil and Spices",
        image: PastaAglia,
        options: [addonMeatballs, addOnGemAndSubSalad, glutenFreePastaChoice]
      }
    ]
  },
  {
    category: "Panino or Sandwiches",
    items: [
      {
        name: "Meatball Smash",
        price: 9.95,
        description:
          "2 Meatballs, one style,  on Fresh Ciabatta Roll served with Stoppe Salad",
        vegan: true,
        image: Smash,
        options: [
          {
            name: "Choice of Meatball",
            choices: notPricedMeatballSelection
          },
          addOnGemAndSubSalad
        ]
      },
      {
        name: "Grande Smash",
        price: 11.95,
        description:
          '3 Meatballs one style on a 7" Ciabatta Roll served with Stoppe Salad',
        vegan: true,
        options: [
          {
            name: "Choice of Meatball",
            choices: notPricedMeatballSelection
          },
          addOnGemAndSubSalad
        ]
      },
      {
        name: "Guy Fieri's DDD Smash",
        price: 12.95,
        description:
          "Meatballs served on Freshly Baked Ciabatta Roll topped with Mozzarella, Polenta Ball and Gem (Fried Egg)  served with Stoppe Salad",
        vegan: true,
        options: [
          {
            name: "Choice of Meatball",
            choices: notPricedMeatballSelection
          },
          addOnGemAndSubSalad
        ]
      },
      {
        name: "Eggplant Panino",
        price: 10.95,
        description:
          "Breaded, Seasoned Eggplant topped with Fresh Mozzarella, sauteed peppers, onions, Fresh Arugula on Freshly baked Ciabiatta roll with Pesto Mayo",
        vegetarian: true,
        image: Panino
      }
    ]
  },
  {
    category: "Create your own bowl",
    items: [
      {
        name: "Pasta bowl",
        description: "Pasta with Signature sauces and seasonal vegetables",
        price: 11.95,
        image: PastaBowl,
        vegan: true,
        options: [choiceOfSauce, addonMeatballs, addOnGem]
      },
      {
        name: "Polenta bowl",
        description: "Creamy polenta and seasonal vegetables",
        price: 8.25,
        vegetarian: true,
        gf: true,
        options: [
          {
            name: "Seasonal Vegetables",
            maximum: 2,
            choices: [
              { name: "mushrooms", gf: true, vegan: true, addition: true },
              { name: "zucchini", gf: true, vegan: true, addition: true },
              { name: "peppers", gf: true, vegan: true, addition: true },
              { name: "onions", gf: true, vegan: true, addition: true }
            ]
          },
          addonMeatballs,
          addOnGem
        ]
      }
    ]
  },
  {
    category: "Salads",
    items: [
      {
        name: "Stoppe Salad",
        price: 7.95,
        gf: true,
        vegan: true,
        description:
          "Garden Fresh Arugula, Romaine, Cherry Tomatoes, Red Onions, Roasted Corn tossed with our Red Wine Vinaigrette. Served with Focaccia Bread",
        image: StoppeSalad,
        options: [veganOption]
      },
      {
        name: "Caprese Salad",
        price: 8.95,
        gf: true,
        vegetarian: true,
        description:
          "Fresh Mozzarella,Cherry Tomatoes tossed in Pesto and served over bed of greens served with Focaccia Bread",
        image: CapreseSalad
      },
      {
        name: "Mediterranean Farro Salad",
        price: 9.95,
        vegan: true,
        description:
          "Farro,Chick Peas, Tomatoes, onion, olives, Arugula, tossed with Red Wine Vinaigrette, toppped with Feta",
        options: [veganOption]
      },
      {
        name: "Roasted Vegetable Salad",
        gf: true,
        vegan: true,
        price: 7.5,
        description:
          "Sauteed seasonal vegetables seasoned with fresh garlic, herbs, served over a bed of greens with Focaccia Bread"
      },
      {
        name: "Roasted Shrimp Salad",
        price: 12.99,
        description:
          "With garlic and herbs served over a bed of greens with focaccia bread",
        gf: true
      }
    ]
  },
  {
    category: "Sides",
    items: [
      {
        name: "Creamy Polenta",
        price: 6.25,
        gf: true,
        vegetarian: true,
        image: Polenta
      },
      {
        name: "White Bean Ragu",
        price: 6.25,
        description: "Cannellini Bean, garlic, fresh Herbs and Seasonings",
        vegan: true,
        gf: true,
        image: WhiteBeanRagu
      },
      {
        name: "Linguine or Penne Pasta",
        price: 6.25,
        description: "Choice of Pasta tossed with one of our signature sauces",
        gf: true,
        vegan: true,
        options: [
          {
            name: "Pasta type",
            choices: [
              { name: "Linguine", selection: true },
              { name: "Penne", selection: true },
              { name: "Gluten-free penne", gf: true, selection: true }
            ]
          },
          choiceOfSauce
        ]
      }
    ]
  },
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
        vegan: true,
        gf: true,
        options: [
          {
            name: "Choice of Meatballs",
            minimum: 1,
            maximum: 4,
            choices: notPricedMeatballAdditions
          },
          addOnGem
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
        name: "Garlic Focaccia Bites",
        price: 6.95,
        vegan: true,
        image: FocacciaBites,
        options: [
          {
            name: "Alternative",
            choices: [{ name: "Vegan-option", vegan: true, addition: true }]
          }
        ]
      },
      {
        name: "Meatball Lettuce Wrap",
        price: 7.25,
        vegan: true,
        gf: true,
        options: [
          {
            name: "Choice of Meatballs",
            choices: notPricedMeatballSelection
          },
          addOnGem
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
            choices: notPricedMeatballAdditions
          },
          addOnGem
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
              { name: "Gator Ball", selection: true }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Bucket of Balls",
    items: [
      {
        name: "Bucket of Balls",
        price: 24.95,
        description:
          "13 Balls one style served with 6 pieces of Focaccia and Sauce",
        vegan: true,
        gf: true,
        image: BucketOfBalls,
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
              { name: "Jeffy’s Crab Ball", extra: 12, selection: true },
              { name: "Gator Meatball", extra: 12, selection: true },
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
          }
        ]
      }
    ]
  },
  deserts,
  {
    category: "Beverages",
    items: [
      {
        name: "Coke",
        description: "fountain soft drink",
        price: 2.5
      },
      {
        name: "Coke",
        description: "16oz Bottle",
        price: 2.95
      },
      {
        name: "Diet Coke",
        description: "fountain soft drink",
        price: 2.5
      },
      {
        name: "Diet Coke",
        description: "16oz Bottle",
        price: 2.95
      },
      {
        name: "Sprite",
        description: "fountain soft drink",
        price: 2.5
      },
      {
        name: "Sprite",
        description: "16oz Bottle",
        price: 2.95
      },
      {
        name: "Dr. Pepper",
        description: "16oz Bottle",
        price: 2.95
      },
      {
        name: "Diet Dr. Pepper",
        description: "16oz Bottle",
        price: 2.95
      },
      {
        name: "Lemonade",
        description: "fountain soft drink",
        price: 2.5
      },
      {
        name: "Sweet Tea",
        description: "fountain soft drink",
        price: 2.5
      },
      {
        name: "Unsweet Tea",
        description: "fountain soft drink",
        price: 2.5
      },
      {
        name: "San Pellegrino",
        description: "sparkling water",
        price: 3.5
      },
      {
        name: "Lorina Blood Orange",
        description: "Non-alcoholic sparking beverage",
        price: 3.5
      },
      {
        name: "Lorina Pink Lemonade",
        description: "Non-alcoholic sparking beverage",
        price: 3.5
      },
      {
        name: "Lorina Lemonade",
        description: "Non-alcoholic sparking beverage",
        price: 3.5
      },
      {
        name: "Espresso",
        price: 3.5
      },
      {
        name: "Double Espresso",
        price: 4.5
      },
      {
        name: "Cappuccino",
        price: 3.5,
        image: Cappuccino
      },
      {
        name: "Iced Cappuccino",
        price: 3.75
      }
    ]
  }
];
