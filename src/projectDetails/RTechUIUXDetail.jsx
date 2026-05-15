import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "UI/UX <br> R-TECH",
  category: "UI/UX Design",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1778842083/Screenshot_2026-05-15_191417_inmpg5.png",
  tagline:
    "A deep dive into the user-centered design process for the R-TECH education platform, focusing on learning flow and accessibility.",
  year: "2025",
  stack: ["Figma"],
  features: [
    "User Persona Research: Identifying key student and instructor pain points.",
    "Information Architecture: Streamlining course navigation and enrollment flows.",
    "High-Fidelity Prototyping: Interactive mockups for desktop and mobile learners.",
    "Design System: Creating a consistent set of components for buttons, cards, and inputs.",
    "Usability Testing: Refining UI elements based on real user feedback sessions.",
  ],
  impact: [
    "Improved course discovery speed by 40% through better layout organization.",
    "Increased user sign-up intent by creating a more trustworthy and professional visual style.",
    "Ensures accessibility compliance for diverse groups of learners.",
  ],
  links: {
    live: "https://www.figma.com/design/z7x1uVq4UQN0GLKW6hYAms/RTECH-UI--UX?node-id=0-1&t=LXxWqsoeOxAL8FEH-1",
  },
};

export default function RTechUIUXDetail(props) {
  return <ProjectCaseLayout project={project} {...props} />;
}
