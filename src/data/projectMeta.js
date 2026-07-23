export const PROJECT_META = [
  {
    id: 1,
    slug: "telco-customer-churn-prediction",
    title: "Telco Customer Churn Prediction",
    category: "Machine Learning",
    color: "bg-purple-600",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1784746282/aaee52e3-45c2-44bb-ab5c-9b7d4ee34339_msmtbi.jpg",
  },
  {
    id: 2,
    slug: "room-scheduler",
    title: "Room Scheduler & Algorithm Analysis",
    category: "Desktop Application",
    color: "bg-cyan-600",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1784744906/383b9ed0-4b4d-4dc0-8372-b7f7bfe362b1_kaphjj.jpg",
  },
  {
    id: 3,
    slug: "undangan-digital",
    title: "Wedding Digital Invitation Website",
    category: "Web Development",
    color: "bg-rose-400",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/f_auto,q_auto/v1778837313/eki_ybkxuw.png",
  },
  {
    id: 4,
    slug: "siparkir",
    title: "Si-Parkir (Parking Booking Application)",
    category: "Desktop Application",
    color: "bg-slate-400",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/f_auto,q_auto/v1778838737/siparkir_f3snbg.png",
  },
  {
    id: 5,
    slug: "r-tech",
    title: "R-TECH (Technology Course Website)",
    category: "Web Development",
    color: "bg-blue-600",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/f_auto,q_auto/v1778838209/rtech_esn07d.png",
  },
  {
    id: 6,
    slug: "food-crud",
    title: "Ngilers (Food Management System)",
    category: "Desktop Application",
    color: "bg-yellow-400",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/f_auto,q_auto/v1778839622/ngilers_xhpvyo.png",
  },
  {
    id: 7,
    slug: "r-tech-uiux",
    title: "UI/UX R-TECH",
    category: "UI/UX Design",
    color: "bg-indigo-400",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/f_auto,q_auto/v1778838209/rtech_esn07d.png",
  },
  {
    id: 8,
    slug: "siparkir-uiux",
    title: "UI/UX SI PARKIR",
    category: "UI/UX Design",
    color: "bg-emerald-400",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/f_auto,q_auto/v1778838737/siparkir_f3snbg.png",
  },
  {
    id: 9,
    slug: "poster-competition",
    title: "Hijaukan Bumiku Berkarya Untuk negeriku",
    category: "Graphic Design",
    color: "bg-orange-500",
    img: "https://res.cloudinary.com/dl4nbyn7o/image/upload/f_auto,q_auto/v1778843474/poster_fyiicc.png",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
