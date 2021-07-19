import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "../AddModal/addModal.css";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import ProspectSetsServices from "../../Services/ProspectSetsServices";
import { ToastContainer,toast } from "react-toastify";
import dateFn from "date-fn";

export default function EditModal({
  isOpen,
  toggle,
  refreshData,
  inputValues,
}) {
  const [show, setShow] = useState(false);
  const [prospectInfo, setProspectInfo] = useState({});
  const [prospectName, setProspectName] = useState("");
  const [demographic, setDemographic] = useState("");
  const [source, setSource] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [setType, setSetType] = useState("");
  const [howMany, setHowMany] = useState("");
  const [details, setDetails] = useState("");

  //   const {
  //     prospectName,
  //     demographic,
  //     source,
  //     addedBy,
  //     dateAdded,
  //     setType,
  //     howMany,
  //     details,
  //   } = prospectInfo;

  useEffect(() => {
    if (isOpen) {
      initialFunction();
    }
  }, [isOpen]);

  const initialFunction = () => {
    console.log(inputValues[0]);
    const {
      prospectName,
      demographic,
      source,
      addedBy,
      dateAdded,
      setType,
      howMany,
      details,
    } = inputValues[0];
    setProspectInfo(inputValues[0]);
    setProspectName(prospectName);
    setDemographic(demographic);
    setSource(source);
    setAddedBy(addedBy);
    setDateAdded(dateAdded);
    setSetType(setType);
    setHowMany(howMany);
    setDetails(details);
  };

  const onChangeInput = (e) => {
    setProspectInfo({ ...prospectInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let prospectSet = {
      id: inputValues[0]._id,
      prospectName: prospectName,
      demographic: demographic,
      source: source,
      addedBy: addedBy,
      dateAdded: dateAdded,
      setType: setType,
      howMany: howMany,
      details: details,
    };
    let res = await ProspectSetsServices.editProspectSet(prospectSet);
    console.log(res)
    if (res.status === 200) {
      toast.success(res.message);
      refreshData();
      toggle();
    } else {
      toast.success(res.message);
      refreshData();
      toggle();
    }
  };

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
                  onChange={(e) => setProspectName(e.target.value)}
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
                  onChange={(e) => setDemographic(e.target.value)}
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
                  onChange={(e) => setSource(e.target.value)}
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
                  onChange={(e) => setAddedBy(e.target.value)}
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
                  onChange={(e) => setDateAdded(e.target.value)}
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
                  onChange={(e) => setSetType(e.target.value)}
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
                  onChange={(e) => setHowMany(e.target.value)}
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
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>
              <div class="row ">
                <button
                  className="btn btn submitButton"
                  onClick={(e) => handleSubmit(e)}
                >
                  Edit Prospect Set
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
