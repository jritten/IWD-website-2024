import SeungjuChoi from "../../assets/speaker-imgs/SeungjuChoi.jpg";
import KanikaMohan from "../../assets/speaker-imgs/KanikaMohan.jpeg";
import KrissieKnight from "../../assets/speaker-imgs/KrissieKnight.jpeg";
import AlissaSevrioukova from "../../assets/speaker-imgs/AlissaSevrioukova.jpeg";
import EunkyungOh from "../../assets/speaker-imgs/EunkyungOh.jpg";
import IdaByrdHill from "../../assets/speaker-imgs/IdaByrdHill.jpeg";
import breakfast from "../../assets/sessions-icons/breakfast.png";
import gifts from "../../assets/sessions-icons/gifts.png";
import lunch from "../../assets/sessions-icons/lunch.png";
import people from "../../assets/sessions-icons/people.png";
import welcome from "../../assets/sessions-icons/welcome.png";
import drinks from "../../assets/sessions-icons/drinks.png";

const agendaCards = [
  {
    title: "Breakfast & Ice Breaker",
    imageUrl: breakfast,
    time: "8:30 AM",
    place: "Main Hall",
    description:
      "Start your day with a delicious breakfast and an engaging ice breaker activity",
    type: "social",
    showImageBorder: false,
  },
  {
    title: "Welcome & Intros",
    imageUrl: welcome,
    time: "9:00 AM",
    place: "Main Hall",
    description:
      "Get introduced to the event and meet the organizers from NSBE, SHPE, and SWE Detroit Professional Chapters!",
    type: "regular",
    speaker: "NSBE, SHPE and SWE Detroit Professional Chapters",
    showImageBorder: false,
  },
  {
    title: "Lightning Talk #1 - Tech, Design & AI",
    imageUrl: SeungjuChoi,
    time: "9:30 AM",
    place: "Conference Room A",
    description:
      "Join Seungju Choi from the University of Michigan's Human System Integration Lab for an insightful discussion on drivers' performance, distraction, and satisfaction.",
    type: "regular",
    speaker:
      "Seungju Choi @ University of Michigan, Human System Integration Lab",
    showImageBorder: true,
  },
  {
    title: "Lightning Talk #2 - Detroit Artistry: Women Artists Making Waves",
    imageUrl: people,
    time: "10:00 AM",
    place: "Conference Room B",
    description:
      "Immerse yourself in the soulful creativity of Detroit. Discover the heartbeat of a city known for its vibrant cultural tapestry and artistic flair.",
    type: "regular",
    speaker: "Aya Hasan @ Plagens and Melinda Rushing @ University of Michigan",
    showImageBorder: false,
  },
  {
    title:
      "Lightning Talk #3 - Career Development: Mastering the Art of Personal Branding ",
    imageUrl: KanikaMohan,
    time: "10:30 AM",
    place: "Conference Room B",
    description:
      "Uncover the power of personal branding with Kanika Mohan from Dell Technologies. Learn how to craft a unique brand that captivates employers and propels your career to new heights.",
    type: "regular",
    speaker: " Kanika Mohan @ Dell Technologies",
    showImageBorder: true,
  },

  {
    title: "Lightning Talk #4 - Financial Wellness for Women",
    imageUrl: EunkyungOh,
    time: "11:00 AM",
    place: "Conference Room C",
    description:
      "Join Nana Oh from New York Life Insurance Company for an empowering discussion on Financial Wellness for Women. Gain valuable insights and strategies to take control of your financial future.",
    type: "regular",
    speaker: "Eunkyung (Nana) Oh @ New York Life Insurance Company",
    showImageBorder: true,
  },
  {
    title:
      "Lightning Talk #5 - Empower Your Journey: Unleashing Potential & Embracing Possibilities ",
    imageUrl: KrissieKnight,
    time: "11:30 AM",
    place: "Conference Room C",
    description:
      "Embark on a transformative journey with Krissie Knight from Apple Developer Academy. Discover the keys to unlocking your full potential and embracing a future filled with endless possibilities.",
    type: "regular",
    speaker: "Krissie Knight @ Apple Developer Academy",
    showImageBorder: true,
  },
  {
    title: "Lunch Break & Networking",
    imageUrl: lunch,
    time: "12:00 PM",
    place: "Main Hall",
    description:
      "Enjoy a delicious lunch and network with other attendees! Use this time to connect, share ideas, and build relationships.",
    type: "social",
    speaker: "John Doe",
    showImageBorder: false,
  },
  {
    title: "Afternoon Keynote",
    imageUrl: AlissaSevrioukova,
    time: "1:00 PM",
    place: "Main Hall",
    description:
      "Join DTE Energy for an inspiring afternoon keynote, featuring Alissa Sevrioukova, Chief of Staff | Manager, Public Affairs.",
    type: "regular",
    speaker:
      "Alissa Sevrioukova, Chief of Staff | Manager, Public Affairs @ DTE Energy",
    showImageBorder: true,
  },
  {
    title:
      "Panel Discussion - For Detroiters, By Detroiters: Impact the Future of Detroit",
    imageUrl: IdaByrdHill,
    time: "2:00 PM",
    place: "Main Hall",
    description:
      "Detroit is me and Detroit is you. Explore ways to impact the future of Detroit together and contribute to its growth and development.",
    type: "panel",
    moderator: "Ida Byrd-Hill",
    panelists: "Alissa Sevrioukova, Krissie Knight",
    showImageBorder: true,
  },
  {
    title: "Closing Remarks & Giveaways",
    imageUrl: gifts,
    time: "3:30 PM",
    place: "Main Hall",
    description: "Join us for closing remarks and exciting giveaways!",
    type: "regular",
    speaker: "NSBE, SHPE and SWE Detroit Professional Chapters",
    showImageBorder: false,
  },
  {
    title: "Networking Happy Hour",
    imageUrl: drinks,
    time: "4:00 PM",
    place: "Main Hall",
    description: "Wind down and network with fellow attendees over drinks",
    type: "social",
    speaker: "John Doe",
    showImageBorder: false,
  },
];

export default agendaCards;
