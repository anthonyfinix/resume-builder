import { FC } from "react";
import Figure from "./Figure";
import { Experience as ExperienceType } from "../../types";
import formatDate from "../../utils/formatDate";
import Text from "./Text";

const Experience: FC<{ exp: ExperienceType }> = ({ exp }) => {
  return (
    <Figure>
      <Text>
        {exp.companyName} — {exp.designation}
      </Text>
      <Text>
        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
      </Text>
      <Text>{exp.description}</Text>
    </Figure>
  );
};
export default Experience;
