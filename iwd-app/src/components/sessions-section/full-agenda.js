import breakfast from "../../assets/sessions-icons/breakfast.png";
import drinks from "../../assets/sessions-icons/drinks.png";
import gifts from "../../assets/sessions-icons/gifts.png";
import lunch from "../../assets/sessions-icons/lunch.png";
import yoga from "../../assets/sessions-icons/yoga.svg"; 
import people from "../../assets/sessions-icons/people.png";
import welcome from "../../assets/sessions-icons/welcome.png";
import panel from "../../assets/sessions-icons/panel.png";

import BrittanyMcGee from "../../assets/speaker-imgs/BrittanyMcGee.jpg"; 
// import HodaSolati from "../../assets/speaker-imgs/HodaSolati.png"; 
import JCPrice from "../../assets/speaker-imgs/JCPrice.jpeg";
// import JennaRitten from "../../assets/speaker-imgs/JennaRitten.jpg";
import JessicaHoopfer from "../../assets/speaker-imgs/JessicaHoopfer.jpg";
// import KanikaMohan from "../../assets/speaker-imgs/KanikaMohan.jpeg";
import KavithaBangalore from "../../assets/speaker-imgs/KavithaBangalore.jpg";
import LorrenaBlack from "../../assets/speaker-imgs/LorrenaBlack.jpg"
import MattalynnDarden from "../../assets/speaker-imgs/MattalynnDarden.jpeg";
import ShantaleaJohns from "../../assets/speaker-imgs/ShantaleaJohns.jpg";
// import ShimaSolati from "../../assets/speaker-imgs/ShimaSolati.jpg";
import ShrutiAgarwal from "../../assets/speaker-imgs/ShrutiAgarwal.png";
import ShimaHoda from "../../assets/speaker-imgs/ShimaHoda.png";

