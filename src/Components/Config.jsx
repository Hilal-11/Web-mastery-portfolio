import { GiGiftOfKnowledge } from "react-icons/gi";
import { IoPersonAdd } from "react-icons/io5";
import { LiaConnectdevelop } from "react-icons/lia";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiMaterialformkdocs } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiWebgl } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaCss3 } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import faizan from '../assets/faizan.jpg';
import umer from '../assets/umer.jpg';
import naveed from '../assets/Naveed.jpg';
import asif from '../assets/Asif.png';
import Sahil from '../assets/Sahil.jpg';
import Manan from '../assets/Manan.jpg';

export const skillsData = [ 
    {
        id : 1,
        skill : "Javascript",
        icon : <FaJs/>,
        color : 'yellow'
    },
    {
        id : 2,
        skill : "Typescript",
        icon : <SiTypescript/>,
        color : 'royalblue'
        
    },
    {
        id : 3,
        skill : "Tailwind Css",
        icon : <RiTailwindCssFill/>,
        color : '#3b82f6'
    },
    {
        id : 4,
        skill : "Bootstrap",
        icon : <FaBootstrap/>,
        color : '#5b21b6'
    },
    {
        id : 5,
        skill : "React-js",
        icon : <GrReactjs/>,
        color : '#0369a1'
    },
    {
        id : 6,
        skill : "React Redux",
        icon : <SiRedux/>,
        color : '#5b21b6'
    },
    {
        id : 7,
        skill : "React Router",
        icon : <SiReactrouter/>,
        color : '#ffffff'
    }
    ,    {
        id : 8,
        skill : "Meterial UI",
        icon : <SiMaterialformkdocs/>,
        color : '#1d4ed8'
    },
    {
        id : 9,
        skill : "Node-js",
        icon : <FaNodeJs/>,
        color : 'green'
    },
    {
        id : 10,
        skill : "Express-js",
        icon : <SiExpress/>,
        color : '#000fff'
    },


    {
        id : 111,
        skill : "MongoDB",
        icon : <SiMongodb/>,
        color : 'green'
    },
    {
        id : 11,
        skill : "Git/Github",
        icon : <FaGitAlt/>,
        color : '#ef4444'
    },    {
        id : 12,
        skill : "Vercel",
        icon : <SiVercel/>,
        color : ''
    },    {
        id : 13,
        skill : "Netlify",
        icon : <SiNetlify/>,
        color : '#0d9488'
    },    {
        id : 14,
        skill : "Three-js",
        icon : <TbBrandThreejs/>,
        color : '#ffffff'
    },    {
        id : 15,
        skill : "React-Three-Fiber",
        icon : <TbBrandThreejs/>,
        color : 'violet'
    }
    ,    {
        id : 16,
        skill : "Framer Motion",
        icon : <TbBrandFramerMotion/>,
        color : '#fde047'
    }
    ,    {
        id : 17,
        skill : "WebGL",
        icon : <SiWebgl/>,
        color : 'red'
    }
    ,    {
        id : 19,
        skill : "React Native",
        icon : <TbBrandReactNative/>,
        color : '#0c4a6e'
    }
    ,    {
        id : 20,
        skill : "C/C++",
        icon : <TbBrandCpp/>,
        color : '#1e3a8a'
    }


    ,    {
        id : 21,
        skill : "Java",
        icon : <FaJava/>,
        color : '#1d4ed8 '
    }

    ,    {
        id : 22,
        skill : "Python",
        icon : <FaPython/>,
        color : '#2563eb'
    }

    ,    {
        id : 23,
        skill : "Shadcn ui",
        icon : <SiShadcnui/>,
        color : '#000000'
    }
];
export const navLinksScreen = [ 
    {
        id: 0,
        label : "Home",
        to : "/",
        icon : <MdHome/>
    },
    {
        id : 1,
        label : "Github",
        to : "Github",
        icon : <FaGithub/>
    },
    {
        id : 2,
        label : "Feature Projects",
        to : "FreatureProjects",
        icon : <LiaConnectdevelop/>
    },
    {
        id : 3,
        label : "Resourses",
        to : "Resourses",
        icon : <GiGiftOfKnowledge/>
    },
    {
        id : 4,
        label : "About",
        to : "About",
        icon : <IoPersonAdd/>
    }

];
export const resoursesCoursesLists = [
    {
        id: 1,
        item : "All"
    },
    {
        id: 2,
        item: "Javascript"

    },
    {
        id: 3,
        item:  "Frontend"
    },
    {
        id: 4,
        item: "Backend"
    }, 
    {   
        id: 5,
        item: "Frameworks"

    },
    {   
        id: 6,
        item: "Roadmaps"

    }
]
export const imageFrontIcons = [ 
    {
        id : 1,
        icon : <FaJs/>,
    },
    {
        id : 2,
        icon : <SiTypescript/>,
        
    }, {
        id : 4,
        icon : <RiTailwindCssFill/>,

    },
    {
        id : 5,
        icon : <GrReactjs/>,
    },
    
    {
        id : 8.1,
        icon : <SiShadcnui/>
    },
    {
        id : 9,
        icon : <FaNodeJs/>,
    },
    {
        id : 10,
        icon : <SiExpress/>,
    },
    {
        id : 111,
        icon : <SiMongodb/>,
    },

    {
        id: 101,
        icon: <SiNextdotjs />
    },
    {
        id : 14,
        icon : <TbBrandThreejs/>,
    },{
        id : 16,
        icon : <TbBrandFramerMotion/>,
    },{
        id : 19,
        icon : <TbBrandReactNative/>,
    },
]
// About secession skills icons
export const aboutSkillsIcons = [ 
    {
        id : 1,
        icon : <FaJs/>,
    },
    {
        id : 2,
        icon : <SiTypescript/>,
        
    },
    {
        id : 11.3,
        icon : <FaCss3 />
    },
    {
        id : 3,
        icon : <FaBootstrap/>,

    },
    {
        id : 4,
        icon : <RiTailwindCssFill/>,

    },
    {
        id : 5,
        icon : <GrReactjs/>,
    },
    {
        id : 6,
        icon : <SiRedux/>,
    },
    {
        id : 7,
        icon : <SiReactrouter/>,
    }

    ,{
        id : 8,
        icon : <SiVite/>
        
    },
    {
        id : 8.1,
        icon : <SiShadcnui/>
    },

    {
        id : 8.11,
        icon : <SiMaterialformkdocs/>
    },

    {
        id : 8.12,
        icon : <FaPhp/>
    },

    {
        id : 9,
        icon : <FaNodeJs/>,
    },
    {
        id : 10,
        icon : <SiExpress/>,
    },
    {
        id : 111,
        icon : <SiMongodb/>,
    },

    {
        id: 101,
        icon: <SiNextdotjs />
    },

    {
        id : 11,
        icon : <FaGitAlt/>,
    }, 
    {
        id : 11.2,
        icon : <FaGithub />
    },
        {
        id : 14,
        icon : <TbBrandThreejs/>,
    }, 
    ,    {
        id : 16,
        icon : <TbBrandFramerMotion/>,
    }
    ,    {
        id : 17,
        icon : <SiWebgl/>,
    }
    ,    {
        id : 19,
        icon : <TbBrandReactNative/>,
    },
    {
        id : 12,
        icon : <SiVercel/>,
    },    
    {
        id : 13,
        icon : <SiNetlify/>,
    },
    ,    {
        id : 20,
        icon : <TbBrandCpp/>,
    }
    ,    {
        id : 21,
        icon : <FaJava/>,
    }

    ,    {
        id : 22,
        icon : <FaPython/>,
    }

];
// about secession about me
export const aboutMe = {
    para1 : "I’m Hilal, a passionate and results-driven web developer with a Bachelor’s degree in Computer Applications (BCA) in Computer Science. I specialize in building modern, dynamic, and visually stunning web applications that push the boundaries of creativity and functionality.",

    para2 : "With a strong foundation in programming languages like C, C++, Python, Java, JavaScript, and TypeScript, I bring versatility and depth to every project I work on. My true expertise lies in frontend and backend web development, where I leverage cutting-edge technologies to create seamless user experiences.",

    para3: "I’m skilled in modern frontend frameworks and libraries such as React, Three.js, React Three Fiber, and Framer Motion, enabling me to craft immersive, interactive, and responsive user interfaces. On the backend, I ensure robust and scalable solutions tailored to meet complex requirements.",

    para4 : "What sets me apart is my ability to combine technical expertise with a creative mindset, transforming ideas into reality through clean code and innovative design. I’m always eager to learn, adapt, and stay ahead in this fast-evolving tech landscape.",

    para5 : "Whether it’s building interactive 3D experiences, designing intuitive UI/UX, or developing full-stack applications, I’m committed to delivering excellence in every aspect of web development. Let’s build something extraordinary together!"
}
export const reviews = [
    {
        id: 2,
        name: "Umer Maqbool",
        profession: "Research and Market analyest",
        response : "I have learned so much more than I expected! The explanations of programming languages, networking, operating systems, and even electronics were detailed and practical. The focus on real-world applications, coding challenges, and debugging techniques really helped me improve my problem-solving skills. Truly an outstanding experience.",
        image: umer
    },
    {
        id: 3,
        name: "Naveed Lone",
        profession: "Computer science Student",
        response : "Learning from this mentor has been the best experience of my life! I started with no knowledge, and now I can confidently code in C, C++, Java, JavaScript, and React. The step-by-step approach, real-world projects, and in-depth explanations made learning so smooth. From fundamental programming concepts to intermediate-level problem-solving and debugging, I have gained a strong foundation. This mentorship has truly shaped my career, and I’m grateful for the guidance and support.",
        image: naveed
    },
    {
        id: 4,
        name: "Asif Khan",
        profession: "Computer science Student",
        response : "Learning JavaScript and React with this mentor was a game-changer. The projects and hands-on practice were exactly what I needed to build my confidence.Excellent teaching style! I learned not just coding but also networking, operating systems, and even some electronics. The real-world examples really helped me understand better",
        image: asif
    },
    {
        id: 1,
        name: "Faizan Elahi",
        profession : "Frontend Developer",
        response : "If you want to master frontend development or understand core computer science topics, this is the perfect place to learn. The guidance and support were outstanding.",
        image: faizan
        
    },
    {
        id: 5,
        name: "Sahil Saleem",
        profession: "Computer science Student",
        response : "As someone who struggled with coding before, I never thought I would understand concepts like pointers in C++, object-oriented programming in Java, or advanced React components. But the way everything was taught here made learning so simple! The mentor ensures that no one is left behind and encourages interactive learning, which made a huge difference for me.",
        image: Sahil
        
    },
    {
        id: 6,
        name: "Mir Manan",
        profession: "Computer science Student",
        response : "Excellent teaching style! I learned not just coding but also networking, operating systems, and even some electronics. The real-world examples really helped me understand better.",
        image: Manan
        
    }
]
export const youtubeVideos =  [
    { id: 0, thumbnail: 'https://i.ytimg.com/vi/nu_pCVPKzTk/hqdefault.jpg', description: 'Learn full-stack web development in this full cour…ll learn the basics of HTML, CSS, and JavaScript.' },
    { id: 1, thumbnail: 'https://i.ytimg.com/vi/vzGllw18DkA/hqdefault.jpg', description: 'This web programming course from Harvard Universit…off. It dives more deeply into the design and ...' },
    { id: 2, thumbnail: 'https://i.ytimg.com/vi/zJSY8tbf_ys/hqdefault.jpg', description: 'Learn JavaScript, HTML, and CSS in this Frontend W…is massive course, you will go from no coding ...' },
    { id: 3, thumbnail: 'https://i.ytimg.com/vi/9He4UBLyk8Y/hqdefault.jpg', description: 'Learn what technologies you should learn first to …r. Watch the full learning front end learning ...' },
    { id: 4, thumbnail: 'https://i.ytimg.com/vi/jBzwzrDvZ18/hqdefault.jpg', description: 'This video is a full backend web development cours…you will learn everything you need to know to ...' },
    { id: 5, thumbnail: 'https://i.ytimg.com/vi/PlxWf493en4/hqdefault.jpg', description: "If you're an absolute beginner in web development,…ML here. This video covers setting up an HTML ..." },
    { id: 6, thumbnail: 'https://i.ytimg.com/vi/kUMe1FH4CHE/hqdefault.jpg', description: 'Learn HTML in this complete course for beginners. …utorial to help you learn web development skills.' },
    { id: 7, thumbnail: 'https://i.ytimg.com/vi/_CXwZ5xyFno/hqdefault.jpg', description: 'Learn how to use DeepSeek-R1 in this crash course …he innovative reinforcement learning approach ...' },
    { id: 8, thumbnail: 'https://i.ytimg.com/vi/dX8396ZmSPk/hqdefault.jpg', description: "This course is an in-depth introduction to web dev…for complete beginners. We'll start with HTML ..." },
    { id: 9, thumbnail: 'https://i.ytimg.com/vi/MsnQ5uepIaE/hqdefault.jpg', description: 'In this frontend web development project tutorial,… with HTML, CSS, JavaScript, TypeScript, & React.' },
    { id: 10, thumbnail: 'https://i.ytimg.com/vi/tN6oJu2DqCM/hqdefault.jpg', description: 'Learn what technologies you should learn first to …er. Watch the full learning back end learning ...' },
    { id: 11, thumbnail: 'https://i.ytimg.com/vi/XC2B_fE7S0g/hqdefault.jpg', description: 'Finding your first job in a new field can be scary…on questions people have when getting started ...' },
    { id: 12, thumbnail: 'https://i.ytimg.com/vi/e2nkq3h1P68/hqdefault.jpg', description: 'Learn how to write accessible HTML by solving codi…llenges. Click here to get to the challenges: ...' },
    { id: 13, thumbnail: 'https://i.ytimg.com/vi/a_iQb1lnAEQ/hqdefault.jpg', description: 'Learn HTML and CSS from scratch by building 6 proj…oding challenges. Go here for the interactive ...' },
]
export const footerDataNext = [
    {
        id: 1,
        projects : [
            {id : 111 , projectItem : "Crypto Tracker" , link: "http://www.github.com/Hilal-11/Crypto-Trading"},
            {id : 112 , projectItem : "Explore Gradients" , link: "http://www.github.com/Hilal-11/"},
            {id : 113 , projectItem : "Epic Games Portal" , link: "http://www.github.com/Hilal-11/React-Essentials "},
            {id : 114 , projectItem : "Unreac Engine Assets" , link: "http://www.github.com/Hilal-11/React-Essentials "},
            {id : 115 , projectItem : "Youtube Clone" , link: "http://www.github.com/Hilal-11"},
        ]
    },
    {
        id: 2,
        courses: [
            {id: 901 , courseItem : "Frontend Developmnt" , link : "https://www.youtube.com/watch?v=9He4UBLyk8Y&list=PLWKjhJtqVAbmMuZ3saqRIBimAKIMYkt0E"},
            {id: 902 , courseItem : "Backend Development" , link : "https://www.youtube.com/watch?v=OFbSqd54Wwk&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH"},
            {id: 903 , courseItem : "Javascript" , link : "https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"},
            {id: 904 , courseItem : "React Ecosystem" , link : "https://www.youtube.com/watch?v=M9O5AjEFzKw&t=176837s"},
            {id: 905 , courseItem : "Threejs" , link : "https://www.youtube.com/watch?v=xJAfLdUgdc4&list=PLjcjAqAnHd1EIxV4FSZIiJZvsdrBc1Xho"},
            {id: 906 , courseItem : "React Three Fiber", link : "https://www.youtube.com/watch?v=pXpckHDDNYo&list=PLpepLKamtPjiUF6PvVUbIFhx9HaS0qJs_"},
        ]
    },
    {
        id: 3,
        github: [
            {id: 121 , githubItem : "Web Fundamentals",  link : "http://www.github.com/Hilal-11/JavascriptRendomPractice" ,},
            {id: 122 , githubItem : "Javascript/Typescript",  link : "http://www.github.com/Hilal-11/JavascriptPractice" ,},
            {id: 123 , githubItem : "Data Structures Algorithms",  link : "http://www.github.com/Hilal-11/DSA-Basic-To-Advance" ,},
            {id: 126 , githubItem : "C/C++/Java/Php/Python",  link : "http://www.github.com/Hilal-11/C_Programming_Language" ,},
            {id: 128 , githubItem : "Frammer Motion",  link : "http://www.github.com/Hilal-11" ,},
            {id: 120 , githubItem : "React Three Fiber",  link : "http://www.github.com/Hilal-11" ,},
            {id: 117 , githubItem : "Three Js",  link : "http://www.github.com/Hilal-11" ,},
        ]
    }
]
export const footerInfo = "Discover my latest projects, courses, and GitHub repositories, showcasing my expertise in modern web development. Explore live projects hosted on Vercel and Netlify, featuring cutting-edge technologies. Stay updated with my latest work, innovations, and open-source contributions. Let’s build something amazing togethe."

