import React from 'react';
import ReactExport from "react-export-excel";
import './App.css';

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelSheet
const ExcelColumn = ReactExport.ExcelColumn

const CheckPointData = [  
{ date: "2020/10/16",
  costumer: "615",
  process: "DSM",
  model: "iPhone X",
  fail: "Broken"
},

{ date: "2020/10/16",
  costumer: "506",
  process: "DSM",
  model: "iPhone 8",
  fail: "discolored"
},

{ date: "2020/10/16",
  costumer: "615",
  process: "DSM",
  model: "iPhone 7P",
  fail: "Broken"
},
{ date: "2020/10/16",
  costumer: "708",
  process: "Issue",
  model: "iPhone X",
  fail: "Broken"}
];

function App() {
  return (
    <div className="App">
      <ExcelFile element={<button>Export to Excel</button>} filename="Execeljs">
        <ExcelSheet data={CheckPointData} name ="Check Point Data">
          <ExcelColumn label="date" value="date"/>
          <ExcelColumn label="costumer" value="costumer"/>
          <ExcelColumn label="process" value="process"/>
          <ExcelColumn label="model" value="model"/>
          <ExcelColumn label="fail" value="fail"/>
        </ExcelSheet>     
      </ExcelFile>
    </div>
  );
}

export default App;
