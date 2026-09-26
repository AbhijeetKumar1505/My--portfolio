const person = {
  firstName: "Abhijeet",
  lastName: "Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Science Undergraduate | AI/ML & Full-Stack Developer",
  avatar: "/AB_Photo/AB_Photo.jpg",
  email: "ab7120977@gmail.com",
  phone: "+91 99395 84630",
  location: "Ashramnagar, Banka, Bihar",
  timeZone: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about AI, data, product design, and building impactful digital experiences.
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Hi, I'm Abhijeet Kumar.",
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Placement Portal Application V2</strong></>,
    href: "https://github.com/24f2007359/Placement-portal-v2",
  },
  subline: (
    <>
      Data Science undergraduate at IIT Madras with hands-on experience in AI/ML, full-stack app &amp; web development, and product innovation.
      Currently driving product strategy at Youmat and building cross-platform solutions at Agewell.
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
        Data Science undergraduate at IIT Madras with hands-on experience in AI/ML, full-stack app &amp; web development, and product innovation.
        Adept at building scalable, user-centric solutions using Next.js, React Native, Django, and Supabase.
        Currently driving product strategy at Youmat and developing cross-platform solutions at Agewell.
        Passionate about integrating AI, design, and data to build impactful digital experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Youmat",
        timeframe: "November 2025 – Present",
        role: "CTO",
        achievements: [
          <>Leading brainstorming and development of new features and product improvements.</>,
          <>Collaborating with cross-functional teams to define the product roadmap and user-centric service offerings.</>,
          <>Working on innovative AI-integrated solutions to enhance user experience and service scalability.</>,
        ],
        images: [],
      },
      {
        company: "Agewell",
        timeframe: "October 2025",
        role: "Full Stack App & Web Developer Intern",
        achievements: [
          <>Designed and developed the Agewell app and website from scratch using Next.js, React Native, Java, and Supabase.</>,
          <>Integrated backend and database functionalities, ensuring seamless synchronization between app and web platforms.</>,
          <>Collaborated closely with design and strategy teams to align technical delivery with brand goals.</>,
        ],
        images: [],
      },
      {
        company: "Deloitte Australia",
        timeframe: "August 2025",
        role: "Data Analytics Job Simulation (Forage)",
        achievements: [
          <>Completed a Deloitte job simulation involving data analysis and forensic technology.</>,
          <>Created a data dashboard using Tableau.</>,
          <>Used Excel to classify data and draw business conclusions.</>,
        ],
        images: [],
      },
      {
        company: "Ments",
        timeframe: "2024 – Present",
        role: "Business Associate Manager, Fullstack Developer",
        achievements: [
          <>Led business development initiatives, strategic partnerships, and community growth, driving user engagement and ecosystem expansion.</>,
          <>Managed and nurtured a community of learners, founders, and professionals through mentorship, onboarding, and engagement programs.</>,
          <>Designed, developed, and maintained the Ments web platform using a modern full-stack architecture, improving usability, performance, and scalability.</>,
          <>Collaborated with cross-functional teams to translate business requirements into product features.</>,
          <>Ensured high-quality implementation through testing, debugging, and iterative development.</>,
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
        name: "IIT Madras — Bachelor of Science, Data Science and Applications",
        description: <>CGPA: 6.69 · 5th semester · 2024 – 2028 · Chennai, Tamil Nadu</>,
      },
      {
        name: "Guru Gobind Singh Public School — Intermediate",
        description: <>69.8% · August 2022 – May 2024 · Bokaro, Jharkhand</>,
      },
      {
        name: "St Joseph's School — Matriculation",
        description: <>91.65% · March 2021 – June 2022 · Banka, Bihar</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python, Java, SQL, C#, JavaScript</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>HTML, CSS, JavaScript, Django, Streamlit, WordPress, Svelte</>,
        images: [],
      },
      {
        title: "Frameworks",
        description: <>React Native, Next.js, Angular, Flask, Django</>,
        images: [],
      },
      {
        title: "Data & Analysis",
        description: <>MySQL, PostgreSQL, SQLite3, MongoDB, Pandas, NumPy, Matplotlib, Data Cleaning, Data Visualization, Machine Learning, Data Analysis, Tableau</>,
        images: [],
      },
      {
        title: "Tools & Technologies",
        description: <>Git, REST API, Spring Boot, Docker, Kafka, Zookeeper, Automation</>,
        images: [],
      },
      {
        title: "Core Competencies",
        description: <>Project Management, Community Management, Team Leadership, Communication, Programming</>,
        images: [],
      },
      {
        title: "Development Practices",
        description: <>Software Testing, Debugging</>,
        images: [],
      },
    ],
  },
  achievements: {
    display: true,
    title: "Achievements & Certifications",
    items: [
      {
        title: "Docker & Kubernetes Workshop",
        description: <>Scaler Academy</>,
      },
      {
        title: "Olympiad — 2016",
        description: <>School Topper</>,
      },
      {
        title: "Olympiad — 2017",
        description: <>3rd Rank (School Level)</>,
      },
      {
        title: "Olympiad — 2018",
        description: <>School Topper</>,
      },
      {
        title: "Position of Responsibility",
        description: <>Secretary, Rampage Esports Club</>,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `Writing – ${person.name}`,
  description: `Articles and notes on AI, security, and building by ${person.name}`,
};

const research = {
  path: "/research",
  label: "Research",
  title: `Research – ${person.name}`,
  description: `Ongoing research notebooks and investigations by ${person.name}`,
  items: [
    {
      id: "ai-agents-mcp-security",
      title: "Security and Architecture of AI Coding Agents and the Model Context Protocol (MCP)",
      status: "In progress",
      summary:
        "Examines the security landscape of agentic AI coding systems, MCP as a universal tool-translation layer, and why user-implemented sandboxing (e.g. Bubblewrap) beats vendor-only trust. Covers OAuth 2.1 authorization challenges, secret redaction at the context layer, and defense-in-depth for YOLO-mode agents.",
      keyTakeaways: [
        "52% of UK orgs cite AI-driven attacks as top pressure; 67% cannot detect credential misuse within minutes.",
        "DIY Bubblewrap sandboxing isolates agents from .ssh/.env better than Docker or vendor-embedded sandboxes alone.",
        "MCP standardizes LLM↔tool connectivity (Stdio/SSE) but OAuth 2.1 dual server roles create identity burdens.",
        "Agentic misalignment demands OS-level constraints whenever high-autonomy flags like --dangerously-skip-permissions are used.",
      ],
      topics: ["AI Agents", "MCP", "Sandboxing", "Bubblewrap", "OAuth 2.1", "DevSecOps"],
      notebookUrl: "https://notebook.google.com/notebook/2274aec5-936c-45a6-aa45-9a09362f87a9",
      blogHref: "/blog/ai-agent-sandbox-security",
      updated: "2026",
    },
    {
      id: "jericho-ai-cad",
      title: "Jericho: Architecting AI-Native Engineering Environments",
      status: "In progress",
      summary:
        "Proposes Jericho as an intelligence layer on FreeCAD/OCCT (Cursor∶VS Code ∷ Jericho∶CAD). Uses the FMforME three-layer runtime monitor with six engineering defect predicates (D1–D6) so LLM-generated ModelSpecs reach near-100% build success before CAD execution.",
      keyTakeaways: [
        "LLMs often emit physically impossible CAD/FEM specs; FMforME’s Monitor + Self-Examine loop is the reliability gate.",
        "Six standard-grounded predicates (D1–D6) catch unconstrained DOF, negative stiffness, singularities, load–BC conflicts, material violations, and mesh topology errors.",
        "Specs that pass the monitor achieved 548/548 builds in Fusion 360; checks average ~0.1 ms.",
        "Flash-tier models often beat Pro tiers on structured JSON for agent loops; MCP + gestural UX are active architecture spikes.",
      ],
      topics: ["Jericho", "AI-CAD", "FreeCAD", "OCCT", "FMforME", "FEM", "MCP"],
      notebookUrl: "https://notebook.google.com/notebook/5c406037-9b2a-44b5-8495-4e89df49d8ff",
      blogHref: "/blog/jericho-cursor-for-cad",
      updated: "2026",
    },
  ],
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
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

export { person, social, newsletter, home, about, blog, research, work, gallery };
