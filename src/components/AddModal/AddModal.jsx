import React,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap';
import "./addModal.css"
import CloseIcon from '@material-ui/icons/Close';

export default function AddModal({isOpen}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
       <Modal
      show={isOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Add Prospect Set
        </Modal.Title>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{ backgroundColor: "#6D3886",color:"#fff",fontSize:"x-large"}}><CloseIcon className="closeModalIcon"/></button>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button >Close</Button>
      </Modal.Footer>
    </Modal>     
     </>
    )
}
