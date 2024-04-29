import { useState, useEffect } from "react";

import "./app.css";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} disableGlobalScroll={true}>
        <div>
          <h1>Some content</h1>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </Modal>
      <div className="div" style={{ width: 100, height: 200 }}></div>
      <div className="div" style={{ width: 100, height: 200 }}></div>
      <div className="div" style={{ width: 100, height: 200 }}></div>
      <div className="div" style={{ width: 100, height: 200 }}></div>
      <div className="div" style={{ width: 100, height: 200 }}></div>
      <div className="div" style={{ width: 100, height: 200 }}></div>
    </div>
  );
}

const Modal = ({ open, disableGlobalScroll, children }) => {
  useEffect(() => {
    if (disableGlobalScroll) {
      document.body.style.overflow = open ? "hidden" : "auto";
    }
  }, [open, disableGlobalScroll]);

  return open ? (
    <div className="modalWrapper">
      <div className="modal">{children}</div>
    </div>
  ) : null;
};

export default App;
