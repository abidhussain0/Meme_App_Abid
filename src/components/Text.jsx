import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './../App.css';

function Text() {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState('Double Click to Edit');
  const [fontSize, setFontSize] = useState(20);
  const [color, setColor] = useState('green');

  const handleDrag = (e, data) => {
    const newFontSize = Math.max(8, fontSize + data.deltaX / 5);
    setFontSize(newFontSize);
  };

  return (
    <Draggable onDrag={handleDrag}>
      <div>
        {editMode ? (
          <div>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onDoubleClick={() => setEditMode(false)}
              style={{ fontSize, color }}
            />
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        ) : (
          <h1
            onDoubleClick={() => setEditMode(true)}
            style={{ fontSize, margin: 0, color }}
          >
            {value}
          </h1>
        )}
      </div>
    </Draggable>
  );
}

export default Text;




// function Text() {
//     const [editmod, setEditmod] = useState(false)
//     const [val, setVal] = useState('Double Click to Edit')

//     return (
//         <div>
//             <Draggable>
//                 {
//                     editmod
//                         ?
//                         (<input 
//                             onDoubleClick={(e) => setEditmod(false)}
//                             value={val}
//                             onChange={e => setVal(e.target.value)}
//                         ></input>)

//                         :
//                         (<h1 onDoubleClick={(e) => setEditmod(true)}
                      
//                         >{val}</h1>)
//                 }
//             </Draggable>

//         </div>
//     )
// }

// export default Text
