import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components"

// you can pass any children here from the main webpage!!
export default function Modal({ show, onClose, children }: any) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="h-screen w-screen">
      <div className="bg-green-400 h-[300px] w-[400px]">
        {children}
        <a
          href="#"
          onClick={handleCloseClick}
          className="bg-red-300 h-[25px] w-[25px]"
        >
          X
        </a>
      </div>
    </div>
  ) : null;
  const modalElem = window.document.getElementById("modal-root");
  if (!modalElem) {
    return <></>;
  }
  if (isBrowser) {
    return ReactDOM.createPortal(<div>{modalContent}</div>, modalElem);
  } else {
    return null;
  }
}
