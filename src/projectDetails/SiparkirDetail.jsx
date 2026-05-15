import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Si-Parkir <br> Parking Management System",
  category: "Desktop Application",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1778838525/Screenshot_2026-05-15_181812_vj16uo.png",
  tagline:
    "A robust desktop-based parking management system designed for high efficiency and accurate vehicle tracking using Java Swing.",
  year: "2025",
  stack: [
    "Java",
    "Swing (GUI)",
    "SQLite",
    "JDBC",
  ],
  features: [
    "Vehicle Check-in/out: Fast processing of vehicle entry and exit with unique ticket IDs.",
    "Automated Billing: Real-time calculation of parking fees based on duration and vehicle type.",
    "Database Persistence: Secure storage of all transaction history using a local SQLite database.",
    "Report Generation: Daily and monthly revenue reports for management analysis.",
    "User Authentication: Secure login system for operators to prevent unauthorized access.",
  ],
  impact: [
    "Minimizes human error in calculating parking fees and managing vehicle capacity.",
    "Improves transaction speed at parking gates, reducing vehicle queues.",
    "Provides accurate financial data for better business monitoring.",
  ],
  links: {
    repo: "https://github.com/redoomp4/SiParkir-App.git",
  },
};

export default function DiabetesClassificationDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
