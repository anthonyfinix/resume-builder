import { useContext, useCallback } from "react";
import { ResumeContext } from "./ResumeProvider";
import { Datepicker } from "flowbite-react";

const BasicInformationSidebar = () => {
  const resumeContext = useContext(ResumeContext);

  // Event Handlers with useCallback
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      resumeContext!.setName(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  // Event Handlers with useCallback
  const handleHeadlineChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      resumeContext!.setHeadline(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      resumeContext!.setPhoneNumber(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      resumeContext!.setEmail(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleDateOfBirthChange = useCallback(
    (newDate: Date | null) => {
      // Defensive: Only set if newDate is provided
      if (newDate) {
        resumeContext!.setDateOfBirth(newDate);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleCurrentAddressChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      resumeContext!.setCurrentAddress(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handlePermanentAddressChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      resumeContext!.setPermanentAddress(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (!resumeContext) return <h1>Loading</h1>;

  return (
    <div className="subsidebar">
      <div className="input-wrapper">
        <p>Name</p>
        <input
          className="input"
          type="text"
          value={resumeContext.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="input-wrapper">
        <p>Headline</p>
        <textarea
          className="input"
          rows={3}
          value={resumeContext.headline}
          onChange={handleHeadlineChange}
        />
      </div>
      <div className="input-wrapper">
        <p>Phone Number</p>
        <input
          className="input"
          type="text"
          value={resumeContext.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="input-wrapper">
        <p>Email Address</p>
        <input
          className="input"
          type="text"
          value={resumeContext.email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="input-wrapper">
        <p>Date of birth</p>
        <Datepicker
          className="input dateInput"
          color="white"
          value={resumeContext.dateOfBirth}
          onChange={handleDateOfBirthChange}
        />
      </div>
      <div className="input-wrapper">
        <p>Current Address</p>
        <textarea
          className="input"
          value={resumeContext.currentAddress}
          onChange={handleCurrentAddressChange}
        />
      </div>
      <div className="input-wrapper">
        <p>Permanent Address</p>
        <textarea
          className="input"
          value={resumeContext.permanentAddress}
          onChange={handlePermanentAddressChange}
        />
      </div>
    </div>
  );
};

export default BasicInformationSidebar;
