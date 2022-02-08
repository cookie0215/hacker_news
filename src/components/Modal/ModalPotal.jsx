import React from 'react';
import { createPortal } from "react-dom";

const ModalPotal = ({ children }) => {
  return createPortal(children, document.getElementById("modal"));
};

export default ModalPotal;