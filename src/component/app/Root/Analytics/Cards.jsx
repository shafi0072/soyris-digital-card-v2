import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import { useContext } from "react";

const Cards = () => {
  const cardViews = "increase";
  const contactSaved = "increase";
  const uniqueUsers = "decrease";
  const {userCardData} = useContext(userContext)
  const totalViews = userCardData?.anylatics?.reduce((total, data) => total + data.view, 0);
  console.log(totalViews)
  return (
    <div className="flex justify-between gap-4 mt-12 mb-8">
      <div className="flex gap-6 justify-between items-center bg-white shadow-lg rounded py-3 px-5 ">
        <div>
          <h3 className="text-xl  mb-3">Card Views</h3>
          <p className="mb-2">{totalViews}</p>
          <p> <span className={cardViews === 'increase'?"text-[#0A7C57]":"text-[#DB112D]"}>+3.48 %</span> Since last period</p>
        </div>
        <div className="bg-[#097C56] rounded-full h-12 w-12 flex items-center justify-center">
        {cardViews === "increase" ? (
          <div className="bg-[#097C56] rounded-full h-12 w-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.781"
              height="15.893"
              viewBox="0 0 26.781 15.893"
            >
              <g id="trending-up" transform="translate(1.414 1.414)">
                <path
                  id="Path_473"
                  data-name="Path 473"
                  d="M24.952,6,14.609,16.343,9.166,10.9,1,19.065"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_474"
                  data-name="Path 474"
                  d="M17,6h6.532v6.532"
                  transform="translate(0.42 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            </div>
          ) : (
            <div className="bg-[#DB112D] rounded-full h-12 w-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.828"
              height="14.828"
              viewBox="0 0 24.828 14.828"
            >
              <g id="trending-down" transform="translate(1.414 1.414)">
                <path
                  id="Path_471"
                  data-name="Path 471"
                  d="M23,18,13.5,8.5l-5,5L1,6"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_472"
                  data-name="Path 472"
                  d="M17,18h6V12"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-6 justify-between items-center bg-white shadow-lg rounded py-3 px-5 ">
        <div>
          <h3 className="text-xl  mb-3">Contact Saved</h3>
          <p className="mb-2">12</p>
          <p> <span className={cardViews === 'increase'?"text-[#0A7C57]":"text-[#DB112D]"}>+12.48 %</span> Since last period</p>
        </div>
        <div className="bg-[#097C56] rounded-full h-12 w-12 flex items-center justify-center">
        {contactSaved === "increase" ? (
          <div className="bg-[#097C56] rounded-full h-12 w-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.781"
              height="15.893"
              viewBox="0 0 26.781 15.893"
            >
              <g id="trending-up" transform="translate(1.414 1.414)">
                <path
                  id="Path_473"
                  data-name="Path 473"
                  d="M24.952,6,14.609,16.343,9.166,10.9,1,19.065"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_474"
                  data-name="Path 474"
                  d="M17,6h6.532v6.532"
                  transform="translate(0.42 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            </div>
          ) : (
            <div className="bg-[#DB112D] rounded-full h-12 w-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.828"
              height="14.828"
              viewBox="0 0 24.828 14.828"
            >
              <g id="trending-down" transform="translate(1.414 1.414)">
                <path
                  id="Path_471"
                  data-name="Path 471"
                  d="M23,18,13.5,8.5l-5,5L1,6"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_472"
                  data-name="Path 472"
                  d="M17,18h6V12"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-6 justify-between items-center bg-white shadow-lg rounded py-3 px-5 ">
        <div>
          <h3 className="text-xl  mb-3">Unique Users</h3>
          <p className="mb-2">127</p>
          <p> <span className={uniqueUsers === 'increase'?"text-[#0A7C57]":"text-[#DB112D]"}>-1.28%</span> Since last period</p>
        </div>
        {uniqueUsers === "increase" ? (
          <div className="bg-[#097C56] rounded-full h-12 w-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.781"
              height="15.893"
              viewBox="0 0 26.781 15.893"
            >
              <g id="trending-up" transform="translate(1.414 1.414)">
                <path
                  id="Path_473"
                  data-name="Path 473"
                  d="M24.952,6,14.609,16.343,9.166,10.9,1,19.065"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_474"
                  data-name="Path 474"
                  d="M17,6h6.532v6.532"
                  transform="translate(0.42 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            </div>
          ) : (
            <div className="bg-[#DB112D] rounded-full h-12 w-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.828"
              height="14.828"
              viewBox="0 0 24.828 14.828"
            >
              <g id="trending-down" transform="translate(1.414 1.414)">
                <path
                  id="Path_471"
                  data-name="Path 471"
                  d="M23,18,13.5,8.5l-5,5L1,6"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_472"
                  data-name="Path 472"
                  d="M17,18h6V12"
                  transform="translate(-1 -6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            </div>
          )}
      </div>
    </div>
  );
};

export default Cards;