// Resources Data of youtube channels (courses thumbnils and links)
export const newYoutubedata = [
            {
                kind : "youtube#searchResult",
                etag: "nAtuKBdfvmYj9Yo8EDTETpzvvPY",
                id: {
                    kind : "youtube#video",
                    videoId: "KHxX0CgMGs4"
                },
                title: "Javascript",

                thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/KHxX0CgMGs4/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/KHxX0CgMGs4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/KHxX0CgMGs4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                
            },
            {
                kind : "youtube#searchResult",
                etag: "kw20ELa7iLZVK-i6fgcZJzCXV6U",
                id: {
                    kind : "youtube#video",
                    videoId: "eX-ODcr3XJg"
                },
                title: "Javascript",
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/eX-ODcr3XJg/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/eX-ODcr3XJg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/eX-ODcr3XJg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
      
            },
            {
                kind : "youtube#searchResult",
                etag: "KucI2yGp9O5Q6QSwNT9P4NEIpno",
                id: {
                    kind : "youtube#video",
                    videoId: "OFpqvaJ3QYg"
                },
                title: "Javascript",
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/OFpqvaJ3QYg/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/OFpqvaJ3QYg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/OFpqvaJ3QYg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
   
            },
            {
                
                    kind : "youtube#searchResult",
                    etag: "skg8abBJaB09j8LZz4l6j1FZ7rw",
                    id: {
                        kind : "youtube#video",
                        videoId: "Zi-Q0t4gMC8"
                    },
                    title: "Javascript",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/Zi-Q0t4gMC8/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/Zi-Q0t4gMC8/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/Zi-Q0t4gMC8/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },

            },
            {
                kind : "youtube#searchResult",
                etag: "wNQayg7mIQlwXeAMjKsJn8G7N-Q",
                id: {
                    kind : "youtube#video",
                    videoId: "sm5Y7Vtuihg"
                },
              
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/sm5Y7Vtuihg/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/sm5Y7Vtuihg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/sm5Y7Vtuihg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },

            },
            {
                kind : "youtube#searchResult",
                etag: "BagniOUmzz65qGk5IMEMvOdfNoI",
                id: {
                    kind : "youtube#video",
                    videoId: "x4rFhThSX04"
                },
              
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/x4rFhThSX04/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/x4rFhThSX04/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },

            },
            {
                kind : "youtube#searchResult",
                etag: "AUWdSHhTNHohcGpQ8z8-tBDZtkI",
                id: {
                    kind : "youtube#video",
                    videoId: "2esQdKzRUCw"
                },
               
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/2esQdKzRUCw/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/2esQdKzRUCw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/2esQdKzRUCw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
   
            },
            {
                kind : "youtube#searchResult",
                etag: "B97A1TBDEJ3MXT7zXGbKXnOyDZs",
                id: {
                    kind : "youtube#video",
                    videoId: "pgw2KPfgK1E"
                },
                title: "Typescript",
               
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/pgw2KPfgK1E/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/pgw2KPfgK1E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/pgw2KPfgK1E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },

            },
            {
                kind : "youtube#searchResult",
                etag: "1VseyB5zPqXWJ8fa04bi_EtiiLA",
                id: {
                    kind : "youtube#video",
                    videoId: "fP-371MN0Ck"
                },
  
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/fP-371MN0Ck/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/fP-371MN0Ck/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/fP-371MN0Ck/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },

            },
            {
                kind : "youtube#searchResult",
                etag: "SVfH1mEuBrWMk3gmCJiBH3wBumE",
                id: {
                    kind : "youtube#video",
                    videoId: "PWG7NlUDVaA"
                },
               
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/PWG7NlUDVaA/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/PWG7NlUDVaA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/PWG7NlUDVaA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
   
            },
            {
                kind : "youtube#searchResult",
                etag: "3PTVIz1Vs-VOvvQs97MF6Rv3CYc",
                id: {
                    kind : "youtube#video",
                    videoId: "-kizZZrh1zM"
                },
                title: "React",
            
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/-kizZZrh1zM/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/-kizZZrh1zM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/-kizZZrh1zM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
 
            },
            {
                kind : "youtube#searchResult",
                etag: "TL841eoIH1HJyvDwaJCe9ykVC-4",
                id: {
                    kind : "youtube#video",
                    videoId: "yBThHM2pBbE"
                },
              
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/yBThHM2pBbE/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/yBThHM2pBbE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/yBThHM2pBbE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
  
            },
            {
                kind : "youtube#searchResult",
                etag: "u0IwzAU9g2KJztGi82bEyIwj_xE",
                id: {
                    kind : "youtube#video",
                    videoId: "SpwzRDUQ1GI"
                },
               
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/SpwzRDUQ1GI/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/SpwzRDUQ1GI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/SpwzRDUQ1GI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
  
            },
            {
                kind : "youtube#searchResult",
                etag: "JavObgZ8UEzGSLyf1ltY_jeFzRE",
                id: {
                    kind : "youtube#video",
                    videoId: "aeHCUl8d-90"
                },
               
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/aeHCUl8d-90/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/aeHCUl8d-90/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/aeHCUl8d-90/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },

            },
            {
                kind : "youtube#searchResult",
                etag: "LTxklx00SIAQAH0crGF_UWPV5JY",
                id: {
                    kind : "youtube#video",
                    videoId: "iS1K64X_eXg"
                },
              
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/iS1K64X_eXg/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/iS1K64X_eXg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/iS1K64X_eXg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
       
            },
            {
                kind : "youtube#searchResult",
                etag: "eApcgBUMRrSa-Ne5Z0knSwQmusA",
                id: {
                    kind : "youtube#video",
                    videoId: "H3XIJYEPdus"
                },
              
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/H3XIJYEPdus/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/H3XIJYEPdus/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/H3XIJYEPdus/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
     
            },
            {
                kind : "youtube#searchResult",
                etag: "NU19d96hB5V3H7S0qSG-ARUNV9g",
                id: {
                    kind : "youtube#video",
                    videoId: "J9xeFxkcX2w"
                },
              
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/J9xeFxkcX2w/default.jpg",

                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/J9xeFxkcX2w/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/J9xeFxkcX2w/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
     
            },
]


