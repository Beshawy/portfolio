// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import nestLogo from './assets/tech_logo/nest.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/download.png';
import bsaLogo from './assets/education_logo/Depi.png';
import vpsLogo from './assets/education_logo/Route.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/BeWithMe.png';
import csprepLogo from './assets/work_logo/api.png';
import movierecLogo from './assets/work_logo/ecommerce.png';
import taskremLogo from './assets/work_logo/adlpress.png';
import npmLogo from './assets/work_logo/movie.png';
import webverLogo from './assets/work_logo/Mealify.png';
import carRentalApi from './assets/work_logo/carApi.png'
import restaurant from './assets/work_logo/rest.png'
import blogApp from './assets/work_logo/blogApp.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: '', logo: javascriptLogo },
      { name: 'React', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: '', logo: tailwindcssLogo },
      { name: '', logo: bootstrapLogo },
      { name : '', logo : typescriptLogo}
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: '', logo: mongodbLogo },
      { name: '', logo:  postgreLogo},
      { name: '', logo: nestLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "HTI TECNOLOGY 10ThR",
      date: "Sept 2021 - July 2025",
      grade: "2.89 GPA",
      desc: " Iam a Computer Science graduate with a Bachelor's degree from the Higher Technological Institute in 10th of Ramadan City. Throughout my academic journey, I gained strong knowledge in programming, software engineering, databases, and system analysis. My education provided me with both theoretical understanding and practical experience in developing web applications, solving complex problems, and applying ",
      degree: "Bachelor's degree of Computer Science",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "DEPI",
      date: "Oct 2024 - jun 2025",
      desc: "I successfully completed a comprehensive MERN Stack training program provided by the Ministry of Communications under the Digital Egypt Pioneers Initiative (DEPI). Through this program, I gained in-depth practical experience in full-stack web development using MongoDB, Express.js, React.js, and Node.js, and learned how to build, deploy, and manage modern, scalable web applications following industry best ",

    },
    {
      id: 2,
      img: vpsLogo,
      school: "ROUTE ACADEMY",
      date: "Apr 2022 - Aug 2022",
      desc: "I successfully completed a Front-End Development Diploma at Route Academy, where I gained strong practical skills in HTML, CSS, JavaScript, React.js, and modern web design principles. The program focused on building responsive, user-friendly interfaces and developing real-world ",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "ROUTE ACADEMY",
      date: "Apr 2023 - Aug 2023",
      desc: "I successfully completed a Back-End Development Diploma at Route Academy, where I learned to build and manage robust server-side applications using Node.js, Express.js, MongoDB, and RESTful APIs. The program focused on developing scalable systems, database management, authentication, and integrating front-end applications with secure and efficient back-end services",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "BE WITH ME",
      description:
        "Accessible learning platform empowering people with disabilities.",
      image: githubdetLogo,
      tags: ["HTML", "CSS","TailwindCss", "TypeScript", "React TS", "API", "AI Tools" ,"AI models"],
      github: "https://github.com/Beshawy/BeWithMe-project",
      webapp: "",
    },
        {
      id: 1,
      title: "CAR RENTAL PLATFORM API",
      description:
        "RESTful API for a car rental platform enabling user authentication, vehicle management, real-time booking, secure payments, and admin oversight with comprehensive booking history and analytics.",
      image: carRentalApi,
      tags: ["node.js", "express","webHooks", "JWT", "MongoDB", "RESTful API", "paypal" ,"postman"],
      github: "https://github.com/Beshawy/cars-rental-api",
      webapp: "https://app.swaggerhub.com/apis-docs/todigital/cars-rental-platform-api/1.0.0?view=uiDocs",
    },
    {
      id: 2,
      title: "API E-commerce",
      description:
        "Secure RESTful API powering user and data management.",
      image: csprepLogo,
      tags: [ "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "RESTFUL API"],
      github: "https://github.com/Beshawy/e-commerc-api",
      webapp: "",
    },
    {
      id: 3,
      title: "E-COMMERCE Website",
      description:
        "Modern React interface for seamless online shopping.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Beshawy/endReactApp",
      webapp: "",
    },
    {
      id: 4,
      title: "E-commerce electronic",
      description:
        "Modern React interface for seamless online shopping.",
      image: taskremLogo,
      tags: ["React tS", "Node.js", "NPM","Next Ts", "Validation"],
      github: "https://github.com/Beshawy/adlpress-two",
      webapp: "",
    },
    {
      id: 5,
      title: "Movie Recommendation ",
      description:
        "A movie recommendation front-end suggesting films based on user preferences",
      image: npmLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS" , "React" , "FireBase"],
      github: "https://github.com/Beshawy/Movie-Recommendation-App-using-React",
      webapp: "",
    },
    {
      id: 6,
      title: "Mealify",
      description:
        " responsive restaurant front-end showcasing menu and online .",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 7,
      title: "BLOG APP",
      description:
        "A blog application built with Node.js, Express, and MongoDB, allowing users to create, read, update, and delete blog posts.",
      image: blogApp,
      tags: ["node js", "express", "mongoDB", "JavaScript"],
      github: "https://github.com/Beshawy/BLOG-APP-API",
      webapp: "",
    },
    {
      id: 8,
      title: "restaurant api",
      description:
        "A restaurant API built with Node.js, Express, and MongoDB, allowing users to create, read, update, and delete restaurant data.",
      image: restaurant,
      tags: ["node js", "express", "mongoDB", "JavaScript"],
      github: "https://github.com/Beshawy/resturant-api",
      webapp: "",
    },
  ];  