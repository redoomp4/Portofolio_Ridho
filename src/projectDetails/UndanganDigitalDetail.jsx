import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Wedding Digital Invitation Website",
  category: "Web Development",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1778836554/Screenshot_2026-05-15_174533_d6mggc.png",
  tagline:
    "A premium digital invitation platform featuring elegant designs, smooth animations, and a seamless mobile-first experience.",
  year: "2024",
  stack: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "AOS (Animate On Scroll)",
    "GSAP",
  ],
  features: [
    "Customizable Themes: Multiple elegant templates for various event types.",
    "Responsive Design: Optimized for flawless viewing on smartphones, tablets, and desktops.",
    "Interactive Elements: RSVP forms, Google Maps integration, and background music control.",
    "Smooth Animations: Entrance effects and parallax scrolling for a premium feel.",
    "Guest Management: Personalized links for each invited guest.",
  ],
  impact: [
    "Reduces paper waste by providing an eco-friendly alternative to physical invitations.",
    "Simplifies RSVP tracking for event organizers through integrated data collection.",
    "Delivers a more engaging and modern experience for invited guests.",
  ],
  links: {
    repo: "https://github.com/redoomp4/Wedding_Digital.git",
    live: "https://weddingbayuristy2024.vercel.app/"
  },
};

export default function DiabetesClassificationDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
