import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./addModal.css";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ProspectSetsServices from "../../Services/ProspectSetsServices";
import { toast ,ToastContainer} from "react-toastify";


export default function AddModal({ isOpen, toggle,refreshData }) {
  const [show, setShow] = useState(false);
  const [prospectInfo, setProspectInfo] = useState({
    prospectName: "",
    demographic: "",
    source: "",
    addedBy: "",
    dateAdded: "",
    setType: "",
    howMany: "",
    details: "",
  });

  const {
    prospectName,
    demographic,
    source,
    addedBy,
    dateAdded,
    setType,
    howMany,
    details,
  } = prospectInfo;


  const onChangeInput = (e) => {
    setProspectInfo({...prospectInfo ,[e.target.name]: e.target.value });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    let res = await ProspectSetsServices.insertProspectSet(prospectInfo)
    if(res.status===200){
      toast.success(res.message)
      refreshData()
      toggle()
    }else{
      toast.success(res.message)
      refreshData()
      toggle()
    }
  }



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const styles = (theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
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
                <TextField
                  className="w-100"
                  id="standard-basic"
                  label="Name Prospect Set"
                  name="prospectName"
                  value={prospectName}
                  onChange={(e) => onChangeInput(e)}
                  InputLabelProps={{ className: "textfield__label" }}
                />
              </div>
              <div class="row form-group">
                <TextField
                  className="w-100"
                  id="standard-basic"
                  label="Add Demographic	"
                  name="demographic"
                  value={demographic}
                  onChange={(e) => onChangeInput(e)}
                  InputLabelProps={{ className: "textfield__label" }}
                />
              </div>
              <div class="row form-group">
                <TextField
                  className="w-100"
                  id="standard-basic"
                  label="Source"
                  name="source"
                  value={source}
                  onChange={(e) => onChangeInput(e)}
                  InputLabelProps={{ className: "textfield__label" }}
                />
              </div>
              <div class="row form-group">
                <TextField
                  className="w-100"
                  id="standard-basic"
                  label="Added By"
                  name="addedBy"
                  value={addedBy}
                  onChange={(e) => onChangeInput(e)}
                  InputLabelProps={{ className: "textfield__label" }}
                />
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
                  InputLabelProps={{ className: "textfield__label" }}
                  name="dateAdded"
                  value={dateAdded}
                  onChange={(e) => onChangeInput(e)}
                />
              </div>

              <div class="row form-group">
                <TextField
                  className="w-100"
                  id="standard-basic"
                  label="Set Type"
                  name="setType"
                  value={setType}
                  InputLabelProps={{ className: "textfield__label" }}
                  onChange={(e) => onChangeInput(e)}
                />
              </div>
              <div class="row form-group">
                <TextField
                  className="w-100"
                  id="standard-basic"
                  label="How Many"
                  name="howMany"
                  value={howMany}
                  InputLabelProps={{ className: "textfield__label" }}
                  onChange={(e) => onChangeInput(e)}
                />
              </div>
              <div class="row form-group">
                <TextField
                  className="w-100"
                  id="standard-basic"
                  label="Other Details"
                  name="details"
                  value={details}
                  InputLabelProps={{ className: "textfield__label" }}
                  onChange={(e) => onChangeInput(e)}
                />
              </div>
              <div class="row ">
                <button className="btn btn submitButton" onClick={(e)=>handleSubmit(e)}>
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