const agendaCards = [
  {
    title: "Breakfast & Registration",
    imageUrl: breakfast,
    time: "8:30 AM",
    // place: "G.O. 9th floor auditorium",//"Main Hall"
    description:
      "Start your day with a delicious breakfast ",
    type: "social",
    showImageBorder: false,
  },
  {
    title: "Mindfulness & Meditative Yoga",
    imageUrl: yoga, // need to change image
    time: "8:30 AM",
    // place: "G.O. 9th floor auditorium",//"Main Hall"
    description:
      "Start your day with a stress relieving and calming yoga session!",
    type: "social",
    // speaker: "NSBE, SHPE and SWE Detroit Professional Chapters",
    showImageBorder: false,
  },
  {
    title: "Welcome and Opening Remarks",
    imageUrl: welcome,
    time: "9:30 AM",
    // place: "G.O. 9th floor auditorium",
    type: "regular",
    description: "A warm welcome and a grand kickoff to the IWD Innovation Summit 2025 by the Women Techmakers and GDG Detroit team.",
    speaker:
      "Compass Detroit & Google Women Techmakers",
    showImageBorder: false,
  },
  {
    title: "Unlock Your Future: How to Master Community Networks for Invisible Career Advantages",
    imageUrl: JCPrice,
    time: "9:45 AM",
    // place: "G.O. 9th floor auditorium",
    description:
      "Enlightening presentation on ways to enhance your professional development through utilizing networks",
    type: "regular",
    speaker: "JC Price @ Scope Focus",
    showImageBorder: true,
  },
  {
    title:
      "The AI Era and Your Digital Footprint: What You Need to Know",
    imageUrl:  KavithaBangalore,
    time: "10:00 AM",
    // place: "G.O. 9th floor auditorium",
    description:
      "Learn the risks of AI-driven data collection and get practical tips to protect your privacy and control your digital identity in today's connected world.",
    type: "regular",
    speaker: "  Kavitha Bangalore @ Cleveland Clinic",
    showImageBorder: true,
  },

  {
    title: "Inclusive Smart Mobility: Enhancing Social Inclusion through Technology",
    imageUrl: ShimaHoda,
    time: "10:30 AM",
    // place: "G.O. 9th floor auditorium",
    description:
      "This session will explore the design process, challenges, and innovations behind creating a truly inclusive parking solution.",
    type: "regular",
    speaker: "Hoda Solati & Shima Solati @ BraunAbility",
    showImageBorder: true,
  },
  {
    title:
      "Your Natural Blueprint: Redefining Your Impact and Presence, Unlocking Leadership",
    imageUrl: ShrutiAgarwal,
    time: "11:00 AM",
    // place: "G.O. 9th floor auditorium",
    description:
      "Discover how to align your unique strengths with the power of AI to create lasting impact. This session will help you move beyond personal success to build a legacy that inspires change in your organization, community, and future leaders.",
    type: "regular",
    speaker: "Shruti Agarwal @ Levelwing Media LLC",
    showImageBorder: true,
  },
  {
    title: " Building a Global Tech Career Through Experience",
    imageUrl: JessicaHoopfer,
    time: "11:30 AM",
    // place: "G.O. 9th floor auditorium",//"Main Hall"
    description:
      "Learn how to build a global tech career without a traditional path. This session explores how experience, remote work, and inclusion—not location or degrees—are redefining success. Discover how women are leading in AI and how you can break in, level up, and lead from anywhere.",
    type: "regular",
    speaker: "Jessica Hoopfer, Manager, North America - Enterprise Sales @ Checkout.com",
    showImageBorder: true,
  },
  {
    title: "Speed Networking with Scope Focus",
    imageUrl: people,
    time: "12:00 PM",
    // place: "G.O. 9th floor auditorium",//"Main Hall"
    description:
      "Make fast, focused connections through guided conversations centered around your interests, goals, or expertise.",
    type: "social",
    speaker:
      "JC Price @ Scope Focus",
    showImageBorder: true,
  },
  {
    title:
      "Lunch Break & Networking",
    imageUrl: lunch,
    time: "12:15 PM",
    description: "Take a break, grab a bite, and connect with fellow attendees. This is a great time to recharge, share ideas, and build meaningful connections in a relaxed setting.",
    // place: "G.O. 9th floor auditorium",//"Main Hall"
    type: "social",
    showImageBorder: false,
  },
  {
    title: " Redefine What's Possible Panel Discussion",
    imageUrl: panel,
    time: "1:00 PM",
    description:
      "Redefine for growth and development. Join a dynamic conversation with trailblazers who’ve challenged norms, broken barriers, and reimagined success in tech and beyond. This panel will explore how bold ideas, inclusive leadership, and unconventional journeys are transforming what’s possible for the next generation of innovators.",
    type: "panel",
    moderator: "Tim Moore",
    panelists: "Ida Byrd-Hill (CEO @ Automation Workz), Lia Moore (CEO @ Coo-Lio), Lisa McKenzie (President & General Manager @ Freudenberg e-Power Systems), and Megan Torrance (CEO & Chief Energy Officer @ TorranceLearning) ",
    showImageBorder: false,
  },
  {
    title: "Resilient Minds, Thriving Careers: Mental Health Strategies for Women in Tech",
    imageUrl: ShantaleaJohns,
    time: "2:00 PM",
    // place: "Main Hall",
    description: "This session will provide actionable mental health strategies tailored for women in tech, empowering them to sustain resilience, manage stress, and cultivate a thriving career.",
    type: "regular",
    speaker: "Shantalea Johns",
    showImageBorder: true,
  },
  {
    title: "Breaking into Cybersecurity",
    imageUrl: MattalynnDarden,
    time: "2:30 PM",
    // place: "Main Hall",
    description: "Cybersecurity can feel overwhelming, but it doesn’t have to be. This session is designed for small business owners and entrepreneurs who want to understand cybersecurity in a simple, practical way. Learn how to identify risks, protect your data, and build a security-first mindset—without needing a big budget or technical expertise. Whether you are just starting out or looking to strengthen your defenses, you will leave with actionable steps to secure your business.",
    type: "regular",
    speaker: "Mattalynn Darden",
    showImageBorder: true,
  },
  {
    title: "When the Imposter is Me: Overcoming Self-Doubt to Lead and Innovate",
    imageUrl: LorrenaBlack,
    time: "3:00 PM",
    // place: "Main Hall",
    description: "In this engaging session, we will break down the imposter phenomenon, why it happens, and how to break free from it. Through interactive discussion and real-world strategies, attendees will learn how to reframe self-doubt, build confidence, and step into their leadership potential—without waiting for external validation.",
    type: "regular",
    speaker: "Lorrena Black, Founder and CEO @ She Served LLC and Kanika Mohan, Product Manager @ IBM",
    showImageBorder: true,
  },
  {
    title: "Tech Unfiltered: Changing The Game",
    imageUrl: BrittanyMcGee,
    time: "3:30 PM",
    // place: "Main Hall",
    description: "Technology in the current days. This session dives into the real stories behind breaking into tech—no gatekeeping, no fluff. We’ll explore how unconventional paths, diverse voices, and unapologetic authenticity are reshaping the industry and driving meaningful innovation.",
    type: "regular",
    speaker: "Brittany McGee, Founder and CEO @ OptimizeEV",
    showImageBorder: true,
  }, 
  {
    title: "Closing Remarks & Prizes",
    imageUrl: gifts,
    time: "4:00 PM",
    // place: "Main Hall",
    description: "Join us for closing remarks and exciting giveaways!",
    type: "social",
    // speaker: "John Doe",
    showImageBorder: false,
  },  
  {
    title: "Happy Hour & Networking",
    imageUrl: drinks,
    time: "4:30 PM",
    // place: "Main Hall",
    description: "Wind down and network with fellow attendees over drinks",
    type: "social",
    // speaker: "John Doe",
    showImageBorder: false,
  }, 

];

export default agendaCards;
