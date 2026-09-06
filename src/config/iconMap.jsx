import React from 'react';
import {
  SiHtml5, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJsonwebtokens, SiStripe,
  SiGit, SiGithub, SiDocker, SiJenkins, SiGithubactions, SiLinux, SiKubernetes,
  SiGooglecloud, SiPostman, SiFigma
} from 'react-icons/si';
import { FaCss3, FaAws } from 'react-icons/fa';
import { Code2 } from 'lucide-react'; // Fallback icon

export const techIconMap = {
  // Frontend
  'HTML5': <SiHtml5 className="text-[#E34F26]" />,
  'HTML': <SiHtml5 className="text-[#E34F26]" />,
  'CSS3': <FaCss3 className="text-[#1572B6]" />,
  'CSS': <FaCss3 className="text-[#1572B6]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'JS': <SiJavascript className="text-[#F7DF1E]" />,
  'React.js': <SiReact className="text-[#61DAFB]" />,
  'React': <SiReact className="text-[#61DAFB]" />,
  'Bootstrap': <SiBootstrap className="text-[#7952B3]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,

  // Backend & Database
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Node': <SiNodedotjs className="text-[#339933]" />,
  'Express.js': <SiExpress className="text-slate-800 dark:text-white" />,
  'Express': <SiExpress className="text-slate-800 dark:text-white" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'JWT': <SiJsonwebtokens className="text-[#000000] dark:text-white" />,
  'REST APIs': <Code2 className="text-slate-600 dark:text-slate-300" />,

  // DevOps & Cloud
  'Git': <SiGit className="text-[#F05032]" />,
  'GitHub': <SiGithub className="text-[#181717] dark:text-white" />,
  'Docker': <SiDocker className="text-[#2496ED]" />,
  'Jenkins': <SiJenkins className="text-[#D24939]" />,
  'GitHub Actions': <SiGithubactions className="text-[#2088FF]" />,
  'Linux': <SiLinux className="text-[#FCC624]" />,
  'Kubernetes': <SiKubernetes className="text-[#326CE5]" />,
  'K8s': <SiKubernetes className="text-[#326CE5]" />,
  'AWS': <FaAws className="text-[#232F3E] dark:text-[#FF9900]" />,
  'Google Cloud': <SiGooglecloud className="text-[#4285F4]" />,
  'CI/CD': <SiGithubactions className="text-[#2088FF]" />,

  // Tools
  'Postman': <SiPostman className="text-[#FF6C37]" />,
  'Figma': <SiFigma className="text-[#F24E1E]" />,
  'Stripe': <SiStripe className="text-[#008CDD]" />
};

export const getTechIcon = (techName) => {
  return techIconMap[techName] || <Code2 className="text-slate-500" />;
};
