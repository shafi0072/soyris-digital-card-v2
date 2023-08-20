import { userContext } from "@/src/Storage/ContextApi";
import { baseUrl } from "@/src/config/Server";
import React from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const DeleteCard = () => {
  const { userData,userCardData } = useContext(userContext);
  console.log(userData._id);
  const router = useRouter();
  // handle delete card
  const handleDeleteCard = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${baseUrl}/cards/delete/${userCardData?._id}`,{
          method: "DELETE",
          headers: {
            'Content-Type': "application/json"
          }
        })
        .then(res=>res.json())
        .then(data=>{
          window.location.assign('/my-cards')
        })
        .catch(err=>{
          console.log(err.message);
        })
      }
    });
  };

  return (
    <div className="my-8">
      <h2 className="text-lg font-semibold">Delete Card</h2>
      <p className="mt-2 text-md">
        If you delete your digital business card, all the information will not
        be recoverable.
      </p>
      <button
        onClick={handleDeleteCard}
        className="rounded mt-5 text-[#FF0000] px-4 py-1 border-[1px] border-[#FF0100]"
      >
        DELETE CARD
      </button>
    </div>
  );
};

export default DeleteCard;
