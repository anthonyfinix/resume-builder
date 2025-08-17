import { useContext } from "react";
import Resume from "./Resume/Resume";
import { ResumeContext } from "./ResumeProvider";
import ResumeSVG from "./Resume/ResumeSVG";

const Content = () => {
  const resumeContext = useContext(ResumeContext);
  return <div className="content">
    {/* <Resume ref={resumeContext?.resumeRef} /> */}
    <ResumeSVG/>
  </div>;
};
export default Content;
