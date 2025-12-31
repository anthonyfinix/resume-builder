import { ChangeEvent, FC } from "react";
import "./educationModal.scss"; 
import { Datepicker } from "flowbite-react";
import Modal from "../Modal";
import Button from "../Button";
import { Flex } from "../Flex";
import { Education } from "../../types";

const EducationModal: FC<{
  open: boolean;
  onClose: () => void;
  onSubmit: (education: Education) => void;
  education: Education | null;
  setEducation: (updatedEducation: Education) => void;
}> = ({ education, open, onClose, setEducation, onSubmit }) => {
  
  if (!education) return null;

  // Helper to keep the code dry
  const updateField = (field: keyof Education, value: any) => {
    setEducation({
      ...education,
      [field]: value,
    });
  };

  return (
    <Modal open={!!open} onClose={onClose}>
      <Flex direction="column" gap="12px">
        <h3 style={{ marginBottom: '10px' }}>Edit Education</h3>
        
        {/* Institution */}
        <Flex direction="column">
          <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Institution</label>
          <input
            className="input"
            type="text"
            placeholder="e.g. Harvard University"
            value={education.institution}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("institution", e.target.value)}
          />
        </Flex>

        {/* Qualification */}
        <Flex direction="column">
          <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Qualification</label>
          <input
            className="input"
            type="text"
            placeholder="e.g. Bachelor of Science"
            value={education.qualification}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("qualification", e.target.value)}
          />
        </Flex>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {/* Start Date */}
          <Flex direction="column">
            <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Start Date</label>
            <Datepicker 
              // Ensure it's a real Date object for Flowbite
              value={education.startDate ? new Date(education.startDate) : undefined} 
              onChange={(date) => updateField("startDate", date)} 
            />
          </Flex>

          {/* End Date */}
          <Flex direction="column">
            <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>End Date</label>
            <Datepicker 
              // Handles null for "Ongoing" education
              value={education.endDate ? new Date(education.endDate) : undefined} 
              onChange={(date) => updateField("endDate", date)} 
            />
          </Flex>
        </div>

        {/* Actions */}
        <Flex direction="row" gap="10px" marginTop="20px" justify="flex-end">
          <Button color="alternative" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onSubmit(education)}>
            Save Changes
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default EducationModal;