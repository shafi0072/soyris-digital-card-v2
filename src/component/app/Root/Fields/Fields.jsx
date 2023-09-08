import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Content2 from "./InputFildGroup/Content2";
import { useContext } from "react";
import { userContext } from "@/src/Storage/ContextApi";

const Fields = () => {
  const {newFeilds,setNewFeilds} = useContext(userContext)

  return (
    <div className="grid grid-cols-3 gap-4 h-[100vh] ">
      <div className="...">
        <Sidebar newFeilds={newFeilds} setNewFeilds={setNewFeilds} />
      </div>
      <div className="col-span-2 ...">
        <Content2 newFeilds={newFeilds} setNewFeilds={setNewFeilds}/>
      </div>
      
    </div>
  );
};

export default Fields;
