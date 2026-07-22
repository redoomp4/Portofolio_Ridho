import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "UI/UX <br> Si-Parkir",
  category: "UI/UX Design",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1778842097/Screenshot_2026-05-15_191740_awbwjd.png",
  tagline:
    "Designing a high-efficiency dashboard for parking operators, prioritizing speed of entry and clarity of data.",
  year: "2025",
  stack: ["Figma"],
  features: [
    "Operator-Centric Dashboard: Optimized for fast vehicle check-in/out workflows.",
    "Real-time Capacity Monitor: Visual representation of available parking slots.",
    "Responsive Web Admin: Mobile-friendly interface for management to track revenue on the go.",
    "Error-Prevention Design: Intuitive input forms and clear feedback messages.",
    "Dark Mode Support: Reduced eye strain for operators working night shifts.",
  ],
  impact: [
    "Reduces vehicle processing time through an intuitive one-click interface.",
    "Simplifies management reporting through clear and interactive data charts.",
    "Modernizes the traditional parking system experience for both staff and admins.",
  ],
  links: {
    live: "https://lynk.id/ridhoo_produkdigital/pw83mzgm3z8d",
  },
};

export default function SiparkirUIUXDetail(props) {
  return <ProjectCaseLayout project={project} {...props} />;
}
