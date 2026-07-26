import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Telco Customer Churn <br> Prediction",
  category: "ML Development",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1784746282/aaee52e3-45c2-44bb-ab5c-9b7d4ee34339_msmtbi.jpg",
  tagline:
    "Portal analitik Machine Learning (Random Forest & XGBoost) untuk memprediksi risiko customer churn pada industri SaaS/Telco, dilengkapi penanganan data imbalance (SMOTE) anti-leakage serta dashboard interaktif Streamlit.",
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
    live: "https://kelompok5-telco-churn.streamlit.app/",
  },
};

export default function TelcoChurnDetail(props) {
  return <ProjectCaseLayout project={project} {...props} />;
}
