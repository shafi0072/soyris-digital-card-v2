import React, { useContext, useEffect, useState } from "react";
// chart
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// tab
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { userContext } from "@/src/Storage/ContextApi";
import { baseUrl } from "@/src/config/Server";
import ReactECharts from 'echarts-for-react';

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

const LineCharts = ({analyticsData }) => {
  
  // for tab
  const [value, setValue] = React.useState(0);
  const [chartData, setChartData] = useState([])
  const {userCardData} = useContext(userContext)
  
  
  
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // for select
  const [time, setTime] = React.useState("");

  const handleTime = (event) => {
    setTime(event.target.value);
  };

    useEffect(() => {
      fetch(`${baseUrl}/cards/anylatics/${userCardData?._id}/monthly`)
      .then(res => res.json())
      .then(data => setChartData(data.reverse()))
      .catch(err => console.log(err))
    },[userCardData])

   
  // chart
  const data = [
    { date: "2023-09-01T00:00:00Z", value: 2 },
    { date: "2023-09-02T00:00:00Z", value: 4 },
    { date: "2023-09-03T00:00:00Z", value: 5 },
    { date: "2023-09-04T00:00:00Z", value: 10 },
    { date: "2023-09-05T00:00:00Z", value: 0 },
    { date: "2023-09-06T00:00:00Z", value: 0 },
    { date: "2023-09-07T00:00:00Z", value: 12 },
    { date: "2023-09-08T00:00:00Z", value: 7 },
    { date: "2023-09-09T00:00:00Z", value: 3 },
    { date: "2023-09-10T00:00:00Z", value: 8 },
    { date: "2023-09-11T00:00:00Z", value: 6 },
    { date: "2023-09-12T00:00:00Z", value: 1 },
    { date: "2023-09-13T00:00:00Z", value: 9 },
    { date: "2023-09-14T00:00:00Z", value: 5 },
    { date: "2023-09-15T00:00:00Z", value: 3 },
    { date: "2023-09-16T00:00:00Z", value: 11 },
    { date: "2023-09-17T00:00:00Z", value: 4 },
    { date: "2023-09-18T00:00:00Z", value: 7 },
    { date: "2023-09-19T00:00:00Z", value: 6 },
    { date: "2023-09-20T00:00:00Z", value: 2 },
    { date: "2023-09-21T00:00:00Z", value: 8 },
    { date: "2023-09-22T00:00:00Z", value: 9 },
    { date: "2023-09-23T00:00:00Z", value: 4 },
    { date: "2023-09-24T00:00:00Z", value: 10 },
    { date: "2023-09-25T00:00:00Z", value: 3 },
    { date: "2023-09-26T00:00:00Z", value: 6 },
    { date: "2023-09-27T00:00:00Z", value: 7 },
    { date: "2023-09-28T00:00:00Z", value: 1 },
    { date: "2023-09-29T00:00:00Z", value: 5 },
    { date: "2023-09-30T00:00:00Z", value: 12 },
  ];
  

  class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;

      return (
        <text
          x={x}
          y={y}
          dy={-4}
          fill={stroke}
          fontSize={10}
          textAnchor="middle"
        >
          {value}
        </text>
      );
    }
  }

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  const chartDatas = chartData.map(item => ({
    name: item.date,
    value: [item.date, item.value],
  }));

  const options = {
    xAxis: {
      type: 'time',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: chartDatas,
        type: 'line',
        smooth: true
      },
    ],
  };

  return (
    <>
    <div className="mt-16 shadow-lg p-8">
      <Box sx={{ width: "100%" }}>
        <div className="flex justify-between items-center">
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
        <div class="flex flex-row justify-between shadow-lg rounded-lg  p-2 text-sm bg-white w-[150px] mx-0 my-[10px] lg:my-0">
        <select name="" id="" class="w-full">
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
        </div>
       <div>
       <CustomTabPanel value={value} index={0}>
       <ReactECharts option={options} style={{ height: '400px' }} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <LineChart
            width={900}
            height={500}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" height={60} tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="date"
              stroke="#8884d8"
              label={<CustomizedLabel />}
            />
          </LineChart>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <LineChart
            width={900}
            height={500}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" height={60} tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="date"
              stroke="#8884d8"
              label={<CustomizedLabel />}
            />
          </LineChart>
        </CustomTabPanel>
       </div>
      </Box>
    </div>
    </>
  );
};

export default LineCharts;
