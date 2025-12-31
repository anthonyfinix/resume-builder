import { useContext } from "react";
// import Resume from "../templates/Resume";
import Modern from '../templates/Modern'
import { ResumeContext } from "./ResumeProvider";

const Content = () => {
  const resumeContext = useContext(ResumeContext);
  return <div className="content">
    <div style={{ transform: "scale(0.7)" }}>
    <Modern ref={resumeContext?.resumeRef} />
    </div>
  </div>;
};
export default Content;
