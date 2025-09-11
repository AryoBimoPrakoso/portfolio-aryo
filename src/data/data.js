// Design UI/UX
import eWalletIMG from "../assets/img/img-design/e-wallet.png";
import myAgroIMG from "../assets/img/img-design/my-agro.png";
import profileCompanyIMG from "../assets/img/img-design/profile-company.png";
import runTrackerIMG from "../assets/img/img-design/run-tracker.png";

import eWalletThumbnail from "../assets/img/thumbnail-design/e-wallet-thumbnail.png";
import myAgroThumbnail from "../assets/img/thumbnail-design/my-agro-thumbnail.png";
import profileCompanyThumbnail from "../assets/img/thumbnail-design/profile-company-thumbnail.png";
import runTrackerThumbnail from "../assets/img/thumbnail-design/run-tracker-thumbnail.png";

// Project Fe
import webMusicPlayer from "../assets/img/thumbnail-fe/web-music-player.png";
import webMusicPlayer1 from "../assets/img/thumbnail-fe/music-1.jpg";
import webMusicPlayer2 from "../assets/img/thumbnail-fe/music-2.jpg";
import fragrances1 from "../assets/img/thumbnail-fe/fragrances.png"
import fragrances2 from "../assets/img/thumbnail-fe/fragrances-1.jpg"
import fragrances3 from "../assets/img/thumbnail-fe/fragrances-2.jpg"


// Video
import webMusicPlayerMp4 from "../assets/video/0822.mp4";
import webShoppingCartMp4 from "../assets/video/0911.mp4"

// TOOL SVG
import FigmaSVG1 from "../assets/svg/figma.svg";
import ReactSVG1 from "../assets/svg/react.svg";
import JsSVG1 from "../assets/svg/javascript.svg";
import TailwindSVG1 from "../assets/svg/tailwind.svg";
import dribbleSVG from "../assets/svg/dribble.svg";
import githubSVG from "../assets/svg/github.svg";
import instagramSVG from "../assets/svg/instagram.svg";
import linkedinSVG from "../assets/svg/linkedin.svg";
import htmlSVG from "../assets/svg/html.svg";
import cssSVG from "../assets/svg/css.svg";

// TOOL PNG
import shadcn from "../assets/img/shadcn.png"

export const dataProject = [
  {
    id: 1,
    title: "Web Music Player",
    description: {
      A: "This Web Music Player project is a web-based music player application built using HTML, CSS, and vanilla JavaScript. This application showcases my ability to integrate basic frontend technologies to create an interactive and responsive audio experience. With a clean and intuitive interface, this application allows users to enjoy their music collection with complete control, such as play/pause, previous/next track, and clickable progress bar navigation",
      B: "The key features that I successfully implemented include a dynamic playlist system that loads songs from NCS - No Copyright Sound. Each song is equipped with complete metadata including title, artist, and cover art that is displayed in real-time. The app also has the ability to auto-play the next song after the track is finished, an accurate progress bar with a current/duration display, and an interactive playlist where users can directly select the songs they want to play.",
      C: "From a technical implementation perspective, I used the HTML5 Audio API for handling audio playback, DOM manipulation for dynamic content rendering, and event-driven programming for user interactions. I created a modular and maintainable code structure with separate functions for each feature (loadSong, playSong, pauseSong, updateProgress, etc.). This project demonstrates my understanding of JavaScript fundamentals such as array manipulation, object handling, event listeners, and DOM traversal. Additionally, the implementation of a progress bar with percentage calculations and time formatting shows my mathematical logic skills in programming.",
    },
    thumbnail: webMusicPlayer,
    video: webMusicPlayerMp4,
    tools: [
      {
        id: "html",
        icon: htmlSVG,
      },
      {
        id: "css",
        icon: cssSVG,
      },
      {
        id: "javascript",
        icon: JsSVG1,
      },
    ],
    image: {
      image1: webMusicPlayer1,
      image2: webMusicPlayer2
    },
    sourceCode: "https://github.com/AryoBimoPrakoso/web-music-app"
  },
  {
    id: 2,
    title: "Web Shopping Cart",
    description: {
      A: "This Web Shopping Cart project is a modern e-commerce application built using React as the main framework, demonstrating my ability to develop complex and interactive web applications. This application implements essential features of an online store such as product catalog, product details, shopping cart, and rating system. By utilizing Fake API as a data source, this project demonstrates my understanding of asynchronous programming, data fetching, and state management in the React ecosystem.",
      B: "From an application architecture perspective, I implemented a component-based architecture with a neatly organized structure. The components folder contains various UI components such as Alert Dialog, Button, Carousel, Hero section, Navbar, ProductCard, and Rating system, which demonstrate the implementation of reusable components. The pages folder consists of Cart, Home, and ProductDetail, which follow modern routing patterns. I also use custom hooks (useProduct.js) for logic encapsulation and context (CartContext.jsx) for global state management, demonstrating an understanding of advanced React patterns.",
      C: "The technology stack I chose combines Tailwind CSS for utility-first styling and shadcn/ui for consistent and accessible pre-built components. This combination allows me to create a modern, responsive, and professional user interface with optimal development speed. This project also uses custom SVG icons (cart, gallery, profile, react, shop) that give a personal touch to the application's branding. A clean file structure with separation of concerns between components, pages, context, and hooks demonstrates best practices in React development.",
    },
    thumbnail: fragrances1,
    video: webShoppingCartMp4,
    tools: [
      {
        id: "react",
        icon: ReactSVG1,
      },
      {
        id: "tailwind",
        icon: TailwindSVG1,
      },
      {
        id: "javascript",
        icon: JsSVG1,
      },
      {
        id: "shadcnUI",
        icon: shadcn,
      },
    ],
    image: {
      image1: fragrances2,
      image2: fragrances3
    },
    sourceCode: "https://github.com/AryoBimoPrakoso/belajar-shopping-cart"
  },
];

