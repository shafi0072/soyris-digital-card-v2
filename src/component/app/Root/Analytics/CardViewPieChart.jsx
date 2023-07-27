import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const CardViewPieChart = () => {
  return (
    <div className="bg-white shadow-lg rounded">
      <h2 className="border-b text-center py-3 text-xl">Card Views By Device</h2>
    <div className="my-6">
    <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
              { id: 3, value: 25, label: "series D" },
              { id: 4, value: 30, label: "series E" },
            ],
          },
        ]}
        width={470}
        height={300}
      />
    </div>
    </div>
  );
};

export default CardViewPieChart;
