import { useContext } from "react";
import Button from "./Button";
import { Flex } from "./Flex";
import { Bars } from "./icons";
import { ResumeContext } from "../Provider/ResumeProvider";
import print from "../utils/print";

const Header = () => {
  const resumeContext = useContext(ResumeContext);
  const handlePrint = () => {
    console.log(resumeContext)
    if (resumeContext) print(resumeContext.resumeRef.current)
  };
  return (
    <div className="header">
      <div style={{ flexGrow: 1 }}>
        <Flex direction="row" justify="space-between">
          <Flex align="center" gap={7}>
            <Bars />
            <p>Resume Builder</p>
          </Flex>
          <Button onClick={handlePrint} size="xs">
            <Flex gap={4}>
              Print
            </Flex>
          </Button>
        </Flex>
      </div>
    </div>
  );
};
export default Header;
