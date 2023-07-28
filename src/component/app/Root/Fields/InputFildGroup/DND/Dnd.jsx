import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DraggableItem = ({ item, index, moveItem }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'item',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <div ref={(node) => drag(drop(node))} style={{ opacity }}>
      {/* Render your item components here based on the 'item' value */}
      {/* For example, if item === 'Phone', render <Phone index={index} /> */}
    </div>
  );
};

const DraggableList = ({ fields }) => {
  const [items, setItems] = useState(fields);

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {items.map((item, index) => (
        <DraggableItem key={index} item={item} index={index} moveItem={moveItem} />
      ))}
    </DndProvider>
  );
};

export default DraggableList