import { userContext } from "@/src/Storage/ContextApi";
import { baseUrl } from "@/src/config/Server";
import React from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const DeleteCard = () => {
  const { userData } = useContext(userContext);
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
        fetch(`${baseUrl}/add-user/deleteProfile/${userData?._id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: "",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("email");
            if (data.message === "user Deleted") {
              Swal.fire("Deleted!", "User Deleted Successfully.", "success")
              .then(data=>window.location.assign('/'))

            }
          })
          .catch((err) => {
            console.log(err);
          });
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
