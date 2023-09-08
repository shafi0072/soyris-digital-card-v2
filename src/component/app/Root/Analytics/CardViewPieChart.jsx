import { userContext } from "@/src/Storage/ContextApi";
import React, { useContext } from "react";
import { PureComponent } from "react";
import { useTouchSensor } from "react-beautiful-dnd";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CardViewPieChart = () => {
  const { userCardData } = useContext(userContext);


  const deviceViewsMap = {};

  userCardData?.anylatics?.forEach((item) => {
    const device = item.device;
    const viewCount = item.view || 0; 

    if (!deviceViewsMap[device]) {
      deviceViewsMap[device] = 0;
    }

    deviceViewsMap[device] += viewCount;
  });

  const resultArray = Object.keys(deviceViewsMap).map((device) => {
    return { device, totalViews: deviceViewsMap[device] };
  });

  const chartData = resultArray?.map((item, index) => ({
    name: item.device,
    value: item.totalViews,
  }));
  // console.log(chartData);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div
      className="shadow-lg"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </div>
  );
};

export default CardViewPieChart;
