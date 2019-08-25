import React from "react";

const Modal = props => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#fefefe",
          margin: "auto",
          padding: "10px",
          borderRadius: '5px',
          border: "1px solid #888",
          width: "auto"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
