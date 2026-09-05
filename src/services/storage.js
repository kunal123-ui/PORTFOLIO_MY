// Default initial data for Kunal M.'s portfolio
export const defaultData = {
  version: 1,
  exportedAt: new Date().toISOString(),
  projects: [
    {
      id: "proj-1",
      title: "Food Delivery Platform",
      category: "Full Stack",
      description: "MERN-based food ordering platform with JWT authentication, role-based admin features, Stripe payments, Cloudinary image management, and Groq AI chatbot functionality.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Cloudinary", "Groq AI"],
      image: "", // Placeholder
      github: "https://github.com/kunal123-ui",
      liveDemo: "https://food-dellivery-two.vercel.app/",
      features: ["JWT authentication", "Role-based admin features", "RESTful APIs", "Stripe payments", "Cloudinary image management", "Groq AI chatbot", "Frontend deployment on Vercel", "Backend services on Render"]
    },
    {
      id: "proj-2",
      title: "LegalScan-AI",
      category: "AI",
      description: "AI-powered blockchain-based product verification system with a claimed 25% improvement in product authenticity detection and a companion mobile application.",
      technologies: ["React", "AI", "Blockchain", "Mobile Application"],
      image: "",
      github: "",
      liveDemo: "",
      features: ["AI-powered detection", "Blockchain verification", "Mobile application companion"]
    },
    {
      id: "proj-3",
      title: "Online Quiz Application",
      category: "MERN",
      description: "MERN stack quiz application with user authentication, score tracking, dynamic question management, and a responsive user interface.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "",
      github: "",
      liveDemo: "",
      features: ["User authentication", "Score tracking", "Dynamic question management", "Responsive UI"]
    },
    {
      id: "proj-4",
      title: "DevOps CI/CD Pipeline",
      category: "DevOps",
      description: "Automated CI/CD pipeline for application build, testing, and Docker-based deployment using GitHub Actions and Jenkins.",
      technologies: ["GitHub", "GitHub Actions", "Jenkins", "Docker", "Linux"],
      image: "",
      github: "",
      liveDemo: "",
      features: ["Automated CI/CD pipeline", "Application build & testing", "Docker-based deployment"]
    },
    {
      id: "proj-5",
      title: "Linux Server & Deployment",
      category: "Cloud",
      description: "Linux environment configuration, application hosting, server administration, user management, and Ansible automation.",
      technologies: ["Linux", "Ansible", "Networking"],
      image: "",
      github: "",
      liveDemo: "",
      features: ["Server administration", "User management & permissions", "Ansible automation"]
    }
  ],
  skills: [
    { id: "s-1", name: "HTML", category: "FRONTEND" },
    { id: "s-2", name: "CSS", category: "FRONTEND" },
    { id: "s-3", name: "JavaScript", category: "FRONTEND" },
    { id: "s-4", name: "React.js", category: "FRONTEND" },
    { id: "s-5", name: "Tailwind CSS", category: "FRONTEND" },
    { id: "s-6", name: "Bootstrap", category: "FRONTEND" },
    { id: "s-7", name: "Node.js", category: "BACKEND" },
    { id: "s-8", name: "Express.js", category: "BACKEND" },
    { id: "s-9", name: "MongoDB", category: "DATABASE" },
    { id: "s-10", name: "MySQL", category: "DATABASE" },
    { id: "s-11", name: "Git", category: "DEVOPS" },
    { id: "s-12", name: "GitHub", category: "DEVOPS" },
    { id: "s-13", name: "Docker", category: "DEVOPS" },
    { id: "s-14", name: "Jenkins", category: "DEVOPS" },
    { id: "s-15", name: "GitHub Actions", category: "DEVOPS" },
    { id: "s-16", name: "Linux", category: "DEVOPS" },
    { id: "s-17", name: "Ansible", category: "DEVOPS" },
    { id: "s-18", name: "AWS", category: "CLOUD" },
    { id: "s-19", name: "Google Cloud", category: "CLOUD" },
    { id: "s-20", name: "CI/CD", category: "DEVOPS" },
    { id: "s-21", name: "VS Code", category: "TOOLS" },
    { id: "s-22", name: "Postman", category: "TOOLS" },
    { id: "s-23", name: "Figma", category: "TOOLS" }
  ],
  experience: [
    {
      id: "exp-1",
      title: "Full Stack Development Intern",
      company: "NoviTech R&D Pvt. Ltd.",
      date: "June 2025 – July 2025",
      description: "Responsibilities included React.js, Node.js, RESTful APIs, MongoDB, Git/GitHub, and application deployment workflows."
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.E. Computer Science and Engineering",
      institution: "Jai Shriram Engineering College, Tirupur",
      date: "2023 – 2027",
      details: "CGPA: 7.69 / 10"
    },
    {
      id: "edu-2",
      degree: "HSC",
      institution: "Palaniappa Memorial Hr. Sec. School",
      date: "2022 – 2023",
      details: "Percentage: 72%"
    }
  ],
  certifications: [
    { id: "cert-1", name: "AWS Educate – Introduction to Cloud 101" },
    { id: "cert-2", name: "Google Cloud Computing Foundations" },
    { id: "cert-3", name: "IBM SkillsBuild – AI Fundamentals" },
    { id: "cert-4", name: "Google AI Agents Intensive Program" },
    { id: "cert-5", name: "Introduction to Career Skills in Data Analytics" },
    { id: "cert-6", name: "Full Stack Development Internship – NoviTech R&D Pvt. Ltd." }
  ],
  achievements: [
    { id: "ach-1", name: "First Prize – Nova Project Expo" }
  ],
  messages: []
};

