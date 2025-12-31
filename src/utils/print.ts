const print = (element: HTMLElement | null) => {
  if (!element) return;

  // 1. Create a hidden iframe instead of a popup window
  const iframe = document.createElement('iframe');
  iframe.style.position = 'absolute';
  iframe.style.width = '0px';
  iframe.style.height = '0px';
  iframe.style.border = 'none';
  document.body.appendChild(iframe);

  // 2. Grab Styled-Components styles specifically (avoids CORS errors)
  const styledTags = Array.from(document.querySelectorAll('style[data-styled]'));
  const styles = styledTags.map(tag => tag.innerHTML).join('\n');

  // 3. Extract font info to re-inject (since iframe is a new context)
  const computedStyle = window.getComputedStyle(element);
  const fontFamily = computedStyle.fontFamily;
  const primaryFont = fontFamily.split(',')[0].replace(/['"]/g, '').trim();
  const fontUrl = `https://fonts.googleapis.com/css2?family=${primaryFont.replace(/\s+/g, '+')}:wght@400;700&display=swap`;

  const content = `
    <html>
      <head>
        <link rel="stylesheet" href="${fontUrl}">
        <style>
          /* 1. THE RESET - This is usually what's missing */
          *, *::before, *::after {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact;
          }

          html, body {
            margin: 0;
            padding: 0;
            /* Match your app's base settings */
            font-size: 16px; 
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* 2. THE STYLED COMPONENTS */
          ${styles}

          /* 3. PRINT SPECIFIC RULES */
          @media print {
            @page { 
              size: A4; 
              margin: 0; 
            }
            body { 
              background: white; 
            }
          }
        </style>
      </head>
      <body>
        ${element.outerHTML}
      </body>
    </html>
  `;

  const doc = iframe.contentWindow?.document;
  if (doc) {
    doc.open();
    doc.write(content);
    doc.close();

    // 4. WAIT for fonts to be ready before printing
    const win = iframe.contentWindow as any;
    if (win.document.fonts) {
      win.document.fonts.ready.then(() => {
        win.focus();
        win.print();
        // Clean up
        setTimeout(() => document.body.removeChild(iframe), 1000);
      });
    } else {
      // Fallback for older browsers
      setTimeout(() => {
        win.print();
        document.body.removeChild(iframe);
      }, 500);
    }
  }
};

export default print;