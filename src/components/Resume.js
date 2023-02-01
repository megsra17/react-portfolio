import { useState } from "react";
import { Document, Page } from "react-pdf";
import resumePDF from "../assets/pdf/Resume.pdf";

const Resume = () => {
  const [file, setFile] = useState(resumePDF);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div id="resume">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default Resume;
