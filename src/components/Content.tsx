import { useContext } from "react";
import Resume from "./Resume/Resume";
import { ResumeContext } from "./ResumeProvider";

const Content = () => {
  const resumeContext = useContext(ResumeContext);
  return <div className="content">
    <Resume ref={resumeContext?.resumeRef} />
  </div>;
};
export default Content;
