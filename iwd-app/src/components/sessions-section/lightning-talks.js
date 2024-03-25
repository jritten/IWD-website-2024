import SeungjuChoi from "../../assets/speaker-imgs/SeungjuChoi.jpg";
import KanikaMohan from "../../assets/speaker-imgs/KanikaMohan.jpeg";
import KrissieKnight from "../../assets/speaker-imgs/KrissieKnight.jpeg";
import EunkyungOh from "../../assets/speaker-imgs/EunkyungOh.jpg";
import people from "../../assets/sessions-icons/people.png";

const talkSeminarsCards = [
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
];

export default talkSeminarsCards;
