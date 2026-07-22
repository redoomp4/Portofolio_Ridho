// --- Project Detail Data ---
// Pure data objects extracted from project detail components.
// This file is imported by aiContext.js and ChatWidget.jsx so that
// the React components (with JSX) remain lazily loaded and don't
// get pulled into the ChatWidget bundle.

export const PROJECT_DETAILS_DATA = {
  "r-tech": {
    title: "R-TECH (Technology Course Website)",
    category: "Web Development",
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
      live: "https://rtech-academy.vercel.app/",
      repo: "https://github.com/redoomp4/R-TECH",
    },
  },
  "undangan-digital": {
    title: "Undangan Digital (Digital Invitation)",
    category: "Web Development",
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
      repo: "https://github.com/redoomp4/Digital-Invitation",
      live: "https://weddingbayuristy2024.vercel.app/",
    },
  },
  siparkir: {
    title: "SIPARKIR Parking Management System",
    category: "Desktop Application",
    tagline:
      "A robust desktop-based parking management system designed for high efficiency and accurate vehicle tracking using Java Swing.",
    year: "2024",
    stack: ["Java", "Swing (GUI)", "SQLite", "JDBC"],
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
      repo: "https://github.com/redoomp4/SIPARKIR",
    },
  },
  "food-crud": {
    title: "Ngilers (Food Management System)",
    category: "Desktop Application",
    tagline:
      "A clean and functional web application for managing food inventories, categories, and pricing with a modern administrative interface.",
    year: "2024",
    stack: ["Python"],
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
      repo: "https://github.com/redoomp4/Food-CRUD-App",
    },
  },
  "r-tech-uiux": {
    title: "UI/UX R-TECH",
    category: "UI/UX Design",
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
      live: "https://lynk.id/ridhoo_produkdigital/z089g39e3yg0",
    },
  },
  "siparkir-uiux": {
    title: "UI/UX <br> Si-Parkir",
    category: "UI/UX Design",
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
      live: "https://www.figma.com/design/AxFxY2Zrc6QFmdz8zUSJmv/Si-Parkir-UI-UX?node-id=0-1&t=NtOV7aalOboIW9Vc-1",
    },
  },
  "poster-competition": {
    title: "Hijaukan Bumiku Berkarya Untuk negeriku",
    category: "Graphic Design",
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
  },
  "telco-customer-churn-prediction": {
    title: "Telco Customer Churn Prediction",
    category: "Machine Learning",
    tagline:
      "Proyek ini mengembangkan portal analitik berbasis Machine Learning untuk memprediksi risiko customer churn pada industri SaaS/Telco menggunakan algoritma Random Forest dan XGBoost, di mana penanganan data imbalance diproses secara akurat lewat pipeline anti-data leakage menggunakan SMOTE dan dioptimalkan melalui Hyperparameter Tuning, serta disajikan secara interaktif melalui dashboard Streamlit yang siap memprediksi risiko pelanggan secara individu maupun massal.",
    year: "2024",
    stack: ["Python", "Scikit-Learn", "XGBoost", "Streamlit", "SMOTE", "Pandas"],
    features: [
      "Machine Learning Modeling: Predicting customer churn risk using Random Forest and XGBoost algorithms.",
      "Anti-Data Leakage Pipeline: Integrated SMOTE resampling strictly within cross-validation folds to eliminate data leakage.",
      "Hyperparameter Tuning: Optimized hyperparameters to maximize precision, recall, and ROC-AUC scores.",
      "Interactive Streamlit Dashboard: Real-time interactive interface for both individual customer inference and batch CSV processing.",
      "Feature Importance & Insights: Clear visual metrics for identifying key churn drivers in SaaS/Telco business models.",
    ],
    impact: [
      "Empowers SaaS/Telco businesses to proactively retain customers by discovering high-risk churn indicators early.",
      "Ensures reliable ML metrics through robust anti-data leakage validation pipelines.",
      "Streamlines single and bulk churn analysis for non-technical stakeholders via Streamlit.",
    ],
    links: {
      repo: "https://github.com/redoomp4/Telco-Churn-ML.git",
    },
  },
  "room-scheduler": {
    title: "Room Scheduler & Algorithm Analysis",
    category: "Desktop Application",
    tagline:
      "Proyek ini adalah sebuah Aplikasi Penjadwalan Ruangan dan Analisis Kompleksitas Algoritma yang dirancang untuk mengatasi masalah Activity Selection sekaligus menguji efisiensi komputasi. Aplikasi ini menggunakan Algoritma Greedy untuk mengalokasikan jadwal kelas secara optimal tanpa bentrok (mempertimbangkan ruangan, waktu, dosen, dan kapasitas), serta menyertakan Algoritma Brute Force murni sebagai pembanding. Dilengkapi dengan antarmuka ganda (GUI interaktif dan CLI) serta fitur simulasi benchmarking waktu aktual, sistem ini mampu membuktikan secara empiris dan visual (melalui grafik matplotlib) efisiensi ekstrem dari kompleksitas O(N log N) dibandingkan kinerja eksponensial O(2^N) saat memproses ribuan data secara otomatis.",
    year: "2024",
    stack: ["Python", "Tkinter", "Matplotlib", "Algorithm Design (Greedy & Brute Force)"],
    features: [
      "Greedy Algorithm Scheduler: Optimal Activity Selection algorithm with O(N log N) complexity ensuring non-overlapping room, lecturer, time, and capacity allocation.",
      "Brute Force Comparison Engine: Pure O(2^N) exhaustive search solver for exact mathematical performance comparison.",
      "Dual Interface (GUI & CLI): Features an interactive Tkinter graphical interface along with a lightweight Command-Line Interface for automated execution.",
      "Empirical Benchmarking: Automated execution time profiling across exponentially growing dataset sizes.",
      "Matplotlib Visual Analytics: Integrated graphing module to render real-time comparative runtime curves (O(N log N) vs O(2^N)).",
    ],
    impact: [
      "Eliminates schedule conflicts in academic room reservation through deterministic Greedy selection.",
      "Empirically proves the massive computational advantage of optimal algorithmic design over brute-force exhaustive searches.",
      "Serves as an educational and operational tool for visualizing algorithmic efficiency on real-world datasets.",
    ],
    links: {
      repo: "https://github.com/redoomp4/Room_Scheduler.git",
    },
  },
};
