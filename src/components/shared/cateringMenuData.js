import BucketOfBalls from "./OrderModule/images/bucket-of-balls.jpg";
import EggplantStack from "./OrderModule/images/eggplant-stack.jpg";
import Tortellini from "./OrderModule/images/tortellini.jpg";
import BakedZiti from "./OrderModule/images/baked-ziti.jpg";
import CapreseSalad from "./OrderModule/images/caprese-salad.jpg";
import StoppeSalad from "./OrderModule/images/stoppe-salad.jpg";
import FocacciaGrande from "./OrderModule/images/focaccia-grande.jpg";
import Polenta from "./OrderModule/images/polenta.jpg";
import WhiteBeanRagu from "./OrderModule/images/white-bean-ragu.jpg";

const cateringMeatballChoices = [
  {
    name: "Nonna's traditional with roasted tomato sauce",
    selection: true
  },
  { name: "Spicy pork with spicy pork sauce", selection: true },
  {
    name: "Mac and cheese with roasted tomato and creamy provolone sauce",
    vegetarian: true,
    selection: true
  },
  {
    name: "Porcupine with creamy provolone sauce",
    selection: true
  },
  {
    name: "Sausage peppers & onions with white wine sauce",
    gf: true,
    selection: true
  },
  {
    name: "Sausage ball with creamy provolone sauce",
    gf: true,
    selection: true
  },
  {
    name: "Chicken parmigiana with roasted tomato sauce and mozzarella",
    gf: true,
    selection: true
  },
  {
    name: "Chicken marsala with marsala mushroom sauce",
    gf: true,
    selection: true
  },
  {
    name: "Chicken buffalo bleu with buffalo sauce and bleu cheese crumbles",
    gf: true,
    selection: true
  },
  { name: "Lamb with tzatziki sauce", gf: true, selection: true },
  {
    name: "Vegetarian with signature pesto",
    gf: true,
    vegetarian: true,
    selection: true
  },
  {
    name: "Eggplant, zucchini, quinoa with signature pesto",
    gf: true,
    vegetarian: true,
    selection: true
  },
  {
    name: "Eggplant, zucchini, quinoa with vegan pesto",
    gf: true,
    vegan: true,
    selection: true
  },
  {
    name: "Polenta ball with roasted tomato sauce",
    gf: true,
    vegetarian: true,
    selection: true
  },
  {
    name: "Vegan Ball w/ vegan pesto",
    gf: true,
    vegan: true,
    selection: true
  }
];

const choiceOfPasta = {
  name: "Choice of Pasta",
  choices: [
    { name: "Penne", vegan: true, selection: true },
    { name: "Gluten-free Penne", gf: true, vegan: true, selection: true }
  ]
};
const choiceOfSauce = {
  name: "Choice of Sauce",
  choices: [
    { name: "Roasted Tomato", gf: true, vegan: true, selection: true },
    { name: "Creamy Provolone", gf: true, vegetarian: true, selection: true },
    {
      name: "White wine with Peppers and Onions",
      vegan: true,
      gf: true,
      selection: true
    },
    {
      name: "Isabella’s Signature Pesto",
      gf: true,
      vegetarian: true,
      selection: true
    },
    { name: "Vegan Pesto", gf: true, vegan: true, selection: true },
    { name: "Marsala Mushroom", gf: true, vegetarian: true, selection: true },
    { name: "Spicy Pork", gf: true, selection: true }
  ]
};

const veganOption = {
  name: "Vegan-option",
  choices: [{ name: "No cheese", vegan: true, addition: true }]
};

