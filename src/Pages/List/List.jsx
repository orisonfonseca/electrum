import { Alert } from "antd";
import React from "react";
import "./List.css";
import TableList from "./TableList";
import { useSelector } from "react-redux";

export default function List() {

    const { errorMessage, successMessage } = useSelector((state) => state.loading);

  return (
    <div className="list-container">
      {errorMessage || successMessage ? (
        <Alert
          message={errorMessage || successMessage}
          type={successMessage ? "success" : "error"}
        />
      ) : null}

      <TableList />
    </div>
  );
}
