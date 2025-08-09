import { useContext, useState } from "react";
import { ResumeContext } from "./ResumeProvider";
import { Dustbin, Pen, Plus } from "./icons";
import ExperienceModal from "./ExperienceModal/ExperienceModal";
import { Experience } from "../types";

const WorkExperienceSidebar = () => {
  const resumeContext = useContext(ResumeContext);
  const [currentExperience, setCurrentExperience] = useState<Experience | null>(
    null
  );
  const handleDeleteExperience = (id: string) => {
    resumeContext?.setExperience(
      resumeContext.experience.filter((exp) => exp.id !== id)
    );
  };
  const openExperienceEditor = (id?: string) => {
    if (id) {
      const experience = resumeContext?.experience.find((exp) => exp.id === id);
      if (experience)
        setCurrentExperience({
          id: experience.id,
          companyName: experience.companyName,
          designation: experience.designation,
          description: experience.description,
          startDate: experience.startDate,
          endDate: experience.endDate,
        });
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

  const saveExperience = () => {
    if (!currentExperience) return;
    resumeContext?.setExperience((prev) => {
      const exists = prev.some((exp) => exp.id === currentExperience.id);
      if (exists) {
        return prev.map((exp) =>
          exp.id === currentExperience.id ? currentExperience : exp
        );
      }
      return [...prev, currentExperience];
    });
    setCurrentExperience(null);
  };

  if (!resumeContext) return <h1>Loading</h1>;
  return (
    <>
      <div className="subsidebar">
        {resumeContext.experience.map((exp) => (
          <div className="experience-item">
            <p>{exp.companyName}</p>
            <Dustbin onClick={() => handleDeleteExperience(exp.id)} />
            <Pen onClick={() => openExperienceEditor(exp.id)} />
          </div>
        ))}
        <div
          className="experience-item"
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
