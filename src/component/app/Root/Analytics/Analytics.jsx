import React from "react";

// date picker
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";


// select
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Cards from "./Cards";
import LineChart from "./LineCharts";
import LineCharts from "./LineCharts";
import CardViewPieChart from "./CardViewPieChart";
import Table from "./CardViewsTable";
import CardViewsTable from "./CardViewsTable";

const Analytics = () => {
  return (
    <>
      <div>
        <div className="flex gap-4 items-center justify-end">
          <div className="w-80 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
             
                <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
             
            </LocalizationProvider>
          </div>
          <div>
            <FormControl className="w-40 mt-2">
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                label="Age"
                //   onChange={handleChange}
              >
                <MenuItem value={7}>Last 7 Days</MenuItem>
                <MenuItem value={6}>Last 6 Days</MenuItem>
                <MenuItem value={5}>Last 5 Days</MenuItem>
                <MenuItem value={4}>Last 4 Days</MenuItem>
                <MenuItem value={3}>Last 3 Days</MenuItem>
                <MenuItem value={2}>Last 2 Days</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Cards />
        <LineCharts />
        <div className="my-8 flex gap-6">
          <CardViewPieChart />
          <p>Map</p>
        </div>
        <CardViewsTable />
      </div>
    </>
  );
};

export default Analytics;
