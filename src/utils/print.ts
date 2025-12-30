
const print = (element:any)=>{
  const divContents = element?.outerHTML;
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

export default print;