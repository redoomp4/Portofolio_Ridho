import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Hijaukan Bumiku Berkarya Untuk negeriku",
  category: "Graphic Design",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1778843217/Screenshot_2026-05-15_193530_lvq5bz.png",
  tagline:
    "National-level participation in a creative poster competition organized by Universitas Pertamina, showcasing visual storytelling and digital artistry.",
  year: "2023",
  stack: ["Adobe Photoshop"],
  features: [
    "Thematic Visual Storytelling: Translating complex competition themes into impactful graphics.",
    "Advanced Compositing: Blending multiple elements into a cohesive and stunning artwork.",
    "Custom Digital Illustration: Hand-crafted vectors and digital painting elements.",
    "Typography Focus: Using bold and expressive fonts to convey strong messages.",
    "Print Optimization: High-DPI designs ready for large-format exhibition printing.",
  ],
  impact: [
    "Participated in a prestigious national-level design competition organized by Universitas Pertamina.",
    "Developed advanced visual compositing skills using Adobe Photoshop under competition standards.",
    "Gained experience in translating specific institutional themes into compelling visual communication.",
  ],
  links: {
    live: "https://www.linkedin.com/posts/muhridhoalfarod_i-have-just-completed-a-poster-competition-share-7132760209147539456-javM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZnyXoB8pbb9rrZrzxfVM19IxDTEN0_ERc ",
  },
};

export default function PosterCompetitionDetail(props) {
  return <ProjectCaseLayout project={project} {...props} />;
}
