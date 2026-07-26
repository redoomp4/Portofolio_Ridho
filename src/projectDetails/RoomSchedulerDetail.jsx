import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Room Scheduler & <br> Algorithm Analysis",
  category: "Desktop Application",
  heroImg: "https://res.cloudinary.com/dl4nbyn7o/image/upload/v1784744906/383b9ed0-4b4d-4dc0-8372-b7f7bfe362b1_kaphjj.jpg",
  tagline:
    "Aplikasi penjadwalan ruangan bebas bentrok berbasis Algoritma Greedy O(N log N) vs Brute Force O(2^N), dilengkapi antarmuka GUI/CLI serta simulasi benchmarking & visualisasi performa komputasi secara real-time.",
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
};

export default function RoomSchedulerDetail(props) {
  return <ProjectCaseLayout project={project} {...props} />;
}
