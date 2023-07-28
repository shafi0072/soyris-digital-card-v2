import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";

// select 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// tab 
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LineCharts = () => {
  const [value, setValue] = React.useState(0);
  const [time, setTime] = React.useState('');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // 
  const handleTime = (event) => {
    setTime(event.target.value);
  };
  return (
    <div className="rounded shadow-lg bg-white my-8 p-4">
      <Box sx={{ width: "100%" }}>
       <div className="flex items-center justify-between">
         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Card View" {...a11yProps(0)} />
            <Tab label="Contact Saved" {...a11yProps(1)} />
            <Tab label="Unique Users" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <div className="mr-8">
        <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Age"
          onChange={handleTime}
        >
          <MenuItem value={10}>Weakly</MenuItem>
          <MenuItem value={20}>Monthly</MenuItem>
          <MenuItem value={30}>Yearly</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
       </div>
        <CustomTabPanel value={value} index={0}>
          <LineChart
           xAxis={[{ data: [0, 1, 2, 3, 4, 5] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={1000}
            height={400}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <LineChart
           xAxis={[{ data: [0, 1, 2, 3, 4, 5] }]}
            series={[
              {
                data: [6, 2, 2, 8.5, 1.5, 5],
              },
            ]}
            width={1000}
            height={400}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <LineChart
           xAxis={[{ data: [0, 1, 2, 3, 4, 5] }]}
            series={[
              {
                data: [2, 10, 2, 5, 1.5, 5],
              },
            ]}
            width={1000}
            height={400}
          />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default LineCharts;
