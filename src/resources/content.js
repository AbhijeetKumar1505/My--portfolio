const person = {
  firstName: "Abhijeet",
  lastName: "Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Science Undergraduate | Backend Developer | Automation & Data Product Strategist",
  avatar: "/AB_Photo/AB_Photo.jpg",
  email: "ab7120977@gmail.com",
  location: "Banka, Bihar, India",
  timeZone: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AbhijeetKumar1505",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abhijeet-kumar-7bb605311/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/abhijeet_1505",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}&apos;s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Hi, I'm Abhijeet Kumar.",
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">EcoFinds – Empowering Sustainable Consumption</strong></>,
    href: "https://github.com/AbhijeetKumar1505/EcoFinds",
  },
  subline: (
    <>
      {person.role} based in {person.location}. Co-Founder & Marketing Strategist at NexusTycoon.com. Secretary of Rampage Esports Club. Community builder and mentor.<br />
      Always learning, building, and collaborating.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
    src: "/AB_Photo/AB_Photo.jpg",
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I&apos;m Abhijeet Kumar — a passionate Data Science undergraduate at IIT Madras, specializing in backend development, automation, and data-driven product strategy. With hands-on experience in Python, SQL, Django, and modern data tools, I build robust, scalable solutions that prioritize performance and user experience. As the Co-Founder & Marketing Strategist at NexusTycoon.com, I&apos;ve driven business growth through data analytics, process automation, and targeted marketing strategies. I also serve as Secretary of Rampage Esports Club, where I manage operations, events, and partnerships. Beyond technical skills, I&apos;m deeply committed to community-building and mentorship, having worked with dynamic teams and online communities to foster collaboration and personal development. My work is grounded in clear communication, leadership, and a continuous learning mindset.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Youmat",
        timeframe: "November 2025",
        role: "Vice President – Product & Innovation",
        achievements: [
          <>Leading brainstorming and development of new features and product improvements.</>,
          <>Collaborating with cross-functional teams to define the product roadmap and user-centric service offerings.</>,
          <>Driving AI-integrated solutions that enhance user experience and support scalable service delivery.</>,
        ],
        images: [],
      },
      {
        company: "Agewell",
        timeframe: "October 2025",
        role: "Full Stack App & Web Developer",
        achievements: [
          <>Designed and developed Agewell&apos;s app and website from scratch using Next.js, React Native, Java, and Supabase.</>,
          <>Integrated backend and database functionalities to synchronize web and mobile platforms seamlessly.</>,
          <>Partnered with design and strategy teams to align technical delivery with the brand vision.</>,
        ],
        images: [],
      },
      {
        company: "Deloitte Australia",
        timeframe: "August 2025",
        role: "Data Analytics Job Simulation Participant",
        achievements: [
          <>Completed a Deloitte job simulation involving data analysis and forensic technology.</>,
          <>Created a data dashboard using Tableau for data visualization and insights.</>,
          <>Used Excel to classify data and draw meaningful business conclusions.</>,
        ],
        images: [],
      },
      {
        company: "Rampage Esports Club",
        timeframe: "October 2024 – May 2025",
        role: "Secretary",
        achievements: [
          <>Directed club operations, organized tournaments, and handled sponsor relations.</>,
          <>Improved participation rates and streamlined communications.</>,
        ],
        images: [],
      },
      {
        company: "Nexus Tycoon",
        timeframe: "May 2024 – October 2024",
        role: "Co-Founder & Marketing Strategist",
        achievements: [
          <>Led growth through data analytics and automation.</>,
          <>Developed marketing strategies and boosted user engagement.</>,
          <>Managed branding, content, and operational pipelines.</>,
        ],
        images: [],
      },
      {
        company: "Ments",
        timeframe: "2024 - Present",
        role: "Community Manager, Business Analyst, Developer",
        achievements: [
          <>Managed an active online learning community.</>,
          <>Mentored members on growth and upskilling.</>,
          <>Developed a FullStack website to improve user experience.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "BS in Data Science and Applications, IIT Madras",
        description: <>2024-2028</>,
      },
      {
        name: "High School, Guru Gobind Singh Public School, Bokaro Steel City-Jharkhand",
        description: <>2022-2024</>,
      },
      {
        name: "Secondary School, Saint Joseph's School, Banka-Bihar",
        description: <>2021-2022</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python, Java, SQL, HTML, CSS, JavaScript</>,
        images: [],
      },
      {
        title: "Frameworks",
        description: <>Django, React, Node.js, Express, Flask</>,
        images: [],
      },
      {
        title: "Tools",
        description: <>Git, Docker, AWS, Linux, VS Code, PyCharm, IntelliJ IDEA</>,
        images: [],
      },
      {
        title: "Database",
        description: <>MySQL, PostgreSQL, MongoDB</>,
        images: [],
      },
      {
        title: "Cloud",
        description: <>AWS, GCP, Azure</>,
        images: [],
      },
      {
        title: "Data Science",
        description: <>Pandas, NumPy, Scikit-learn, TensorFlow, Keras, PyTorch</>,
        images: [],
      },
      {
        title: "Data Visualization",
        description: <>Matplotlib, Seaborn, Plotly, Tableau</>,
        images: [],
      },
      {
        title: "Machine Learning",
        description: <>Linear Regression, Logistic Regression, Decision Trees, Random Forest, Gradient Boosting, K-Nearest Neighbors, Support Vector Machines, Neural Networks</>,
        images: [],
      },
      {
        title: "Deep Learning",
        description: <>Convolutional Neural Networks, Recurrent Neural Networks, Long Short-Term Memory, Generative Adversarial Networks</>,
        images: [],
      },
      {
        title: "Data Engineering",
        description: <>Apache Airflow, Apache Spark, Apache Hadoop, Apache Kafka</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog – Coming soon",
  description: "Blog content coming soon.",
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery – Coming soon",
  description: "Gallery content coming soon.",
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Horizontal image 1",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Horizontal image 2",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Horizontal image 3",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Horizontal image 4",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Vertical image 1",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Vertical image 2",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Vertical image 3",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Vertical image 4",
      orientation: "vertical"
    }
  ]
};

export { person, social, newsletter, home, about, blog, work, gallery };