export const dataDesignUI = [
  {
    id: 1,
    title: "E-wallet",
    description:
      "The design of the Velox e-wallet features a modern and intuitive interface with outstanding features such as QR code scanning for fast transactions and detailed spending monitoring charts to help users manage their finances effectively. In addition, the app also provides a clear transaction history and a “Quick Send” feature for easy money transfers, all presented in a neat and attractive layout.",
    thumbnail: eWalletThumbnail,
    img: eWalletIMG,
  },
  {
    id: 2,
    title: "Run tracker",
    description:
      "The design of this run tracking app features a modern and informative visual approach, showing the flow of use from the welcome page that motivates users to pursue their health goals, to detailed views of daily activities such as number of steps, duration, distance traveled, and estimated calories burned. Visual elements such as runner illustrations, route maps, and daily achievement statistics are designed to provide an intuitive and inspiring experience through a clean, structured, and easy-to-navigate interface, making this design ideal for apps focused on fitness and an active lifestyle.",
    thumbnail: runTrackerThumbnail,
    img: runTrackerIMG,
  },
  {
    id: 3,
    title: "Assistant App",
    description:
      "The design of the myAgro app is the result of a collaboration between our team of three, with the aim of integrating technology and easy access to information to support smart and modern agricultural activities. On the home screen, we display illustrations of farmers and drones to create an innovative impression from the moment the app is first used. Important information such as current weather conditions, crop growth status, and harvest time estimates is presented visually and interactively to help farmers make data-driven decisions. We have also designed a feature for determining new land locations supported by maps and direct location selection, strengthening the app's role as a strategic tool in digital agricultural management. All design elements are developed with principles of intuitive, user-friendly, and efficient interfaces to truly support farmers' productivity.",
    thumbnail: myAgroThumbnail,
    img: myAgroIMG,
  },
  {
    id: 4,
    title: "Web Profile Company",
    description:
      "The design of the Sikopi website presents a strong and visually appealing brand identity, conveying that coffee is not just a drink—it is an experience. With warm tones and a neat layout, this page highlights the company's mission to provide high-quality coffee that is crafted with dedication. Key elements such as an inspirational slogan, photos of the coffee-making process, and an explanation of the company's vision harmoniously blend with interactive cafe location options, creating a professional yet customer-friendly impression. This makes Sikopi's design effective as the digital face of a brand that prioritizes quality, storytelling, and comfort in every serving.",
    thumbnail: profileCompanyThumbnail,
    img: profileCompanyIMG,
  },
];

export const toolSVG = [
  {
    id: 1,
    title: "Figma",
    svg: FigmaSVG1,
  },
  {
    id: 2,
    title: "React",
    svg: ReactSVG1,
  },
  {
    id: 3,
    title: "Javascript",
    svg: JsSVG1,
  },
  {
    id: 4,
    title: "Tailwind",
    svg: TailwindSVG1,
  },
];

export const linksSosmed = [
  {
    id: 1,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/aryo-bimo-prakoso-746001347/",
    svg: linkedinSVG,
  },
  {
    id: 2,
    title: "Github",
    url: "https://github.com/AryoBimoPrakoso",
    svg: githubSVG,
  },
  {
    id: 3,
    title: "Instagram",
    url: "https://www.instagram.com/aryoobp",
    svg: instagramSVG,
  },
  {
    id: 4,
    title: "Dribble",
    url: "https://dribbble.com/aryobimop",
    svg: dribbleSVG,
  },
];
