import React, { useState } from "react";
import CardName from "./CardName";
import Personalised from "./Personalised";
import CardStatus from "./CardStatus";
import DuplicateCard from "./DuplicateCard";
import DeleteCard from "./DeleteCard";
import { baseUrl } from "@/src/config/Server";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const Settings = () => {
  const [cardName, setCardName] = useState("");
  const [url, setUrl] = useState("");
  console.log(cardName, url);

  const handleCardNameOnChange = (event) => {
    const cardName = event.target.value;
    setCardName(cardName);
  };

  // handle cardName
  const handleCardName = () => {
    fetch(`${baseUrl}/add-user/profile/setting/`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ cardName: cardName }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
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
    fetch(`${baseUrl}/add-user`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url: url }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
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
      <Personalised setUrl={setUrl} handleUrl={handleUrl} />
      <CardStatus />
      <DuplicateCard />
      <DeleteCard />
    </div>
  );
};

export default Settings;
