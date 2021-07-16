import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./addModal.css";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default function AddModal({ isOpen, toggle }) {
  const [show, setShow] = useState(false);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });

  return (
    <>
      <Modal
        show={isOpen}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Prospect Set
          </Modal.Title>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
            style={{
              backgroundColor: "#6D3886",
              color: "#fff",
              fontSize: "x-large",
            }}
          >
            <CloseIcon className="closeModalIcon" />
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form>
              <div class="row form-group">
              <TextField className="w-100" id="standard-basic" label="Name Prospect Set" 
               InputLabelProps={{className:"textfield__label"}}/>

              </div>
              <div class="row form-group">
              <TextField className="w-100" id="standard-basic" label="Add Demographic	"
              InputLabelProps={{className:"textfield__label"}} />
              </div>
              <div class="row form-group">
              <TextField className="w-100" id="standard-basic" label="Source"
              InputLabelProps={{className:"textfield__label"}}/>
              </div>
              <div class="row form-group">
              <TextField className="w-100" id="standard-basic" label="Added By"
              InputLabelProps={{className:"textfield__label"}} />
              </div>
              {/* <div class="row form-group">
              <TextField className="w-100 m-1" id="standard-basic" label="Date Added" />
              </div> */}
              <div class="row form-group mt-4">
                <TextField
                className="w-100 "
                  id="date"
                  label="Date Added"
                  type="date"
                  defaultValue="2021-07-20"
                  InputLabelProps={{className:"textfield__label"}}
                  
                />
              </div>
            
              <div class="row form-group">
              <TextField className="w-100" id="standard-basic" label="Set Type" 
              InputLabelProps={{className:"textfield__label"}}/>
              </div>
              <div class="row form-group">
              <TextField className="w-100" id="standard-basic" label="How Many" 
              InputLabelProps={{className:"textfield__label"}}/>
              </div>
              <div class="row form-group">
              <TextField className="w-100" id="standard-basic" label="Other Details"
              InputLabelProps={{className:"textfield__label"}} />
              </div>
              <div class="row form-group">

              <button className="btn btn submitButton" >
                Add Prospect Set
              </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={toggle}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
