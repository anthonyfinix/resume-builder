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
  const handleNameChange = (element: ChangeEvent<HTMLInputElement>) => {
    const value = element.target.value;
    if (experience) {
      setExperience({
        ...experience,
        companyName: value,
      });
    }
  };

  const handleDesignationChange = (element: ChangeEvent<HTMLInputElement>) => {
    const value = element.target.value;
    if (experience) {
      setExperience({
        ...experience,
        designation: value,
      });
    }
  };

  const handleDescriptionChange = (
    element: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = element.target.value;
    if (experience) {
      setExperience({
        ...experience,
        description: value,
      });
    }
  };

  const handleStartDate = (newDate: Date | null) => {
    if (newDate && experience) {
      setExperience({
        ...experience,
        startDate: newDate,
      });
    }
  };

  const handleEndDate = (newDate: Date | null) => {
    if (newDate && experience) {
      setExperience({
        ...experience,
        endDate: newDate,
      });
    }
  };
console.log(experience)
  if (!experience) return <></>;

  return (
    <Modal open={!!open} onClose={onClose}>
      <Flex direction="column" gap="5px">
        {/* Company Name */}
        <Flex direction="column">
          <label>Company Name</label>
          <input
            className="input"
            type="text"
            value={experience.companyName}
            onChange={handleNameChange}
          />
        </Flex>

        {/* Designation */}
        <Flex direction="column">
          <label>Designation</label>
          <input
            className="input"
            type="text"
            value={experience.designation}
            onChange={handleDesignationChange}
          />
        </Flex>

        {/* Description */}
        <Flex direction="column">
          <label>Description</label>
          <textarea
            className="input"
            rows={4}
            value={experience.description}
            onChange={handleDescriptionChange}
          />
        </Flex>

        {/* Dates */}
        <Flex direction="column">
          <label>Start Date</label>
          <Datepicker value={experience.startDate} onChange={handleStartDate} />
        </Flex>
        <Flex direction="column">
          <label>End Date</label>
          <Datepicker value={experience.endDate} onChange={handleEndDate} />
        </Flex>

        {/* Actions */}
        <Flex direction="row" gap="10px" marginTop="20px" justify="flex-end">
          <Button color="alternative" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => onSubmit(experience)}>Update</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ExperienceModal;
