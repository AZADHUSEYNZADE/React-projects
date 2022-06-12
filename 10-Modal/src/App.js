import React, { useState } from "react";
import "./App.css";
import { Button, Modal } from "react-bootstrap";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Modal Header Part</Modal.Header>
        <Modal.Body>Hi React</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
