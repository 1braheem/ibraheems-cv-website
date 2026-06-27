export interface EducationInterface {
  degree: string;
  institution: string;
  duration: string;
  details?: string;
}

export const education: EducationInterface[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution:
      "National University of Computer and Emerging Sciences (FAST NUCES), Islamabad",
    duration: "Expected: Aug 2027",
    details:
      "Coursework includes Data Structures, OOP, Operating Systems, Database Systems, and Computer Networks.",
  },
  {
    degree: "Pre-Engineering (Intermediate)",
    institution: "Army Public School and College System, Rawalpindi",
    duration: "Graduated: June 2023",
  },
];
