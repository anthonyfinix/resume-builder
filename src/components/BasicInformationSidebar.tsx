import { useContext, useCallback } from "react";
import { ResumeContext } from "../Provider/ResumeProvider";
import { Datepicker } from "flowbite-react";

const BasicInformationSidebar = () => {
  const resumeContext = useContext(ResumeContext);

  // We check if the context exists early
  if (!resumeContext) return <h1>Loading</h1>;

  const { state, dispatch } = resumeContext;
  const { basics } = state;

  // Generic handler for all "Basics" text inputs
  // This is the beauty of a Reducer—you can use one function for many fields!
  const updateBasics = (field: string, value: any) => {
    dispatch({
      type: "UPDATE_BASICS",
      payload: { [field]: value },
    });
  };

  return (
    <div className="subsidebar">
      <div className="input-wrapper">
        <p>Name</p>
        <input
          className="input"
          type="text"
          value={basics.name}
          onChange={(e) => updateBasics("name", e.target.value)}
        />
      </div>
      
      <div className="input-wrapper">
        <p>Headline</p>
        <textarea
          className="input"
          rows={3}
          value={basics.label} // Mapped to 'label' in JSON Resume schema
          onChange={(e) => updateBasics("label", e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <p>Expectation</p>
        <textarea
          className="input"
          rows={3}
          value={basics.summary} // Mapped to 'summary' in JSON Resume schema
          onChange={(e) => updateBasics("summary", e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <p>Phone Number</p>
        <input
          className="input"
          type="text"
          value={basics.phone}
          onChange={(e) => updateBasics("phone", e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <p>Email Address</p>
        <input
          className="input"
          type="text"
          value={basics.email}
          onChange={(e) => updateBasics("email", e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <p>Date of birth</p>
        <Datepicker
          className="input dateInput"
          color="white"
          /* Datepicker expects a date, so we ensure it's a real Date object */
          value={new Date(basics.birthDate)} 
          onChange={(newDate) => updateBasics("birthDate", newDate)}
        />
      </div>

      <div className="input-wrapper">
        <p>Current Address</p>
        <textarea
          className="input"
          value={basics.location.address}
          onChange={(e) => 
            dispatch({ 
              type: "UPDATE_BASICS", 
              payload: { location: { ...basics.location, address: e.target.value } } 
            })
          }
        />
      </div>

      <div className="input-wrapper">
        <p>Permanent Address</p>
        <textarea
          className="input"
          value={basics.location.postalAddress}
          onChange={(e) => 
            dispatch({ 
              type: "UPDATE_BASICS", 
              payload: { location: { ...basics.location, postalAddress: e.target.value } } 
            })
          }
        />
      </div>
    </div>
  );
};

export default BasicInformationSidebar;