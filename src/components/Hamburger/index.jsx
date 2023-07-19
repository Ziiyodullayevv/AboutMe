import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";

const textAnimationX = {
  hidden: { x: 2000 },
  visible: { x: 0, transition: { duration: 0.3 } },
  exit: { x: 2000, transition: { duration: 0.3 } },
};

const Hamburger = forwardRef((props, ref) => {
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
        <motion.div>
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
            exit={{ opacity: 0, x: -1000 }}
            onClick={() => ref.current.close()}
            className="arrow"
          >
            <div className="arrow-right"></div>
            <div className="arrow-left"></div>
          </motion.div>
          <motion.div
            variants={textAnimationX}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modal-content-wrapper"
          >
            <motion.div className="modal-content">{props.children}</motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Hamburger;
