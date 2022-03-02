import React, { useState } from "react";
import "./PrintableBox.css";
import Printable from "./Printable";
import { FaPlusCircle } from "react-icons/fa";
import { getDatabase, ref, set, child, get, update } from "firebase/database";

function PrintableBox() {
  const db = getDatabase();
  const dbRef = ref(getDatabase());

  let counter = 0;
  let printRows = [];

  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  let key = 0;

  const getPrintables = () => {
    counter = 0;
    for (let i = 0; i < data.length; i++) {
      printRows.push(
        <Printable
          key={key}
          title={data[i].title}
          locationUrl={data[i].locationUrl}
          projectFiles={data[i].projectFiles}
          exportFile={data[i].exportFile}
          software={data[i].software}
          printer={data[i].printer}
          printStatus={data[i].printStatus}
        />
      );

      counter++;
      key++;
    }
    if (rows.length === 0) {
      setRows(...rows, printRows);
    }
  };

  get(child(dbRef, "prints/"))
    .then((snapshot) => {
      if (data.length !== 0 && printRows.length === 0) {
        getPrintables();
      } else {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Testing data
  // pTitle = "yuh";
  // pLocationUrl = "thang.com";
  // pProjectFiles = "path/path";
  // pExportFile = "path/export";
  // pSoftware = "Slicer 2";
  // pPrinter = "Prusha";
  // pPrintStatus = "Working";

  const addPrintable = (
    pTitle,
    pLocationUrl,
    pProjectFiles,
    pExportFile,
    pSoftware,
    pPrinter,
    pPrintStatus
  ) => {
    key = 0;
    printRows = rows;

    for (let i = 0; i < printRows.length; i++) {
      key++;
    }

    set(ref(db, "prints/" + `${key}/`), {
      title: pTitle,
      locationUrl: pLocationUrl,
      projectFiles: pProjectFiles,
      exportFile: pExportFile,
      software: pSoftware,
      printer: pPrinter,
      printStatus: pPrintStatus,
    });

    const newRow = (
      <Printable
        key={key}
        title={pTitle}
        locationUrl={pLocationUrl}
        projectFiles={pProjectFiles}
        exportFile={pExportFile}
        software={pSoftware}
        printer={pPrinter}
        printStatus={pPrintStatus}
      />
    );
    setRows((rows) => [...rows, newRow]);

    key++;
  };

  return (
    <>
      <div className="newprint-btn" onClick={() => addPrintable()}>
        <FaPlusCircle className="new-btn" />
        <p>New</p>
      </div>
      <div className="my-printables">
        <div className="printing-box">
          <ul className="printbox-switch">
            <li className="switch-item active">Awaiting</li>
            <li className="switch-item">Finished</li>
          </ul>
          <div className="print-box">
            <div className="print-list">
              <ul className="prints">{rows}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrintableBox;
