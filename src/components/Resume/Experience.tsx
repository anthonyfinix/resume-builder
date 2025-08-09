import { FC } from "react";
import Figure from "./Figure";
import { Experience as ExperienceType } from "../../types";
import formatDate from "../../utils/formatDate";

const Experience: FC<{ exp: ExperienceType }> = ({ exp }) => {
  return (
    <Figure>
      <h3>
        {exp.companyName} — {exp.designation}
      </h3>
      <p>
        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
      </p>
      <p>{exp.description}</p>
    </Figure>
  );
};
export default Experience;