const STORAGE_KEY = "kunal_portfolio_data";
const THEME_KEY = "kunal_portfolio_theme";

// Theme Storage
export const getTheme = () => localStorage.getItem(THEME_KEY) || "system";
export const setTheme = (theme) => localStorage.setItem(THEME_KEY, theme);

// Main Data Storage
export const getPortfolioData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return defaultData;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to parse portfolio data:", e);
    return defaultData;
  }
};

export const savePortfolioData = (data) => {
  data.exportedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const exportData = () => {
  const data = getPortfolioData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `kunal_portfolio_backup_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const importData = (jsonData) => {
  try {
    const data = JSON.parse(jsonData);
    
    // Basic Schema Validation
    if (!data.version || !Array.isArray(data.projects) || !Array.isArray(data.skills)) {
      throw new Error("Invalid JSON format for portfolio data.");
    }
    
    // Backup current before overwriting
    const currentData = getPortfolioData();
    localStorage.setItem(`${STORAGE_KEY}_backup`, JSON.stringify(currentData));
    
    // Save new data
    savePortfolioData(data);
    return true;
  } catch (error) {
    console.error("Import failed:", error);
    // Restore backup if it exists
    const backup = localStorage.getItem(`${STORAGE_KEY}_backup`);
    if (backup) {
      localStorage.setItem(STORAGE_KEY, backup);
    }
    throw error;
  }
};

export const resetData = () => {
  const currentData = getPortfolioData();
  localStorage.setItem(`${STORAGE_KEY}_backup`, JSON.stringify(currentData));
  savePortfolioData(defaultData);
};

// Generic CRUD Operations
export const getItems = (collection) => {
  const data = getPortfolioData();
  return data[collection] || [];
};

export const addItem = (collection, item) => {
  const data = getPortfolioData();
  if (!data[collection]) data[collection] = [];
  
  const newItem = {
    ...item,
    id: `${collection.substring(0, 3)}-${Date.now()}`
  };
  
  data[collection].push(newItem);
  savePortfolioData(data);
  return newItem;
};

export const updateItem = (collection, id, updates) => {
  const data = getPortfolioData();
  if (!data[collection]) return null;
  
  const index = data[collection].findIndex(item => item.id === id);
  if (index !== -1) {
    data[collection][index] = { ...data[collection][index], ...updates };
    savePortfolioData(data);
    return data[collection][index];
  }
  return null;
};

export const deleteItem = (collection, id) => {
  const data = getPortfolioData();
  if (!data[collection]) return false;
  
  const initialLength = data[collection].length;
  data[collection] = data[collection].filter(item => item.id !== id);
  
  if (data[collection].length !== initialLength) {
    savePortfolioData(data);
    return true;
  }
  return false;
};
