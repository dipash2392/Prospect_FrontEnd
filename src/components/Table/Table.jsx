import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import Pagination from "@material-ui/lab/Pagination";
import AddModal from "../AddModal/AddModal";
import dateFn from "date-fn";
import EditModal from "../EditModal/EditModal";
import ProspectService from "../../Services/ProspectSetsServices"
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";


function createData(
  prospectName,
  demographic,
  source,
  addedBy,
  dateAdded,
  setType,
  howMany,
  details
) {
  return {
    prospectName,
    demographic,
    source,
    addedBy,
    dateAdded,
    setType,
    howMany,
    details,
  };
}

const rows = [
  createData(
    "Sales Team",
    "Maharashtra",
    "Add By Admin",
    "Ramesh",
    "30-03-2020",
    "Sales Guys",
    50,
    "Info"
  ),
  createData(
    "IT Users",
    "Maharashtra",
    "Add By Admin",
    "Ramesh",
    "30-03-2020",
    "Sales Guys",
    100,
    "Info"
  ),
  createData(
    "Sales Team",
    "Maharashtra",
    "Add By Admin",
    "Kulkarni",
    "30-03-2020",
    "Marathi Users",
    250,
    "Info"
  ),
  createData(
    "Marathi Users",
    "Maharashtra",
    "Add By Admin",
    "Ramesh",
    "30-03-2020",
    "Sales Guys",
    100,
    "Info"
  ),
  createData(
    "Sales Team",
    "Maharashtra",
    "Add By Admin",
    "Kulkarni",
    "30-03-2020",
    "Marathi Users",
    200,
    "Info"
  ),
  createData(
    "Marathi Users",
    "Maharashtra",
    "Add By Admin",
    "Kulkarni",
    "30-03-2020",
    "Sales Guys",
    150,
    "Info"
  ),
  createData(
    "Sales Team",
    "Maharashtra",
    "Add By Admin",
    "Ramesh",
    "30-03-2020",
    "Marathi Users",
    200,
    "Info"
  ),
  createData(
    "Marathi Users",
    "Maharashtra",
    "Add By Admin",
    "Kulkarni",
    "30-03-2020",
    "Sales Guys",
    150,
    "Info"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  // stabilizedThis.sort((a, b) => {
  //   const order = comparator(a[0], b[0]);
  //   if (order !== 0) return order;
  //   return a[1] - b[1];
  // });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "prospectName",
    numeric: false,
    disablePadding: true,
    label: "Prospect Name",
  },
  {
    id: "demographic",
    numeric: true,
    disablePadding: false,
    label: "Demographic",
  },
  { id: "source", numeric: true, disablePadding: false, label: "Source" },
  { id: "addedBy", numeric: true, disablePadding: false, label: "Added By" },
  {
    id: "dateAdded",
    numeric: true,
    disablePadding: false,
    label: "Date Added",
  },
  { id: "setType", numeric: true, disablePadding: false, label: "Set Type" },
  { id: "howMany", numeric: true, disablePadding: false, label: "How Many" },
  { id: "details", numeric: true, disablePadding: false, label: "Details" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable({ prospectdata, refreshData }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedProspect, setSelectedProspect] = React.useState([]);
  const [openModifyModal, setOpenModifyModal] = React.useState(false);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const handleDelete=async()=>{
    Swal.fire({
      title: "Are you sure?",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
      confirmButtonColor: '#ff1a1a',
      cancelButtonColor: '#4CAF50',
    }).then(async (result) => {
      if (result.value === true) {
        console.log(selectedProspect)
        let data ={id:selectedProspect[0]._id}
        let res = await ProspectService.deleteProspectSet(data)
        if (res.status === 200) {
          toast.success(res.message);
          refreshData()
        } else {
          toast.error(res.message);
        }
      }
    })
   
  }

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.prospectName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, rowData) => {
    const selectedIndex = selected.indexOf(rowData._id);
    let newSelected = [];
    console.log(rowData);
    setSelectedProspect([rowData]);
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, rowData._id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const toggle = () => {
    setOpenAddModal(false);
  };
  const toggleEditModal = () => {
    setOpenModifyModal(false);
  };
  const isSelected = (prospectName) => selected.indexOf(prospectName) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <hr style={{ margin: 0 }} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="customized table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(prospectdata)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.prospectName}
                      selected={isItemSelected}
                    >
                      <StyledTableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row)}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.prospectName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.demographic}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.source}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.addedBy}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {dateFn.date(row.dateAdded, 110)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.setType}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.howMany}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.details}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              <TableRow>
                {/* <TableCell rowSpan={3} /> */}
                <TableCell
                  className="font-weight-bold point"
                  colSpan={2}
                  onClick={() => {
                    setOpenAddModal(true);
                  }}
                >
                  Add Prospect Set
                </TableCell>
                <TableCell colSpan={3} onClick={
                  () => {
                    if (selectedProspect && selected.length === 1) {
                      handleDelete();
                    }
                  }}>
                  Delete Prospect Set
                </TableCell>
                <TableCell
                  className="point"
                  colSpan={2}
                  onClick={() => {
                    if (selectedProspect && selected.length === 1) {
                      setOpenModifyModal(true);
                    }
                  }}
                >
                  Edit Prospect Set
                </TableCell>
                {/* <TableCell className="font-weight-bold" colSpan={1}>
                  Import Prospect Set
                </TableCell> */}
                <TableCell colSpan={3} align="right">
                  <Pagination
                    count={10}
                    page={page}
                    size="small"
                    onPageChange={handleChangePage}
                  />
                  {/* <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  /> */}
                </TableCell>
              </TableRow>
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <AddModal
        isOpen={openAddModal}
        toggle={() => toggle()}
        refreshData={refreshData}
      />
      <EditModal
        inputValues={selectedProspect}
        isOpen={openModifyModal}
        toggle={() => toggleEditModal()}
        refreshData={refreshData}
      />
    </div>
  );
}
