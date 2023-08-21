import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import Phone from "./Phone";
import { Container, Draggable } from "react-smooth-dnd";
import { useContext } from "react";
import { baseUrl } from "@/src/config/Server";
import Inputs from "./Inputs";
import { compressAndConvertToBase64 } from "@/src/config/base64";
import { convertPDFToBase64 } from "@/src/config/pdfBase64";

const Content2 = () => {
  const { newFeilds, setNewFeilds,userCardData } = useContext(userContext);
  const onDrop = (dropResult) => {
    if (!dropResult.removedIndex && !dropResult.addedIndex) return;

    const fields = [...newFeilds];
    const [removed] = fields.splice(dropResult.removedIndex, 1);
    fields.splice(dropResult.addedIndex, 0, removed);

    setNewFeilds(fields);
  };
  const handleFieldsOnSubmit = () => {
    fetch(`${baseUrl}/cards/fields/${userCardData?._id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fields: [...newFeilds]
        })
    })
    .then(res=> res.json())
    .then(data=> console.log({data}))
    .catch(err=> console.log(err.message))
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
    const files = value
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
    const files = value
    const compressedBase64 = await convertPDFToBase64(files);
    setNewFeilds((prevFields) =>
      prevFields.map((field) => {
        if (field.id === id) {
          return { ...field, pdf: compressedBase64 };
        }
        return field;
      })
    );
  };

  const handleGalaryChanges = async (id, newImage) => {
    const files = newImage
    const compressedBase64 = await compressAndConvertToBase64(
      files,
      800,
      600,
      0.8
    );
    setNewFeilds((prev) => {
      return prev.map(item => {
        if (item.id === id) {
          // Add the new image to the image array of the specific object
          return {
            ...item,
            image: [...item.image, compressedBase64],
          };
        }
        return item;
      });
    })
  }
  console.log({ newFeilds });
  const handleDelete = (idToDelete) => {
    setNewFeilds(prevState => prevState.filter(item => item?.id !== idToDelete));
  };
  return (
    <>
      <div className="border-dotted border-2 bg-gray-200  border-sky-500 p-5 rounded-lg">
        <Container onDrop={onDrop}>
          {newFeilds?.length > 0 && newFeilds?.map((items, index) => (
            <Draggable key={index}>
              <div className="mb-4">
                <Phone items={items} handleFieldChange={handleFieldChange} handleImageChanges={handleImageChanges} handleGalaryChanges={handleGalaryChanges} handlePdfChanges={handlePdfChanges} handleDelete={handleDelete}/>
                {/* <Inputs id={items.id}  items={items}  handleFieldChange={handleFieldChange}/> */}
              </div>
            </Draggable>
          ))}
        </Container>
      </div>
      <div className="fixed bottom-20 left-[35%]  z-50">
        <input
          type="submit"
          value="Cancel"
          className="px-5 py-1  font-medium text-lg text-black border border-[#0277B5] rounded me-5 cursor-pointer hover:bg-[#0277B5] hover:text-white transition-all duration-500"
        />
        <input
          type="submit"
          onClick={handleFieldsOnSubmit}
          value="Save"
          className="px-5 py-1 border border-[#0277B5] bg-[#0277B5] font-medium text-lg text-white rounded cursor-pointer hover:bg-[#0277B5]"
        />
      </div>
    </>
  );
};

export default Content2;


