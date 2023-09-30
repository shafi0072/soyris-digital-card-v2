import React, { useRef } from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Content2 from "./InputFildGroup/Content2";
import { useContext } from "react";
import { userContext } from "@/src/Storage/ContextApi";

const Fields = () => {
  const {newFeilds,setNewFeilds} = useContext(userContext)
  const targetRef = useRef(null);
  // const scrollTobottom = () => {
  //   if (targetRef.current) {
  //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const scrollTobottom = () => {
    if (targetRef.current) {
      const scrollHeight = targetRef.current.scrollHeight;
      targetRef.current.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  };
  return (
    <div className="grid grid-cols-4 2xl:grid-cols-3 gap-4 2xl:gap-8 h-[100vh] ">
      <div className="col-span-2  2xl:col-span-1 ...">
        <Sidebar scrollTobottom={scrollTobottom} newFeilds={newFeilds} setNewFeilds={setNewFeilds} />
      </div>
      <div className=" w-[500px] 2xl:w-[700px] ">
        <Content2 targetRef={targetRef} newFeilds={newFeilds} setNewFeilds={setNewFeilds}/>
        <div  ref={targetRef}></div>
      </div>
      
    </div>
  );
};

export default Fields;
