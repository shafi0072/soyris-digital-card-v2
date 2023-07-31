import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CardStatus = () => {
    const [cardStatus,setCardStatus] = useState(false);

    // handle card status
    const handleCardStatus = ()=>{
        fetch(`${baseUrl}/add-user/`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ cardStatus: cardStatus }),
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
    }

    return (
        <div className='my-8'>
            <h2 className='text-lg font-semibold'>Card Status</h2>

            <p className='mt-2 text-md'>Your card is active. If you pause your digital business card, its link and <br />QR code will become inactive.</p>
            <div className='mt-5 flex items-center'>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input onChange={handleCardStatus} onClick={()=>setCardStatus(!cardStatus)} type="checkbox" value="" class="sr-only peer"  />
                    <div class="w-11 h-6 bg-[#EB531B] rounded-full peer   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EB531B]"></div>
                </label>
                    <span class="ml-3 text-lg font-medium">Active</span>
            </div>

        </div>
    );
};

export default CardStatus;