import "./resume.scss";
import { useContext, useLayoutEffect, useRef } from "react";
import { ResumeContext } from "../ResumeProvider";
import formatDate from "../../utils/formatDate";
import FirstName from "./FirstName";
import Heading from "./Heading";
import Subheading from "./Subheading";

const Resume = () => {
  const resume = useContext(ResumeContext);
  const resumeRef = useRef<HTMLInputElement>(null);
  const handleSize = () => {};
  useLayoutEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div ref={resumeRef} className="resume">
      {/* Header */}
      <header>
        <FirstName />
        <p>{resume?.headline}</p>
      </header>

      <div className="layout">
        <section>
          <article>
            <Heading>Expectation</Heading>
            <p>{resume?.expectation}</p>
          </article>
          <article>
            <Heading>Experience</Heading>
            {resume?.experience?.map((exp, idx) => (
              <figure key={idx}>
                <h3>
                  {exp.companyName} — {exp.designation}
                </h3>
                <p>
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </p>
                <p>{exp.description}</p>
              </figure>
            ))}
          </article>
          <article>
            <Heading>Education</Heading>
            {resume?.education?.map((edu, idx) => (
              <figure key={idx}>
                <h3>{edu.institution}</h3>
                <p>{edu.qualification}</p>
                <p>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </p>
              </figure>
            ))}
          </article>
        </section>
        <aside>
          <article>
            <Heading>Contact</Heading>
            <figure>
              <p> {resume?.phoneNumber}</p>
              <p> {resume?.email}</p>
            </figure>
          </article>

          <article>
            <Heading>Date of Birth</Heading>
            <p>{formatDate(resume?.dateOfBirth)}</p>
          </article>

          <article>
            <Heading>Address</Heading>
            <Subheading subdued>Current</Subheading>
            <p>{resume?.currentAddress}</p>
            <Subheading subdued>Permanent</Subheading>
            <p>{resume?.permanentAddress}</p>
          </article>

          <article>
            <Heading>Tags</Heading>
            <div>
              <p>{resume?.tags?.join(", ")}</p>
            </div>
          </article>

          <article>
            <Heading>Languages</Heading>
            <ul>
              {resume?.languages?.map((language, idx) => (
                <li key={idx}>{language}</li>
              ))}
            </ul>
          </article>
        </aside>
      </div>
    </div>
  );
};
export default Resume;
