export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "btech-cse",
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering specialization in AI & ML",
    institution: "Galgotias University",
    location: "Greater Noida, Uttar Pradesh",
    startDate: "2023",
    endDate: "2027",
    gpa: "7.54 / 10",
  },
];
