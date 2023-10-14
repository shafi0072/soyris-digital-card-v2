import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import Phone from "./Phone";
import { Container, Draggable } from "react-smooth-dnd";
import { useContext } from "react";
import { baseUrl } from "@/src/config/Server";
import Inputs from "./Inputs";
import { compressAndConvertToBase64 } from "@/src/config/base64";
import { convertPDFToBase64 } from "@/src/config/pdfBase64";
import { toast } from "react-toastify";
import { useRef } from "react";
import { useEffect } from "react";

const Content2 = () => {
  const { newFeilds, setNewFeilds, userCardData, setIsLoading } =
    useContext(userContext);
  const onDrop = (dropResult) => {
    if (!dropResult.removedIndex && !dropResult.addedIndex) return;

    const fields = [...newFeilds];
    const [removed] = fields.splice(dropResult.removedIndex, 1);
    fields.splice(dropResult.addedIndex, 0, removed);

    setNewFeilds(fields);
  };
  const handleFieldsOnSubmit = () => {
    setIsLoading(true);
    fetch(`${baseUrl}/cards/fields/${userCardData?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [...newFeilds],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        toast.success("Fields are updated successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log({ data });
      })
      .catch((err) => console.log(err.message));
  };

  const handleFieldChange = (id, fieldName, value) => {
    setNewFeilds((prevFields) =>
      prevFields.map((field) => {
        if (field?.id === id) {
          return { ...field, [fieldName]: value };
        }
        return field;
      })
    );
  };
  const handleImageChanges = async (id, value) => {
    const files = value;
    const compressedBase64 = await compressAndConvertToBase64(
      files,
      800,
      600,
      0.8
    );
    setNewFeilds((prevFields) =>
      prevFields.map((field) => {
        if (field.id === id) {
          return { ...field, image: compressedBase64 };
        }
        return field;
      })
    );
  };
  const handlePdfChanges = async (id, value) => {
    const files = value;
    const compressedBase64 = await convertPDFToBase64(files);
    setNewFeilds((prevFields) =>
      prevFields.map((field) => {
        if (field.id === id) {
          return { ...field, pdf: {name: value?.name, file: compressedBase64} };
        }
        return field;
      })
    );
  };

  const handleGalaryChanges = async (id, newImage) => {
    const files = newImage;
    const compressedBase64 = await compressAndConvertToBase64(
      files,
      800,
      600,
      0.8
    );
    setNewFeilds((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          // Add the new image to the image array of the specific object
          return {
            ...item,
            image: [...item.image, compressedBase64],
          };
        }
        return item;
      });
    });
  };
  const handleDelete = (idToDelete) => {
    setNewFeilds((prevState) =>
      prevState.filter((item) => item?.id !== idToDelete)
    );
  };

  const rightSideRef = useRef(null);
  useEffect(() => {
    // Scroll to the end of the right side div whenever rightSideFields changes.
    if (rightSideRef.current) {
      rightSideRef.current.scrollTop = rightSideRef.current.scrollHeight;
    }
  }, [newFeilds.length]);
  return (
    <>
      <div
        ref={rightSideRef}
        style={{ overflowY: "auto", maxHeight: "70vh" }}
        className="right-side scroll-hide  mb-5 bg-gray-200   p-5 rounded-lg"
      >
        <Container onDrop={onDrop} >
          {newFeilds?.length > 0 &&
            newFeilds?.map((items, index) => (
              <Draggable key={index} >
                <div className="mb-4">
                  <Phone
                    items={items}
                    handleFieldChange={handleFieldChange}
                    handleImageChanges={handleImageChanges}
                    handleGalaryChanges={handleGalaryChanges}
                    handlePdfChanges={handlePdfChanges}
                    handleDelete={handleDelete}
                  />
                  {/* <Inputs id={items.id}  items={items}  handleFieldChange={handleFieldChange}/> */}
                </div>
              </Draggable>
            ))}
        </Container>
        
      </div>
      <div
        className="fixed bottom-0 bg-[white] w-full h-[70px] r-[500px] left-[0%] ps-[18.7%] 2xl:ps-[15%]  z-20"
        style={{ boxShadow: " 0px -4px  10px lightgray" }}
      >
        <input
          type="submit"
          onClick={handleFieldsOnSubmit}
          value="Save"
          className="px-5 py-1 my-4 border border-[black] bg-[black] font-medium text-lg text-white rounded cursor-pointer hover:bg-[black]"
        />
      </div>
    </>
  );
};

export default Content2;
