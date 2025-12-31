import { ChangeEvent, FC } from "react";
import "./experienceModal.scss";
import { Datepicker } from "flowbite-react";
import Modal from "../Modal";
import Button from "../Button";
import { Flex } from "../Flex";
import { Experience } from "../../types";

const ExperienceModal: FC<{
  open: boolean;
  onClose: () => void;
  onSubmit: (experience: Experience) => void;
  experience: Experience | null;
  setExperience: (updatedExperience: Experience) => void;
}> = ({ experience, open, onClose, setExperience, onSubmit }) => {

  if (!experience) return null;

  // Helper to update specific fields
  const updateField = (field: keyof Experience, value: any) => {
    setExperience({
      ...experience,
      [field]: value,
    });
  };

  return (
    <Modal open={!!open} onClose={onClose}>
      <Flex direction="column" gap="12px">
        <h3 style={{ marginBottom: '8px' }}>Edit Experience</h3>

        {/* Company Name */}
        <Flex direction="column">
          <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Company Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.g. Google"
            value={experience.companyName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("companyName", e.target.value)}
          />
        </Flex>

        {/* Designation */}
        <Flex direction="column">
          <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Designation</label>
          <input
            className="input"
            type="text"
            placeholder="e.g. Senior Developer"
            value={experience.designation}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("designation", e.target.value)}
          />
        </Flex>

        {/* Description */}
        <Flex direction="column">
          <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Description</label>
          <textarea
            className="input"
            rows={4}
            placeholder="Describe your achievements..."
            value={experience.description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateField("description", e.target.value)}
          />
        </Flex>

        {/* Dates - Side by Side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <Flex direction="column">
            <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Start Date</label>
            <Datepicker 
              // Convert string to Date if it came from localStorage
              value={experience.startDate ? new Date(experience.startDate) : undefined} 
              onChange={(date) => updateField("startDate", date)} 
            />
          </Flex>
          
          <Flex direction="column">
            <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>End Date</label>
            <Datepicker 
              // Handles null for current jobs
              value={experience.endDate ? new Date(experience.endDate) : undefined} 
              onChange={(date) => updateField("endDate", date)} 
            />
          </Flex>
        </div>

        {/* Actions */}
        <Flex direction="row" gap="10px" marginTop="20px" justify="flex-end">
          <Button color="alternative" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onSubmit(experience)}>Update Experience</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ExperienceModal;