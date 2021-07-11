import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Customer from "../Customer/Customer"
import Table from "../Table/Table"
import "./subTabs.css"

const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#6D3886',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 70,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#6D3886',
      opacity: 1,
    },
    '&$selected': {
      color: '#6D3886',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#6D3886',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
      <TabContext value={value}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" style={{float:"left"}}>
          <AntTab label="Customer" value="1" selected/>
          <AntTab label="Prospect Customer" value="2"/>
          <AntTab label="Employee" value="3" />
          <AntTab label="Test Set" value="4" />
        </AntTabs>
        <Typography className={classes.padding} />
        <TabPanel value="1"><Table/></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3"></TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        </TabContext>
      </div>
     
         
    </div>
  );
}
