import { useContext } from "react";
import Button from "./Button";
import { Flex } from "./Flex";
import { Bars, Print } from "./icons";
import { ResumeContext } from "./ResumeProvider";

const Header = () => {
  const resumeContext = useContext(ResumeContext);
  const handlePrint = () => {
    if (resumeContext) {
      const divContents = resumeContext.resumeRef.current?.innerHTML;
      const printWindow = window.open("", "", "height=500,width=800");
      if (!printWindow) return;
      printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0px; padding: 0px }
            h1 { color: darkblue; }
          </style>
        </head>
        <body>
          ${divContents}
        </body>
      </html>
    `);
      printWindow.document.close();
      printWindow.print();
    }
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
              <Print />
              Print
            </Flex>
          </Button>
        </Flex>
      </div>
    </div>
  );
};
export default Header;
