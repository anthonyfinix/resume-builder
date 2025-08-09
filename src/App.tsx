import "./App.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import BasicInformationSidebar from "./components/BasicInformationSidebar";
import ResumeProvider from "./components/ResumeProvider";
import { AppContext } from "./components/AppProvider";
import { useContext } from "react";
import WorkExperienceSidebar from "./components/WorkExperienceSidebar";
import EducationSidebar from "./components/EducationSidebar";
import LanguageSidebar from "./components/LanguageSidebar";
import TagSidebar from "./components/TagSidebar";

function App() {
  const items = [
    {
      value: "basicInformation",
      label: "Basic Information",
    },
    { value: "workExperience", label: "Work Experiences" },
    { value: "education", label: "Educations" },
    { value: "language", label: "Languages" },
    { value: "tag", label: "Tags" },
  ];
  const appContext = useContext(AppContext);
  return (
    <ResumeProvider>
      <div
        id="backdrop"
        className={`backdrop-wrapper${
          appContext?.selectedMenu !== null ? " sidebar-active" : ""
        }`}
      >
        <Header />
        <Sidebar items={items} />
        {appContext?.selectedMenu === "basicInformation" && (
          <BasicInformationSidebar />
        )}
        {appContext?.selectedMenu === "workExperience" && (
          <WorkExperienceSidebar />
        )}
        {appContext?.selectedMenu === "education" && <EducationSidebar />}
        {appContext?.selectedMenu === "language" && <LanguageSidebar />}
        {appContext?.selectedMenu === "tag" && <TagSidebar />}
        <Content />
      </div>
    </ResumeProvider>
  );
}

export default App;
