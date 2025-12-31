import { useContext, useState } from "react";
import { ResumeContext } from "../Provider/ResumeProvider";
import { Dustbin, Pen, Plus } from "./icons";
import { Education } from "../types";
import EducationModal from "./EducationModal/EducationModal";

const EducationSidebar = () => {
  const resumeContext = useContext(ResumeContext);
  const [currentEducation, setCurrentEducation] = useState<Education | null>(null);

  if (!resumeContext) return <h1>Loading…</h1>;

  const { state, dispatch } = resumeContext;

  // Delete handler
  const handleDeleteEducation = (id: string) => {
    const updatedEducation = state.education.filter((edu) => edu.id !== id);
    dispatch({ type: "UPDATE_EDUCATION", payload: updatedEducation });
  };

  // Open editor for 'add' or 'edit'
  const openEducationEditor = (id?: string) => {
    if (id) {
      const education = state.education.find((edu) => edu.id === id);
      if (education) {
        // Deep clone the object to avoid direct state mutation in local state
        setCurrentEducation({ ...education });
      }
    } else {
      setCurrentEducation({
        id: crypto.randomUUID(),
        institution: "",
        qualification: "",
        startDate: new Date(),
        endDate: null,
      });
    }
  };

  // Save handler (Add or Update)
  const saveEducation = (updatedEdu: Education) => {
    const exists = state.education.some((edu) => edu.id === updatedEdu.id);
    
    let newList;
    if (exists) {
      newList = state.education.map((edu) =>
        edu.id === updatedEdu.id ? updatedEdu : edu
      );
    } else {
      newList = [...state.education, updatedEdu];
    }

    dispatch({ type: "UPDATE_EDUCATION", payload: newList });
    setCurrentEducation(null);
  };

  return (
    <>
      <div className="subsidebar">
        {state.education.map((edu) => (
          <div className="education-item" key={edu.id}>
            <p>{edu.institution || "Untitled Institution"}</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Pen onClick={() => openEducationEditor(edu.id)} />
              <Dustbin onClick={() => handleDeleteEducation(edu.id)} />
            </div>
          </div>
        ))}
        <div
          className="education-item add-btn"
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