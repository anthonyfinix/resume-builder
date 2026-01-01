import { useContext } from "react";
import Button from "./Button";
import { Flex } from "./Flex";
import { Bars } from "./icons";
import { ResumeContext } from "../Provider/ResumeProvider";
import print from "../utils/print";

const Header = () => {
  const resumeContext = useContext(ResumeContext);
  const handlePrint = () => {
    if (resumeContext) print(resumeContext.resumeRef.current)
  };
  return (
    <div className="header">
      <div style={{ flexGrow: 1 }}>
        <Flex direction="row" justify="space-between">
          <Flex align="center" gap={7}>
            {/* <Bars /> */}
            <p>Resume Builder</p>
          </Flex>
          <Button className="
          bg-black
          backdrop-blur-md 
          enabled:hover:bg-black 
          border border-white/10 
          text-white 
          shadow-xl 
          transition-all 
          duration-300
          focus:ring-0
        " onClick={handlePrint} size="xs">
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
