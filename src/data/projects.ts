import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    "id": "ecom-dashboard-fullstack",
    "title": "E-Commerce Analytics Dashboard",
    "description": "A comprehensive full-stack dashboard application providing real-time analytics, inventory management, and sales tracking for e-commerce businesses with interactive data visualization.",
    "icon": "/skills/react.svg",
    "repoType": RepoType.Public,
    "projectType": ProjectType.Personal,
    "githubUrl": "https://github.com/Fawwaz-GitHub/ECOMDASH-FULLSTACK",
    "url": "https://ecomdash.onrender.com/",
    "tags": ["Next.js", "React", "Node.js", "MongoDB", "Data Visualization"]
  },
  {
    "id": "flipkart-clone",
    "title": "Flipkart E-Commerce Clone",
    "description": "A feature-rich e-commerce platform replica with product catalog, user authentication, shopping cart, and payment integration, delivering a seamless online shopping experience.",
    "icon": "/skills/react.svg",
    "repoType": RepoType.Public,
    "projectType": ProjectType.Personal,
    "githubUrl": "https://github.com/Fawwaz-GitHub/FlipKart-Clone",
    "url": "https://flippedcart.onrender.com/",
    "tags": ["React", "Redux", "Node.js", "MongoDB", "E-commerce"]
  },
  {
    "id": "spotify-clone",
    "title": "Spotify Music Streaming Clone",
    "description": "A modern music streaming interface replicating Spotify's core features with playlist management, music playback controls, and user-friendly audio experience. (Requires Spotify Premium for full functionality)",
    "icon": "/skills/react.svg",
    "repoType": RepoType.Public,
    "projectType": ProjectType.Personal,
    "githubUrl": "https://github.com/Fawwaz-GitHub/SpotifyClone",
    "url": "https://cloned-spotify.netlify.app/",
    "tags": ["React", "Spotify API", "Music Streaming", "Web Audio"]
  },
  {
    "id": "football-quiz-game",
    "title": "Interactive Football Quiz Game",
    "description": "An engaging real-time quiz application testing football knowledge with timed questions, score tracking, and progressive difficulty levels for football enthusiasts.",
    "icon": "/skills/html.svg",
    "repoType": RepoType.Public,
    "projectType": ProjectType.Personal,
    "githubUrl": "https://github.com/Fawwaz-GitHub/FootballQuiz",
    "url": "https://fawwaz-github.github.io/FootballQuiz/",
    "tags": ["JavaScript", "HTML5", "CSS3", "Game Development", "Sports"]
  }
]
export default projects;
