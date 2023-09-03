import React, { useState } from "react";
import CardName from "./CardName";
import Personalised from "./Personalised";
import CardStatus from "./CardStatus";
import DuplicateCard from "./DuplicateCard";
import DeleteCard from "./DeleteCard";
import { baseUrl } from "@/src/config/Server";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import { useContext } from "react";
import { userContext } from "@/src/Storage/ContextApi";
import { useEffect } from "react";

const Settings = () => {
  const { settings } = useContext(userContext);
  const [isEdit, setEdit] = useState(false);
  const [cardName, setCardName] = useState("");
  const [url, setUrl] = useState("");
  const { userData,userCardData } = useContext(userContext);
 
  
  const handleCardNameOnChange = (event) => {
    const cardName = event.target.value;
    setCardName(cardName);
  };
 

 

  // handle cardName
  const handleCardName = () => {
    var raw = JSON.stringify({
      setting: {
        cardName: cardName,
        cardStatus: userData?.setting?.cardStatus,
        url: userData?.setting?.url,
      },
    });
    fetch(`${baseUrl}/cards/profile/setting/${userCardData?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: raw,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Profile information updated successfully") {
          setEdit(false);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // handle url

  const handleUrl = () => {
    var raw = JSON.stringify({
      setting: {
        url: url,
        cardName: settings.cardName,
        cardStatus: settings.cardStatus,
      },
    });
    const cardId = localStorage.getItem("cardId");
    fetch(`${baseUrl}/cards/profile/setting/${userCardData?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: raw,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Profile information updated successfully") {
          setEdit(false);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      
      <CardName
        handleCardNameOnChange={handleCardNameOnChange}
        handleCardName={handleCardName}
      />
      <Personalised
        setUrl={setUrl}
        handleUrl={handleUrl}
        isEdit={isEdit}
        setEdit={setEdit}
      />
      <CardStatus />
      <DuplicateCard />
      <DeleteCard />
    </div>
  );
};

export default Settings;
