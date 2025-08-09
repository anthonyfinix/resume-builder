import { useContext, useState } from "react";
import { ResumeContext } from "./ResumeProvider";
import { Dustbin, Pen, Plus } from "./icons";
import { Education } from "../types";
import EducationModal from "./EducationModal/EducationModal";

const EducationSidebar = () => {
  const resumeContext = useContext(ResumeContext);
  const [currentEducation, setCurrentEducation] = useState<Education | null>(null);

  // Delete handler
  const handleDeleteEducation = (id: string) => {
    resumeContext?.setEducation(
      resumeContext.education.filter((edu) => edu.id !== id)
    );
  };

  // Open editor for 'add' or 'edit'
  const openEducationEditor = (id?: string) => {
    if (id) {
      const education = resumeContext?.education.find((edu) => edu.id === id);
      if (education)
        setCurrentEducation({
          id: education.id,
          institution: education.institution,
          qualification: education.qualification,
          startDate: education.startDate,
          endDate: education.endDate,
        });
    } else {
      setCurrentEducation({
        id: crypto.randomUUID(),
        institution: "",
        qualification: "", // <-- Added
        startDate: new Date(),
        endDate: null,
      });
    }
  };

  // Save/add/update
  const saveEducation = () => {
    if (!currentEducation) return;
    resumeContext?.setEducation((prev) => {
      const exists = prev.some((edu) => edu.id === currentEducation.id);
      if (exists) {
        return prev.map((edu) =>
          edu.id === currentEducation.id ? currentEducation : edu
        );
      }
      return [...prev, currentEducation];
    });
    setCurrentEducation(null);
  };

  if (!resumeContext) return <h1>Loading…</h1>;
  return (
    <>
      <div className="subsidebar">
        {resumeContext.education.map((edu) => (
          <div className="education-item" key={edu.id}>
            <p>{edu.institution}</p>
            <Dustbin onClick={() => handleDeleteEducation(edu.id)} />
            <Pen onClick={() => openEducationEditor(edu.id)} />
          </div>
        ))}
        <div
          className="education-item"
          style={{ cursor: "pointer" }}
          onClick={() => openEducationEditor()}
        >
          <p>Add Education</p>
          <Plus />
        </div>
      </div>
      <EducationModal
        open={!!currentEducation}
        onClose={() => setCurrentEducation(null)}
        education={currentEducation}
        setEducation={setCurrentEducation}
        onSubmit={saveEducation}
      />
    </>
  );
};

export default EducationSidebar;
