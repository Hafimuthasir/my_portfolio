import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  drf,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];


const technologies = [
  {
    name:"Python",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name:"Django",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" 
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name:"PostgreSQL",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name:"RESTful APIs",
    icon: "https://img.icons8.com/nolan/64/api-settings.png"
  },
  {
    name:"Django Rest Framework",
    icon: drf
  },
  {
    name:"Bootstrap",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
  },
  {
    name:"Material UI",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
  },

];

const familiar = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"Micro services",
    icon:"https://img.icons8.com/external-soft-fill-juicy-fish/60/null/external-microservice-microservices-soft-fill-soft-fill-juicy-fish.png"
  },
  {
    name:"Data Structures",
    icon:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-structured-data-data-analytics-flaticons-lineal-color-flat-icons.png"
  },
  {
    name:"Django Channels",
    icon:"https://img.icons8.com/external-solidglyph-m-oki-orlando/32/000000/external-channels-digital-marketing-outline-solidglyph-m-oki-orlando.png"
  },
  {
    name:"Web Socket",
    icon:"https://img.icons8.com/ios-filled/50/null/plug-1.png"
  },
  {
    name:"JWT",
    icon:"https://img.icons8.com/color-pixels/32/null/experimental-lock-color-pixels.png"
  },
  {
    name:"Celery",
    icon:"https://img.icons8.com/fluency/48/null/celery.png"
  },
  {
    name:"AWS",
    icon:"https://img.icons8.com/color/48/null/amazon-web-services.png"
  }
]

const experiences = [
  {
    title: "Connect-X",
    company_name: "Developers Community App",
    icon: "https://img.icons8.com/emoji/48/null/alien-emoji.png",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "A Developers Community web application made completely responsive and covers all parts of social media.",
      "File uploading and downloading system - any file type can be attached with posts that can be easily downloaded by users from feed.",
      "Users can request for Bussiness access for exclusive features",
      "Uploading premium source codes or libraries for bussiness enabled users",
      "E-mail Verification with Celery",
      "Real time chat with Channels and Websocket",
      "Backend is written reStructuredText and adheres to excellent coding standard and readability.",
      "The frontend is deployed in AWS Amplify and the Rest API backend is deployed in EC2 Server."
    ],
    technologies:[
      ["https://img.icons8.com/color/48/null/python--v1.png","Python"],
      ["https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png","Django -Backend framework"],
      ["https://img.icons8.com/plasticine/100/null/react.png","React.js -Frontend framework"],
      ["https://img.icons8.com/color/48/null/postgreesql.png","PostgreSQL -Database."],
      ["https://img.icons8.com/fluency/48/null/api-settings.png","Django REST Framework"],
      ["https://img.icons8.com/fluency/48/null/celery.png","Celery"],
      ["https://img.icons8.com/color/48/null/stripe.png","Stripe Payment"],
      ["https://img.icons8.com/ios-filled/50/null/plug-1.png","WebSocket"],
      ["https://img.icons8.com/color/48/null/unicorn--v1.png","Gunicorn,Uvicorn"],
      ["https://img.icons8.com/color/48/null/amazon-web-services.png","AWS S3, Amplify, EC2"],
      ["https://img.icons8.com/color-pixels/32/null/experimental-lock-color-pixels.png","JWT"],
      ["https://img.icons8.com/color/48/null/tailwindcss.png","Tailwind CSS"],
      ["https://img.icons8.com/color/48/null/material-ui.png","Material UI"],
      ["https://img.icons8.com/nolan/64/m-key.png","Framer Motion"],
      ["https://img.icons8.com/external-solidglyph-m-oki-orlando/32/000000/external-channels-digital-marketing-outline-solidglyph-m-oki-orlando.png","Channels"],
      ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg","Redis"]
    ]
  },
  {
    title: "Groves Auto Parts",
    company_name: "E-commerce",
    icon: "https://img.icons8.com/fluency/48/null/wrench--v1.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "A web application which provides all the important parts of E-Commerce",
       "Seperate fuctionality for Guest User including cart", "Coupons, Offers, Refferal, Wallet",
       "Mobile OTP Verification",
       "Payment system",
       "Pagination and Filtering",
       "Detailed Sales Report",
       "Admin Dashboard with all the management with sales graph"
    ],
    technologies:[
      ["https://img.icons8.com/color/48/null/python--v1.png","Python"],
      ["https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png","Django - Framework"],
      ["https://img.icons8.com/color/48/null/postgreesql.png","PostgreSQL -Database."],
      ["https://img.icons8.com/color/48/null/figma--v1.png","Figma"],
      ["https://img.icons8.com/external-tal-revivo-duo-tal-revivo/25/null/external-twilio-is-a-cloud-communications-platform-as-a-service-company-logo-duo-tal-revivo.png","Twilio"],
      ["https://img.icons8.com/color/48/null/javascript--v1.png","Ajax"],
      ["https://img.icons8.com/fluency/48/null/card-in-use.png","Razorpay,Paypal - Payment Gateways"],
      ["https://img.icons8.com/color/48/null/javascript--v1.png","Chart.js"],
      ["https://img.icons8.com/color/48/null/amazon-web-services.png","AWS EC2 - Hosted"]
    ]
  },
  {
    title: "Face Mask Detection",
    // company_name: "AI ",
    icon: "https://img.icons8.com/ios-glyphs/30/null/private-wall-mount-camera--v1.png",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "A realtime Mask detecting AI app that detects people not wearing masks.",
      "Added a system ofremoving their attendance from the register.",
      "This app was made when COVID 19 was in its peak. It can be helpful to ensure sanitization of products and safety of workers. ",
      "Integrated a web and android application for all the management ."
    ],
    technologies:[
      ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg","Flask - Backend framework"],
      ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg","Tensorflow - AI Library"],
      ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg","MySQL -Database."],
      ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg","Android Studio"],
    ]
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  //   technologies:[
  //     ["devicon-django-plain colored","Django -Backend framework"],
      
  //   ["devicon-react-original colored","React.js -Frontend framework"],
  //     ["PostgreSQL -Database."],
  //     ["Django REST Framework"],
  //     ["Celery"],
  //     ["Stripe Payment"],
  //     ["WebSocket"],
  //     ["Gunicorn,Uvicorn"],
  //     ["AWS S3, Amplify, EC2"],
  //     ["JWT"],
  //     ["Tailwind CSS"],
  //     ["Material UI"],
  //     ["Framer Motion"],
  //     ["Channels"],
  //     ["Redis"]
  //   ]
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "School Portal",
    description:
      "RESTful api for students management, written with well optimized and readable code.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "drf",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Hafimuthasir/School-Portal-Assignment.git",
  },
  {
    name: "Olx Clone",
    description:
      "Web application that build for deep understanding of React.js",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Hafimuthasir/Olx-Clone.git",
  },
  {
    name: "Netflix Clone",
    description:
      "Web application that build for deep understanding of React.js",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Hafimuthasir/Netflix-clone-using-react.git",
  },
  {
    name: "Incubation",
    description:
      "Web application for management of a company",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Hafimuthasir/Netflix-clone-using-react.git",
  },
];

export { services, technologies, experiences, testimonials, projects,familiar };
