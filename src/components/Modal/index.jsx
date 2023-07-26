import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";

const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-backdrop"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="arrow"
          >
            <div className="arrow-right"></div>
            <div className="arrow-left"></div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            exit={{ opacity: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="modal-content-wrapper"
          >
            <motion.div
              initial={{ scale: 0 }}
              exit={{ opacity: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0 }}
              className="modal-content"
            >
              {props.children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default Modal;
