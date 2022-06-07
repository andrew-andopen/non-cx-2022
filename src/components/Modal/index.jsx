import React, { useState } from "react";
import CloseButton from "../CloseButton";
import { Content, StyledModal, IFrame } from "./sytles";
import Loader from "../Loader";
import { motion } from "framer-motion";

const Modal = ({ content, modalHandler }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loader />}
      <StyledModal onClick={() => modalHandler(false)}>
        <CloseButton onClick={() => modalHandler(false)} />
        <Content
          as={motion.div}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <IFrame
            src={content}
            onLoad={() => setIsLoaded(true)}
            data-no-scroll="1"
            data-paperform-id="wfygjnv1"
          />
        </Content>
      </StyledModal>
    </>
  );
};

export default Modal;
