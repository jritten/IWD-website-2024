import SeungjuChoi from "../../assets/speaker-imgs/SeungjuChoi.jpg";
import KanikaMohan from "../../assets/speaker-imgs/KanikaMohan.jpeg";
import KrissieKnight from "../../assets/speaker-imgs/KrissieKnight.jpeg";
import AlissaSevrioukova from "../../assets/speaker-imgs/AlissaSevrioukova.jpeg";
import EunkyungOh from "../../assets/speaker-imgs/EunkyungOh.jpg";
import IdaByrdHill from "../../assets/speaker-imgs/IdaByrdHill.jpeg";
import MelindaRushing from "../../assets/speaker-imgs/melinda.JPG";
import AyaHasan from "../../assets/speaker-imgs/aya.JPG";
import TraceyWilliams from "../../assets/speaker-imgs/tracey.png";


import Bell from "../../assets/flowers/Bell.png";
import BellBlue from "../../assets/flowers/bellBlue.png";
import Hydrangea from "../../assets/Hydrangea.png";
import blueHydrangea from "../../assets/flowers/blueHydra.png";
import Dandelion from "../../assets/flowers/Dandelion.png";
import osteoPink from "../../assets/flowers/osteoPink.png";
import rose from "../../assets/flowers/Soft red flower.png";
import purpleHydra from "../../assets/flowers/purpleHydra.png";

