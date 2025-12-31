import { Education, Experience } from "../types";

export const STORAGE_KEY = "resume-data-v1";

export interface ResumeState {
  basics: {
    name: string;
    label: string; // Your "headline"
    email: string;
    phone: string;
    summary: string; // Your "expectation"
    location: {
      address: string; // Current
      postalAddress: string; // Permanent
    };
    profiles: { network: string; url: string }[];
    birthDate: Date;
  };
  work: Experience[];
  education: Education[];
  skills: { keywords: string[] };
  languages: string[];
}

const initialState: ResumeState = {
  basics: {
    name: "JOHN DOE",
    label: "Creative software engineer with 7+ years experience",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    summary: "I seek a challenging role that fosters growth, values collaboration, and allows me to apply my skills to create impactful solutions.",
    location: {
      address: "123 Main St, Springfield, IL",
      postalAddress: "456 Elm St, Springfield, IL",
    },
    profiles: [],
    birthDate: new Date(1990, 0, 1),
  },
  work: [
    {
      id: "exp1",
      companyName: "Tech Solutions Inc.",
      designation: "Software Engineer",
      description: "Built and maintained web applications using React and Node.js. Improved performance, implemented automated tests, and worked in cross‑functional teams.",
      startDate: new Date(2019, 0),
      endDate: new Date(2021, 5),
    },
    {
      id: "exp2",
      companyName: "Creative Apps Ltd.",
      designation: "Frontend Developer",
      description:
        "Developed responsive UI components with React and TypeScript. Optimized speed, enhanced accessibility, and integrated APIs.",
      startDate: new Date(2021, 6),
      endDate: null,
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Tech University",
      qualification: "B.Sc. Computer Science",
      startDate: new Date(2015, 8),
      endDate: new Date(2019, 5),
    }, 
    {
      id: "education2",
      institution: "Online Coding Bootcamp",
      qualification: "Full Stack Development",
      startDate: new Date(2023, 1), // February 2023
      endDate: null, // Currently ongoing
    },
  ],
  skills: { keywords: ["React", "Shopify"] },
  languages: ["English", "Malayalam", "Hindi"],
};

export const loadSavedState = (): ResumeState => {
  if (typeof window === "undefined") return initialState;
  
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return initialState;

  try {
    // Parse the JSON
    const parsed = JSON.parse(saved);
    
    // Convert date strings back into Date objects (JSON.parse makes them strings)
    parsed.basics.birthDate = new Date(parsed.basics.birthDate);
    parsed.work = parsed.work.map((w: any) => ({
      ...w,
      startDate: new Date(w.startDate),
      endDate: w.endDate ? new Date(w.endDate) : null
    }));
    parsed.education = parsed.education.map((e: any) => ({
      ...e,
      startDate: new Date(e.startDate),
      endDate: e.endDate ? new Date(e.endDate) : null
    }));
    
    return parsed;
  } catch (err) {
    console.error("Failed to load resume from storage", err);
    return initialState;
  }
};

export default initialState;