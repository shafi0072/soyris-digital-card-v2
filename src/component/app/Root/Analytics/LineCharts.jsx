import React from "react";
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

  const last7DaysAnalytics = analyticsData?.filter((entry) => {
    const entryDate = new Date(entry.date);
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    return entryDate >= sevenDaysAgo;
  });
  
  const chartData = last7DaysAnalytics?.map((entry) => ({
    date: new Date(entry.date), // x-axis: Date
    value: entry.view // y-axis: Analytics metric (e.g., view)
  }));
  console.log({chartData})
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // for select
  const [time, setTime] = React.useState("");

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const array =  [
    {date: 'Tue Aug 27 2023 19:43:05 GMT+0600 (Bangladesh Standard Time)', value: 5},
    {date: 'Tue Aug 27 2023 19:43:05 GMT+0600 (Bangladesh Standard Time)', value: 1},
    {date: 'Tue Aug 27 2023 19:43:05 GMT+0600 (Bangladesh Standard Time)', value: 1},
    {date: 'Tue Aug 28 2023 19:43:05 GMT+0600 (Bangladesh Standard Time)', value: 1},
    {date: 'Tue Aug 29 2023 19:43:05 GMT+0600 (Bangladesh Standard Time)', value: 1},
    {date: 'Tue Aug 29 2023 19:43:05 GMT+0600 (Bangladesh Standard Time)', value: 1},
    {date: 'Tue Aug 29 2023 19:43:05 GMT+0600 (Bangladesh Standard Time)', value: 1}
  ]
  const uniqueArray =  Array.from(new Set(chartData?.map(a => a.date)))
    .map(date => {
        return {
            date,
            value: array.reduce((accumulator, currentValue) => {
                return currentValue.date === date ? accumulator + currentValue.value : accumulator;
            },0)
        };
    });

   
  // chart
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
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
          <LineChart
            width={900}
            height={500}
            data={uniqueArray}
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
              dataKey="value"
              stroke="#8884d8"
              label={<CustomizedLabel />}
            />
          </LineChart>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <LineChart
            width={900}
            height={500}
            data={array}
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
            data={array}
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
