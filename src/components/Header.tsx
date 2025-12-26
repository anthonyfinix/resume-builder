import { useContext } from "react";
import Button from "./Button";
import { Flex } from "./Flex";
import { Bars } from "./icons";
import { ResumeContext } from "./ResumeProvider";

const Header = () => {
  const resumeContext = useContext(ResumeContext);
  const handlePrint = () => {
    if (resumeContext) {
      const divContents = resumeContext.resumeRef.current?.parentElement?.innerHTML;
      const printWindow = window.open("", "", "height=500,width=800");
      const styles = Array.from(document.styleSheets)
        .map((styleSheet) => {
          try {
            return Array.from(styleSheet.cssRules)
              .map(rule => rule.cssText)
              .join("\n");
          } catch (e) {
            console.log(e)
            return "";
          }
        })
        .join("\n");
      if (!printWindow) return;
      printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>${styles}</style>
          <style>
            @media print {
              @page {
                size: A4;
                margin: 0;
              }
            }
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
              Print
            </Flex>
          </Button>
        </Flex>
      </div>
    </div>
  );
};
export default Header;
