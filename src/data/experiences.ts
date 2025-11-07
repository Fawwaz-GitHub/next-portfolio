import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Frontend Developer",
    company: "Xencia Technologies Pvt Ltd",
    startDate: "Oct 2024",
    isCurrentJob: true,
    location: "Bengaluru, India",
    description: [
      "Evolved into architecture and product strategy role, leading technical decisions for scalable software solutions",
      "Designed system architectures for multiple products with focus on scalability and maintainability",
      "Led product development lifecycle from ideation to deployment, collaborating with stakeholders to define technical vision",
      "Architected microservices-based solutions reducing system downtime by 60% and improving deployment frequency",
      "Mentored junior developers in software architecture patterns, code quality, and best practices",
      "Drove technology stack decisions, introducing modern tools that improved team productivity by 40%",
      "Transformed business requirements into technical specifications, ensuring alignment between product and engineering goals",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Theecode Technologies",
    startDate: "Jul 2022",
    endDate: "Oct 2024",
    isCurrentJob: false,
    location: "Chennai, India",
    description: [
      "Promoted to Full Stack Developer after demonstrating strong frontend capabilities and eagerness to master backend technologies",
      "Architected and developed full-stack applications using modern frameworks like React, Node.js, and SQL/NoSQL databases",
      "Engineered robust RESTful APIs and database structures to support scalable web applications",
      "Integrated frontend interfaces with backend services, ensuring seamless data flow and optimal performance",
      "Implemented authentication systems, payment gateways, and third-party API integrations",
      "Optimized application performance through database indexing, query optimization, and caching strategies",
    ],
  },
  {
    designation: "Web Development Intern",
    company: "Theecode Technologies",
    startDate: "Mar 2022",
    endDate: "Jul 2022",
    isCurrentJob: false,
    location: "Chennai, India",
    description: [
      "Built foundational development skills through hands-on experience with real-world projects and bug fixes",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Successfully troubleshooted and resolved technical issues while collaborating with experienced team members",
      "Developed comprehensive understanding of web development lifecycle from concept to deployment",
    ],
  },
];

export default experiences;
