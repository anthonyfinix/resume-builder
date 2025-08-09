import { z } from "zod";

const ExperienceSchema = z.object({
  id: z.string(),
  companyName: z.string().min(1, "Company name is required"),
  designation: z.string().min(1, "Position is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.date(),
  endDate: z.date().nullable(),
});

export type Experience = z.infer<typeof ExperienceSchema>

const EducationSchema = z.object({
  id: z.string(),
  institution: z.string().min(1, "Institution name is required"),
  qualification: z.string().min(1, "Qualification is required"),
  startDate: z.date(),
  endDate: z.date().nullable(),
});
export type Education = z.infer<typeof EducationSchema>

export const ResumeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  expectation: z.string().min(1, "Expectation is required"),
  headline: z.string().min(1, "Expectation is required"),
  phoneNumber: z.string().regex(/^[0-9+\-()\s]+$/, "Invalid phone number"),
  dateOfBirth: z.date(),
  email: z.string().email("Invalid email address"),
  currentAddress: z.string().min(1, "Current address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  experience: z.array(ExperienceSchema).default([]),
  education: z.array(EducationSchema).default([]),
  tags: z.array(z.string()).default([]),
  languages: z.array(z.string()).default([]),
});

export type Resume = z.infer<typeof ResumeSchema>;
