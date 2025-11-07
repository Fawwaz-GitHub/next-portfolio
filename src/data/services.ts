import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    "id": 1,
    "title": "Web Development",
    "icons": [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg"
    ],
    "shortDescription": "Crafting visually stunning and user-friendly websites",
    "description": "I create beautiful, responsive websites that establish your strong online presence. From simple landing pages to complex e-commerce platforms, I deliver tailored solutions using modern frameworks and technologies for seamless, SEO-optimized browsing experiences that elevate your digital identity."
  },
  {
    "id": 2,
    "title": "Backend Development",
    "icons": [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg"
    ],
    "shortDescription": "Building robust and scalable server-side solutions",
    "description": "I develop powerful backend infrastructures that ensure your applications run smoothly at scale. Specializing in efficient database architecture, RESTful APIs, and server configuration, I focus on performance optimization, security, and scalability to handle high traffic and complex data operations with reliability."
  },
  {
    "id": 3,
    "title": "Product Strategy",
    "icons": [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png"
    ],
    "shortDescription": "Defining vision, audience, and roadmap for product success",
    "description": "I partner with you to define clear product vision, identify target audiences, and create strategic roadmaps for success. Through collaborative ideation and thorough market analysis, I ensure your product not only meets user needs but also aligns perfectly with your business objectives for sustainable growth and market impact."
  },
  {
    "id": 4,
    "title": "Database Management",
    "icons": [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg"
    ],
    "shortDescription": "Optimizing and managing efficient database systems",
    "description": "I design and maintain high-performance database systems that ensure data reliability and scalability. With expertise across both SQL and NoSQL technologies, I implement optimized schemas, complex queries, and industry best practices for data integrity, security, and fast access to support your application's needs."
  }
]

export default services;