const speakersData = [
  {
    imageurl: AlissaSevrioukova,
    name: "Alissa Sevrioukova",
    position: "Chief of Staff",
    company: "DTE Energy",
    flower: Bell,
  },
  {
    imageurl: SeungjuChoi,
    name: "Seungju Choi",
    position: "UX Researcher",
    company: "UofM, Human System Integration Lab",
    description:
      "3+ Years UXer with a Strong Entrepreneurial, Design, Research Experiences. Previous Edutech Startup Founder, Conducted Mixed Method Research on HCI, Automotive, Human-AI teaming, Voice UX, etc.",
    flower: Hydrangea,
  },
  {
    imageurl: MelindaRushing,
    name: "Melinda Rushing",
    position: "Data Scientist",
    company: "University of Michigan",
    description:
      "Melinda Ruth Rushing is a visual artist who primarily creates graphite drawings and linoleum block prints that comment on the black experience. Rushing completed a minor in Studio Art at the University of Houston during her undergraduate studies in 2010. In 2020, Rushing began her art career in her native state, Texas, as she completed a PhD of Public Health from the University of Texas Health Science Center. In August 2021, Rushing relocated to Detroit Michigan after being recruited for a Health Services Research Postdoctoral position at the University of Michigan. Her research focuses on health disparities and inequities among marginalized populations who are living sickle cell disease and other chronic illnesses. Rushing believes art can heal, encourage, and expose. With each piece, she aims to evoke emotion, so the viewer can connect with the imagery. In 2020, Rushing was 1 of the 3 finalists in the Chicago based Gallery 19 Meed4: Power of Identity competition. Following the competition, Rushing’s piece, Ankara Body: Uncovering, was selected to be in the Gallery 19’s Best of the Year Group Exhibition curated by Tony Reyes in 2021. Since then, Ankara Body: Uncovering was added to Detroit’s Irwin Gallery owner Misha Omisha Gowan’s collection in 2022. Over the last year, Rushing has displayed in prominent exhibitions: the Gilda Snowden Scarab Club Group Exhibition juried by printmaker Rashaun Rucker, the Hatch 17 Group Exhibition juried by painter and educator Nancy Mitchnick, and she was selected to participate in the Museum of Contemporary Art Detroit (MOCAD) Monster Drawing Rally where she created two pieces to be sold by the museum. Rushing was also commissioned to create a piece for the California Nurses’ Association Art Show and recently was accepted into the Atlanta Printmakers Biennial Exhibition juried by Miranda K. Metcalf.",
    flower: purpleHydra,
  },
  {
    imageurl: AyaHasan,
    name: "Aya Hasan",
    position: "Medical Device Consultant",
    company: "Plagens",
    description:
      "Aya Hasan is a multifaceted artist whose work can be succinctly described as social studies. Hasan’s art delves into how the world processes and intertwines with their cultural and personal identity. Hasan paints ideas inspired by their global travels, research assistance, and study abroad advising experiences during college. Aya Hasan feels a responsibility to educate and ignite hope, combating the perils of ignorance through art. Beyond being a successful artist, she is also the founder of the Dearborn Fine Arts Club, taking place weekly at the Arab American National Museum. Through her organization, she provides local artists with the platform, connection, and education they need in order to be successful in their art careers. Hasan believes in the power of community and the bridges that connect them. She believes in the power of rising as a whole rather than one.",
    flower: BellBlue,
  },
  {
    imageurl: KanikaMohan,
    name: "Kanika Mohan",
    position: "Product Manager Intern",
    company: "Dell Technologies",
    description:
      "Kanika, a Computer Science student at the University of Michigan-Dearborn, has a diverse professional background with internships in automotive, aerospace, and tech industries. A proactive go-getter early in her career, she is also a lifelong learner driven by passion. Currently, she's part of the founding team of Product Haven, a community with 1,500+ students interested in Product Management. In her first 3 years of college, Kanika earned recognition as the Midwest Student of the Year, EV Scholar, $25,000 Altair Engineering Scholar, $10,000 Taco Bell Foundation Scholar, Harvard WeCode Scholar, and 1 of 3 State of Michigan ChangeMakers. Coming from a village in rural Punjab, India, she is motivated to build a robust career foundation and inspire more women to do the same.",
    flower: blueHydrangea,
  },
  {
    imageurl: EunkyungOh,
    name: "Eunkyung (Nana) Oh",
    position: "Financial Services Agent",
    company: "New York Life Insurance Company",
    description:
      "Eunkyung “Nana” Oh is a financial educator from New York Life. She enjoys helping people and tries to help to make communities better. She was a teacher for 20 years in Korea and moved to the USA in 2019. She has a master’s degree in Drama and Theater for the Young from EMU. She is a committee member of Washtenaw Literacy and the organizer of Korean and English Language and Culture Exchange meetup with her husband. She is a BTS cultural ambassador.",
    flower: Dandelion,
  },
  {
    imageurl: KrissieKnight,
    name: "Krissie Knight",
    position: "UX/UI Designer",
    company: "Apple Developer Academy",
    description:
      "Apple and Michigan State University-trained UX/UI designer with a background in fashion design. Combining technical prowess with creative flair, Krissie crafts intuitive and visually captivating interfaces. Known for a user-centric approach, Krissie delivers innovative solutions that exceed expectations. As an entrepreneur, Krissie fosters meaningful client relationships while staying ahead of industry trends. Redefining UX/UI boundaries, Krissie inspires meaningful digital connections.",
    flower: osteoPink,
  },
  {
    imageurl: IdaByrdHill,
    name: "Ida Byrd-Hill",
    position: "CEO & Founder",
    company: "Automation Workz",
    description:
      "Ida Byrd-Hill is a futurist, an urban economist, and CEO of Automation Workz, which has been ranked in the Top 10 Cybersecurity Bootcamps in the US. graduate of University of Michigan - Ann Arbor with a BA in Economics and Jack Welch Management Institute at Strayer University with an MBA. Ida became a Cobol expert leading the automation of several banks and retail chains. She is the author of 8 books, including Invisible Talent Market-Solving the Talent Shortage Without Outsourcing and Visas. She serves as a Detroit Regional Chamber Director and member of, AIAG, ATD, Electric Vehicle Jobs Academy, German American Business Council, NABJ, NMSDC and SHRM. Contact: (313) 483-2126; ida@autoworkz.org; www.autoworkz.org",
    flower: rose,
  },
  {
    imageurl: TraceyWilliams,
    name: "Tracey Williams",
    position: "Consultant",
    company: "Oakland Thrive",
    description:
      "Community Outreach | Entrepreneur | Art Advocate Tracey F. Williams has years of experience in the corporate world yet is known for her unwavering commitment to community outreach, supporting entrepreneurship, and work with artists; all with a passion for creating positive change. Tracey obtained her BA from Michigan State University and earned her MS in Internet Marketing at Full Sail University. Yet, it was while working with the Charles H. Wright Museum of African American History, Tracey met the urgency to create opportunity for local Black businesses, artists, and artisans and focused efforts to showcase emerging local artists, which had not been done before. She also launched the museum’s ecommerce division, reaching audiences throughout the country, yearning for merchandise celebrating African American history and culture. Tracey is deeply committed to making a meaningful difference in economic development wherever possible, for the African American community. As a result, she launched Patér Place, LLC (Father’s Place) to highlight art from emerging, local artists to share African American stories and promote local artists. She is passionate about sharing the importance of collecting art, owning the narrative, and building wealth while doing it. To give back, a percentage of profits back is donated to non-profits that serve the community. As an advocate for economic change, she currently works for a non-profit, Oakland Thrive, an organization created to support economic development for small businesses. Her efforts are driven by her vision of a more equitable, sustainable future. Tracey seeks to change the art market for African Americans, challenge conventions, and inspire others to join her in creating a world where everyone can thrive.",
    flower: Dandelion,
  },
];

export default speakersData;
