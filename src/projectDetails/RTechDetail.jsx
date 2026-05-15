import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "R-TECH <br> Technology Course Website",
  category: "Web Development",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/c_crop,g_north_west,h_880,w_1812,x_8,y_12/Screenshot_2026-05-15_172805_lfddhm.png",
  tagline:
    "An interactive education platform for modern technology, providing structured learning paths and professional course management.",
  year: "2024",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "ExpressJS",
    "Supabase",
  ],
  features: [
    "Interactive Course Catalog: Browse and filter various technology courses easily.",
    "User Enrollment System: Simple and secure registration for students to access premium content.",
    "Personalized Dashboard: Track learning progress and access course materials in one place.",
    "Responsive Design: Optimized for seamless learning on desktop and mobile devices.",
    "Secure Backend: Powered by ExpressJS and Supabase for robust data management.",
  ],
  impact: [
    "Empowers students with structured technology education.",
    "Provides a professional digital learning environment.",
    "Streamlines course management and student interaction.",
  ],
  links: {
    repo: "https://github.com/redoomp4/R-TECH",
    live: "https://rtech-academy.vercel.app/",
  },
};

export default function DiabetesClassificationDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
