
export const Bio = {
  name: "Nutan Kate",
  roles: ["Java Developer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Nutan3003",
  resume:
    "https://drive.google.com/file/d/1doKA7TfSc8ODWvBWBDjCZNXFmZyWHKHi/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/nutan-kate",
  email: "nbkate3003@gmail.com",
};

export const skills = [
  {
    title: "Languages, Frameworks & Database",
    skills: [
      { name: "Java", image: "https://github.com/devicons/devicon/blob/v2.16.0/icons/java/java-original-wordmark.svg" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "SQL", image: "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.png" },
      { name: "MySQL", image: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
      { name: "MongoDB", image: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" },
      { name: "Oracle", image: "https://media.licdn.com/dms/image/D5612AQGTzGGnu886Vw/article-cover_image-shrink_720_1280/0/1680581578662" },
    ],
  },
  {
    title: "Tools and Technologies",
    skills: [
      { name: "Git", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" },
      { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "VS Code", image: "https://img.icons8.com/?size=48&id=0OQR1FYCuA9f&format=png" },
      { name: "AWS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/2560px-AWS_Simple_Icons_AWS_Cloud.svg.png" },
    ],
  },
  {
    title: "Engineering Practices",
    skills: [
      { name: "Cloud Computing", image: "https://cdn-icons-png.flaticon.com/512/4215/4215831.png" },
      { name: "Microservices", image: "https://runestone.academy/ns/books/published/py4e-int/_images/web_crawler.png" },
      { name: "Prompt Engineering", image: "https://businessolution.org/wp-content/uploads/2023/02/Prompt-Engineering.png" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Software Developer Intern",
    company: "",
    date: "Jan 2023 to June 2023",
    desc: `• Designed, developed, and maintained robust software systems using object-oriented programming principles, applying effective problem-solving techniques.
            • Collaborated within an agile environment, adhering to project responsibilities, timelines, and coding standards to deliver high-quality results.
            • Utilized Git and GitHub for version control, ensuring consistency and collaboration within the team.
            • Built frontend components using HTML, CSS, and Bootstrap, achieving responsive designs across 95% of devices.
            • Managed MySQL backend, optimizing SQL syntax and ensuring a 99.9% uptime for seamless functionality.`,
    skills: ["Object-Oriented Programming", "Agile Methodologies", "Git", "GitHub", "HTML", "CSS", "Bootstrap", "MySQL"],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://prolearnindia.com/wp-content/uploads/2023/03/3-4.jpg",
    school: "Savitribai Phule Pune University",
    date: "Sept 2023 - Ongoing",
    grade: "First Class",
    desc: "I am pursuing a Bachelor of Engineering from Pune University with a specialization in Electronics and Telecommunication.",
    degree: "Bachelor of Engineering",
  },
  {
    id: 1,
    img: "https://gpmumbai.ac.in/gpmweb/wp-content/uploads/2021/04/GPM-LOGO-2021.png",
    school: "Government Polytechnic, Mumbai",
    date: "Jan 2020 - June 2023",
    grade: "First Class",
    desc: "I completed my Diploma from Government Polytechnic, Mumbai with specialization in Information Technology.",
    degree: "Diploma",
  },
];

export const projects = [
  {
    id: 6,
    title: "ToDo Application",
    date: "2025-01-06",
    description:
      "A lightweight and user-friendly To-Do Application built using Java Swing and AWT, providing a graphical interface for efficient task management. The app allows users to add, delete, and mark tasks as completed in real time, making it an ideal project for mastering GUI development in Java. Future plans include adding persistent storage, task prioritization, and category tagging for an enhanced user experience.",
    image:"https://cdn-icons-png.freepik.com/256/8476/8476658.png",
    tags: ["Java", "Github"],
    category: "Java",
    github: "https://github.com/Nutan3003/ToDo-Application-Java",
  },
  {
    id: 5,
    title: "Hospital Management System",
    date: "2025-01-06",
    description:
      "The Hospital Management System is a Java-based application that streamlines and automates various hospital operations, including patient registration, doctor scheduling, inventory management, and report generation. This system provides a user-friendly interface and ensures secure and efficient data management.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/018/794/309/small_2x/health-insurance-concept-with-words-coverage-protection-risk-and-security-online-medicine-on-a-virtual-screen-and-a-cartoon-wood-hand-touching-a-button-isolated-on-blue-background-3d-rendering-png.png",//"https://drive.google.com/uc?export=view&id=1sJPAhqQeSK0F7RRsiIBK--S73Ij9AJc2",
    tags: ["Java", "Mysql", "Github", "Google Auth"],
    category: "web app",
    github: "https://github.com/Nutan3003/Hospital-Management-System",
  },
];
