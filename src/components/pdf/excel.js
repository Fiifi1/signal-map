import React, { Component } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

export default class Excel extends Component {
  state = { rows: "", cols: "" };

  fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer("./excel.xlsx", (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };
  render() {
 
    return (
      <div className="container">
        <header className="App-header">
          <input
            type="file"
            onChange={this.fileHandler.bind(this)}
            style={{ padding: "10px" }}
          />
        </header>

        <div>
          {this.state.rows && (
            <OutTable
              data={this.state.rows}
              columns={this.state.cols}
              tableClassName="ExcelTable2007"
              tableHeaderRowClass="heading"
            />
          )}
        </div>
      </div>
    );
  }
}
