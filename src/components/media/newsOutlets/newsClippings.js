import TenBest from "./images/10best.jpg";
import EdibleBronx from "./images/edible-bronx.png";
import Orlando from "./images/orlando.png";
import RealRadio from "./images/realradio.png";
import UniqueEats from "./images/unique-eats.jpg";
import Summit from "./images/summit.png";

import SummitPDF from "./files/summit.pdf";
import UniqueEatsPDF from "./files/unique-eats.pdf";

export default [
  {
    name: "Unique Eats Orlando",
    image: UniqueEats,
    linkTo: UniqueEatsPDF,
    text:
      "Chef Isabella Morgia di Vicari, who owns and operates this homey spot with her husband, Jeff Morgia, really, really knows meatballs."
  },
  {
    name: "Summit Magazine",
    image: Summit,
    linkTo: SummitPDF,
    text:
      "The Meatball Stoppe grabs you by the hand and brings you right into an Italian home full of good food and great company."
  },
  {
    name: "Orlando Sentinel",
    image: Orlando,
    linkTo:
      "http://www.orlandosentinel.com/entertainment/restaurants/foodie/os-more-than-just-meatballs-at-the-meatball-stoppe-20160503-story.html",
    text:
      "From the moment I walked into The Meatball Stoppe, owner Isabella Morgia di Vicari made me feet at home with her hug and exuberant personality."
  },
  {
    name: "Real Radio 104.1",
    image: RealRadio,
    audio:
      "https://firebasestorage.googleapis.com/v0/b/the-meatball-stoppe.appspot.com/o/PrimetimeKitchenInterview.mp3?alt=media&token=c7e90421-1cc9-4e5c-b048-e1fd8b696de6",
    text:
      "The chicken meatball, buffalo style, balanced with blue cheese on top––that with the white-bean ragout is crazy killer."
  },
  {
    name: "USA Today 10 Best",
    image: TenBest,
    linkTo:
      "http://www.10best.com/destinations/florida/orlando/restaurants/family-friendly/",
    text:
      "Orlando's #1 ranked most family-friendly restaurant and #7 best value in USA Today's travel guide."
  },
  {
    name: "Edible Bronx",
    image: EdibleBronx,
    linkTo:
      "https://www.facebook.com/tastyladies.bx/videos/673459176352442/?t=109",
    text:
      "If ever I had a last meal this would be it! If you’re a Floridian who never had real Italian food, you need to get here."
  }
];
