import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import "./tabs.css"
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import ProspectSet from '../ProspectSet/ProspectSet';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    float:"right",
    justifyContent: 'center',
    backgroundColor: '#fff',
    '& > span': {
      maxWidth: 40,
      width: '100%',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#6D3886',
    borderTopRightRadius:"7px",
    borderTopLeftRadius:"7px",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(13),
    marginRight: theme.spacing(4),
     '&$selected': {
      color: '#1890ff',
    },
  },
}))((props) => <Tab  {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent:"right"
  },
  padding: {
    padding: theme.spacing(0),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#000',
    paddingTop:"7%",
    textAlign:"right",
    
    
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
      
      <div>
      <TabContext value={value} >
        <StyledTabs className={classes.demo2} value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Trigger Event" value="1" />
          <StyledTab label="Email Template" value="2"/>
          <StyledTab label="Prospect Set" value="3"/>
          <StyledTab label="Campaign" value="4"/>
        </StyledTabs>
        <Typography className={classes.padding} />
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3"><ProspectSet/></TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        </TabContext>
      </div>
    </div>
  );
}
