import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Content from "./InputFildGroup/Content";

const Fields = () => {
  const [feilds, setFeilds] = useState([]);
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="...">
        <Sidebar feilds={feilds} setFeilds={setFeilds} />
      </div>
      <div className="col-span-2 ...">
        <Content feilds={feilds} setFeilds={setFeilds}/>
      </div>
      
    </div>
  );
};

export default Fields;