export default [
  {
    category: "Pan Meatballs",
    items: [
      {
        name: "15 meatballs",
        price: 29.95,
        description: "Half pan, serves 10. Includes sauce and Focaccia.",
        image: BucketOfBalls,
        gf: true,
        vegan: true,
        options: [
          {
            name: "Choice of Meatball",
            choices: [
              ...cateringMeatballChoices,
              {
                name: "Crab Balls with pepper remoulade",
                extra: 9,
                selection: true
              },
              {
                name: "Gator Balls with spicy lemon aioli",
                extra: 9,
                selection: true
              }
            ]
          }
        ]
      },
      {
        name: "30 meatballs",
        price: 59.95,
        description: "Full pan, serves 20. Includes Sauce and Focaccia.",
        image: BucketOfBalls,
        gf: true,
        vegan: true,
        options: [
          {
            name: "Choice of Meatball",
            choices: [
              ...cateringMeatballChoices,
              {
                name: "Crab Balls with pepper remoulade",
                extra: 13,
                selection: true
              },
              {
                name: "Gator Balls with spicy lemon aioli",
                extra: 13,
                selection: true
              }
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
        vegetarian: true,
        image: BakedZiti
      },
      {
        name: "Baked Ziti (full-pan)",
        price: 90,
        description: "Serves 25",
        vegetarian: true,
        image: BakedZiti
      },
      {
        name: "Eggplant Stack (half-pan)",
        price: 60,
        description: "Serves 10",
        image: EggplantStack,
        vegetarian: true
      },
      {
        name: "Eggplant Stack (full-pan)",
        price: 115,
        description: "Serves 20",
        image: EggplantStack,
        vegetarian: true
      },
      {
        name: "Cheese Tortellini (half-pan)",
        price: 65,
        description: "Serves 10",
        vegetarian: true,
        image: Tortellini
      },
      {
        name: "Cheese Tortellini (full-pan)",
        price: 120,
        description: "Serves 20",
        vegetarian: true,
        image: Tortellini
      },
      {
        name: "Cheese Tortellini with sausage (half-pan)",
        price: 70,
        description: "Serves 10",
        image: Tortellini
      },
      {
        name: "Cheese Tortellini with sausage (full-pan)",
        price: 125,
        description: "Serves 20",
        image: Tortellini
      },
      {
        name: "Lasagna Bolognese (half-pan)",
        price: 70,
        description: "Serves 10"
      },
      {
        name: "Lasagna Bolognese (full-pan)",
        price: 125,
        description: "Serves 20"
      },
      {
        name: "Pasta Fagioli (half-pan)",
        price: 60,
        description: "Serves 10",
        vegetarian: true
      },
      {
        name: "Pasta Fagioli (full-pan)",
        price: 90,
        description: "Serves 20",
        vegetarian: true
      },
      {
        name: "Pasta Aglia e Olio (half-pan)",
        price: 60,
        description: "Serves 10"
      },
      {
        name: "Pasta Aglia e Olio (full-pan)",
        price: 90,
        description: "Serves 20"
      }
    ]
  },
  {
    category: "Salads",
    items: [
      {
        name: "Stoppe Salad (half-pan)",
        price: 50,
        vegan: true,
        gf: true,
        description: "Serves 10. Comes with focaccia.",
        image: StoppeSalad,
        options: [veganOption]
      },
      {
        name: "Stoppe Salad (full-pan)",
        price: 90,
        vegan: true,
        gf: true,
        description: "Serves 20. Comes with focaccia.",
        image: StoppeSalad,
        options: [veganOption]
      },
      {
        name: "Caprese Salad (half-pan)",
        price: 60,
        description: "Serves 10. Comes with focaccia.",
        vegetarian: true,
        gf: true,
        image: CapreseSalad
      },
      {
        name: "Caprese Salad (full-pan)",
        price: 120,
        description: "Serves 20. Comes with focaccia.",
        vegetarian: true,
        gf: true,
        image: CapreseSalad
      },
      {
        name: "Roasted Vegetable Salad (half-pan)",
        price: 60,
        description: "Serves 10. Comes with focaccia.",
        vegan: true,
        gf: true
      },
      {
        name: "Roasted Vegetable Salad (full-pan)",
        price: 120,
        description: "Serves 20. Comes with focaccia.",
        vegan: true,
        gf: true
      },
      {
        name: "Mediterranean Farro Salad (half-pan)",
        price: 60,
        description: "Serves 10. Comes with focaccia.",
        vegan: true,
        options: [veganOption]
      },
      {
        name: "Mediterranean Farro Salad (full-pan)",
        price: 120,
        description: "Serves 20. Comes with focaccia.",
        vegan: true,
        options: [veganOption]
      },
      {
        name: "Roasted Shrimp Salad (half-pan)",
        price: 75,
        description: "Serves 10. Comes with focaccia.",
        gf: true
      },
      {
        name: "Roasted Shrimp Salad (full-pan)",
        price: 140,
        description: "Serves 20. Comes with focaccia.",
        gf: true
      }
    ]
  },
  {
    category: "À la Carte Sides",
    items: [
      {
        name: "Penne Pasta (half-pan)",
        price: 40,
        description: "Serves 10",
        gf: true,
        vegan: true,
        options: [choiceOfPasta, choiceOfSauce]
      },
      {
        name: "Penne Pasta (full-pan)",
        price: 80,
        description: "Serves 20",
        gf: true,
        vegan: true,
        options: [choiceOfPasta, choiceOfSauce]
      },
      {
        name: "White Bean Ragu (half-pan)",
        price: 60,
        description: "Serves 10",
        vegan: true,
        gf: true,
        image: WhiteBeanRagu
      },
      {
        name: "Creamy Polenta (half-pan)",
        price: 50,
        description: "Serves 10",
        vegetarian: true,
        gf: true,
        image: Polenta
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
            name: "Choice of Sauce",
            choices: [
              { name: "Roasted Tomato Sauce", vegan: true, vegetarian: true, selection: true },
              { name: "Pesto", gf: true, vegetarian: true, selection: true },
              { name: "Vegan Pesto", gf: true, vegan: true, selection: true }
            ]
          },
          // included 2      ALL VEGAN
            // Banana Peppers
            // onions
            // peppers
            // tomatoes
            // anchovies
            // arugula
            // mushrooms
          // extra after 2 is $1.50
            // Banana Peppers
            // onions
            // peppers
            // tomatoes
            // anchovies
            // arugula
            // mushrooms


            // these should be $1.50 extra
          {
            name: "Choice of Toppings",
            minimum: 1,
            maximum: 2,
            choices: [
              { name: "Nonna's Traditional Italian", addition: true },
              { name: "Sausage", gf: true, addition: true },
              { name: "Chicken Parmigiana", gf: true, addition: true },
              { name: "Chicken Buffalo Bleu", gf: true, addition: true },
              { name: "Vegetarian", gf: true, vegetarian: true, addition: true }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Desserts",
    items: [
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
