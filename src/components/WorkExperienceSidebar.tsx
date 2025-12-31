import { useContext, useState } from "react";
import { ResumeContext } from "../Provider/ResumeProvider";
import { Dustbin, Pen, Plus } from "./icons";
import ExperienceModal from "./ExperienceModal/ExperienceModal";
import { Experience } from "../types";

const WorkExperienceSidebar = () => {
  const resumeContext = useContext(ResumeContext);
  const [currentExperience, setCurrentExperience] = useState<Experience | null>(null);

  if (!resumeContext) return <h1>Loading...</h1>;

  const { state, dispatch } = resumeContext;

  // 1. Delete: Filter the 'work' array and dispatch
  const handleDeleteExperience = (id: string) => {
    const updatedWork = state.work.filter((exp) => exp.id !== id);
    dispatch({ type: "UPDATE_EXPERIENCE", payload: updatedWork });
  };

  // 2. Open Editor: Find in state or create a fresh object
  const openExperienceEditor = (id?: string) => {
    if (id) {
      const experience = state.work.find((exp) => exp.id === id);
      if (experience) {
        // Spread to create a local copy so we don't mutate state directly
        setCurrentExperience({ ...experience });
      }
    } else {
      setCurrentExperience({
        id: crypto.randomUUID(),
        companyName: "",
        designation: "",
        description: "",
        startDate: new Date(),
        endDate: null,
      });
    }
  };

  // 3. Save: Update the list and dispatch to global state
  const saveExperience = (updatedExp: Experience) => {
    const exists = state.work.some((exp) => exp.id === updatedExp.id);
    
    let newList;
    if (exists) {
      newList = state.work.map((exp) =>
        exp.id === updatedExp.id ? updatedExp : exp
      );
    } else {
      newList = [...state.work, updatedExp];
    }

    dispatch({ type: "UPDATE_EXPERIENCE", payload: newList });
    setCurrentExperience(null);
  };

  return (
    <>
      <div className="subsidebar">
        {state.work.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <p>{exp.companyName || "Untitled Company"}</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Pen onClick={() => openExperienceEditor(exp.id)} />
              <Dustbin onClick={() => handleDeleteExperience(exp.id)} />
            </div>
          </div>
        ))}
        
        <div
          className="experience-item add-btn"
          style={{ cursor: "pointer" }}
          onClick={() => openExperienceEditor()}
        >
          <p>Add Experience</p>
          <Plus />
        </div>
      </div>

      <ExperienceModal
        open={!!currentExperience}
        onClose={() => setCurrentExperience(null)}
        experience={currentExperience}
        setExperience={setCurrentExperience}
        onSubmit={saveExperience}
      />
    </>
  );
};

export default WorkExperienceSidebar;