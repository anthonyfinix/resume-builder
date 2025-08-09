// src/components/EducationModal/EducationModal.tsx
import { ChangeEvent, FC } from "react";
import "./educationModal.scss"; // reusing the same styles
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
  
  // Institution change
  const handleInstitutionChange = (element: ChangeEvent<HTMLInputElement>) => {
    const value = element.target.value;
    if (education) {
      setEducation({
        ...education,
        institution: value,
      });
    }
  };

  // Qualification change
  const handleQualificationChange = (element: ChangeEvent<HTMLInputElement>) => {
    const value = element.target.value;
    if (education) {
      setEducation({
        ...education,
        qualification: value,
      });
    }
  };

  // Start date
  const handleStartDate = (newDate: Date | null) => {
    if (education) {
      setEducation({
        ...education,
        startDate: newDate || new Date(),
      });
    }
  };

  // End date
  const handleEndDate = (newDate: Date | null) => {
    if (education) {
      setEducation({
        ...education,
        endDate: newDate,
      });
    }
  };

  if (!education) return <></>;

  return (
    <Modal open={!!open} onClose={onClose}>
      <Flex direction="column" gap="5px">
        
        {/* Institution */}
        <Flex direction="column">
          <label>Institution</label>
          <input
            className="input"
            type="text"
            value={education.institution}
            onChange={handleInstitutionChange}
          />
        </Flex>

        {/* Qualification */}
        <Flex direction="column">
          <label>Qualification</label>
          <input
            className="input"
            type="text"
            value={education.qualification}
            onChange={handleQualificationChange}
          />
        </Flex>

        {/* Start Date */}
        <Flex direction="column">
          <label>Start Date</label>
          <Datepicker value={education.startDate} onChange={handleStartDate} />
        </Flex>

        {/* End Date */}
        <Flex direction="column">
          <label>End Date</label>
          <Datepicker value={education.endDate} onChange={handleEndDate} />
        </Flex>

        {/* Actions */}
        <Flex direction="row" gap="10px" marginTop="20px" justify="flex-end">
          <Button color="alternative" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => onSubmit(education)}>Update</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default EducationModal;
