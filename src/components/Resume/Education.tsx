import { FC } from "react";
import Figure from "./Figure";
import { Education as EducationType } from "../../types";
import formatDate from "../../utils/formatDate";

const Education: FC<{ edu: EducationType }> = ({ edu }) => {
  return (
    <Figure>
      <h3>{edu.institution}</h3>
      <p>{edu.qualification}</p>
      <p>
        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
      </p>
    </Figure>
  );
};
export default Education;
