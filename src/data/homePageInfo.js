import HeroImage from "../images/hero.png";
import AddressImage from "../images/address.png";
import BoxesImage from "../images/boxes.png";
import CalendarImage from "../images/calander.png";
import CustomiseImage from "../images/customise.png";
import Globeimage from "../images/globe.png";
import TrackingImage from "../images/tracking.png";

import FeedbackImage from "../images/feedback.gif";

import Honey from "../images/honey.png";
import Aesop from "../images/aesop.png";
import NotebookGroup from "../images/notebookGroup.png";
import Pinpack from "../images/pinpack.png";
import Mug from "../images/mug.png";
import PinPerson from "../images/pin-person.png";
import Pin from "../images/pin.png";
import PinCard from "../images/pin-card.png";

import DemoAnimation from "../images/demo-animation.gif";

const homePageInfo = [
  {
    hero: {
      title: "AirbnbLove",
      subtitle:
        "In CS, we like to send hosts and guests gifts to surpise and delight our Airbnb community. We call this AirbnbLove. CS Love team works with our vendor to enable Airbnb teams to gift globally, efficiently and with impact.",
      images: [
        [
          { image: HeroImage, gridColumn: "span 2", alignSelf: "end" },
          { image: Pinpack },
          { image: Mug },
        ],
        [
          { image: NotebookGroup, gridColumn: "span 2" },
          { image: Aesop, alignSelf: "end" },
          { image: Honey, alignSelf: "end" },
        ],
      ],
    },
    stats: [
      {
        title: "Considered gifts first",
        subtitle:
          "Choose from Airbnb’s exclusive gifts produced with care by a diverse, global network of responsible makers. Alternatively request a bespoke creation.",
        image: [PinPerson, Pin, PinCard],
        button: "View catalog",
        route: "/catalogue",
      },
      {
        title: "Our technology",
        subtitle:
          "A clever tool designed for gifting at scale. Mark an event and celebrate the occasion with an impactful, gifting experience.",
        button: "View demo",
        image: [DemoAnimation],
        isLast: true,
        content:
          "https://player.vimeo.com/video/465437126?h=140e929c06&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      },
    ],
    callouts: [
      {
        image: AddressImage,
        title: "No address, no problem",
        subtitle:
          "We need just a name, email address and country of destination to send a gift.",
      },
      {
        image: BoxesImage,
        title: "Bulk dispatch",
        subtitle: "Send a campaign to 10 or 10,000 recipients in minutes.",
      },
      {
        image: CalendarImage,
        title: "Long term gifting",
        subtitle:
          "Long term and recurring campaigns can be added to continuously",
      },
      {
        image: Globeimage,
        title: "Global logistics",
        subtitle:
          "We deliver gifts globally, at scale with speed. We have a powerful network to handle and track every gift.",
      },
      {
        image: TrackingImage,
        title: "Impact tracking",
        subtitle: "We follow up to track responses and measure impact.",
      },
      {
        image: CustomiseImage,
        title: "Customise your experience",
        subtitle: "Theme your gifting campaign to a specific event.",
      },
    ],
    feedback: {
      title: "We love sending #airbnblove",
      subtitle:
        "Have a look at some of the great feedback we’ve received on our gifts below.",
      image: FeedbackImage,
      button: "watch now",
    },
  },
];

export default homePageInfo;
