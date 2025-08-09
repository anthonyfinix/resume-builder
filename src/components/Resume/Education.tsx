import { FC } from "react";
import Figure from "./Figure";
import { Education as EducationType } from "../../types";
import formatDate from "../../utils/formatDate";
import Text from "./Text";

const Education: FC<{ edu: EducationType }> = ({ edu }) => {
  return (
    <Figure>
      <Text>{edu.institution}</Text>
      <Text>{edu.qualification}</Text>
      <Text>
        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
      </Text>
    </Figure>
  );
};
export default Education;
