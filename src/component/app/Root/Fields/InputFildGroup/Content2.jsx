import { userContext } from '@/src/Storage/ContextApi';
import React from 'react';
import Phone from './Phone';
import { Container, Draggable } from "react-smooth-dnd";
import { useContext } from 'react';

const Content2 = () => {
    const {newFeilds,setNewFeilds} = useContext(userContext)

    const onDrop = (dropResult) => {
        if (!dropResult.removedIndex && !dropResult.addedIndex) return;
    
        const fields = [...newFeilds];
        const [removed] = fields.splice(dropResult.removedIndex, 1);
        fields.splice(dropResult.addedIndex, 0, removed);
    
        setNewFeilds(fields);
      };

      

      return (
        <>
          <div className="border-dotted border-2 bg-gray-200  border-sky-500 p-5 rounded-lg">
            <Container onDrop={onDrop}>
              {newFeilds.map((items, index) => (
                <Draggable key={index}>
                  <div className='mb-4'>
                    <Phone items={items}/>
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
            //   onClick={handleFieldsOnSubmit}
              value="Save"
              className="px-5 py-1 border border-[#0277B5] bg-[#0277B5] font-medium text-lg text-white rounded cursor-pointer hover:bg-[#0277B5]"
            />
          </div>
        </>
      );
};

export default Content2;