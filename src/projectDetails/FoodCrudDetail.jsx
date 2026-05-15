import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Ngilers <br> Food Management System",
  category: "Desktop Application",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1778838332/Screenshot_2026-05-15_181506_neegpn.png",
  tagline:
    "A clean and functional web application for managing food inventories, categories, and pricing with a modern administrative interface.",
  year: "2024",
  stack: [
    "Python",
  ],
  features: [
    "CRUD Operations: Full ability to Create, Read, Update, and Delete food items.",
    "Category Management: Group items by type for better organization.",
    "Image Uploads: Support for attaching photos to food items for visual identification.",
    "Search & Filter: Quickly find specific items using search bars and category filters.",
    "Responsive Dashboard: Manage your inventory from any device.",
  ],
  impact: [
    "Simplifies inventory management for small food businesses or restaurants.",
    "Provides a central database for menu items, prices, and descriptions.",
    "Ensures data consistency and easy updates for business owners.",
  ],
  links: {
    repo: "https://github.com/redoomp4/Food-Nutrition-Rating-Application.git",
  },
};

export default function NgilersDetail(props) {
  return <ProjectCaseLayout project={project} {...props} />;
}