import React, { useContext, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// react date range picker
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment";

// cards
import Cards from "./Cards";
const LineCharts = dynamic(() => import("./LineCharts"), { ssr: false });
const CardViewPieChart = dynamic(() => import("./CardViewPieChart"), {
  ssr: false,
});
import CardViewsTable from "./CardViewsTable";
import dynamic from "next/dynamic";
import { userContext } from "@/src/Storage/ContextApi";

const Analytics = () => {
  const [time, setTime] = React.useState("");
  console.log(time);
  // date range ------------------
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedRange, setSelectedRange] = useState({ 
    startDate: moment().format("MMMM Do, YYYY"),
    endDate: moment().format("MMMM Do, YYYY"),
    key: "selection",
  });
  const {userCardData} = useContext(userContext)

  // console.log(selectedRange)

  const handleSelect = (ranges) => {
    console.log(ranges);
    // The selected date range is available in the "ranges" object

    setSelectedRange(ranges.selection);
  };

  // handle time-------------
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <>
      <div>
        <div className="flex  gap-10 items-center justify-end mt-10">
          <div className="w-[346px] ">
            <div>
              <div
                className="flex gap-2 items-center bg-[#E6ECF2] px-2 py-1 rounded-md"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <div>
                  {" "}
                  <CalendarMonthIcon />
                  <span>{selectedRange.startDate}</span> -
                  <span> {selectedRange.endDate}</span>
                </div>
              </div>
              {showCalendar && (
                <DateRangePicker
                  className="absolute"
                  ranges={[selectedRange]}
                  onChange={handleSelect}
                />
              )}
            </div>
          </div>
          <div class="flex flex-row justify-between shadow-lg rounded-lg  p-2 text-sm bg-white w-[150px] mx-0 my-[10px] lg:my-0">
            <select onChange={handleTimeChange} name="" id="" class="w-full">
              <option value="7">Last 7 Days</option>
              <option value="6">Last 6 Days</option>
              <option value="5">Last 5 Days</option>
              <option value="4">Last 4 Days</option>
              <option value="3">Last 3 Days</option>
            </select>
          </div>
        </div>

        {/* Cards ------------------ */}
        <Cards />
        <LineCharts analyticsData={userCardData?.anylatics}/>
        <div className="my-16 flex gap-6">
          <div className="w-1/2">
            <CardViewPieChart />
          </div>
          <p>Map</p>
        </div>
        <CardViewsTable />
      </div>
    </>
  );
};

export default Analytics;
