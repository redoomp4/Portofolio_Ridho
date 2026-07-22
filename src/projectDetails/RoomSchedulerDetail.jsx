import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Room Scheduler & <br> Algorithm Analysis",
  category: "Desktop Application",
  heroImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
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
};

export default function RoomSchedulerDetail(props) {
  return <ProjectCaseLayout project={project} {...props} />;
}
