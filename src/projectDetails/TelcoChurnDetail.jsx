import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Telco Customer Churn <br> Prediction",
  category: "Machine Learning",
  heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
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
};

export default function TelcoChurnDetail(props) {
  return <ProjectCaseLayout project={project} {...props} />;
}
