import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
 
export default class literature extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div style={{ width: 600 }}>
          <Document
            file="./thesis.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <nav style={{}}>
          <button style={{}} onClick={this.goToPrevPage}>
            Prev
          </button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>
      </div>
    );
  }
}
