import React, { createRef, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { exportComponentAsJPEG } from 'react-component-export-image';
import Text from '../components/Text';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../Db/dbconfig';

function Edit1() {
  const txdb = getFirestore(app);

  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState(null);

  const Addtext = () => {
    setCount(count + 1);
  };

  const getData = async () => {
    const valRef = collection(txdb, 'taxdata');
    try {
      const querySnapshot = await getDocs(valRef);
      const items = querySnapshot.docs.map(doc => doc.data());
      setData(items);

      //check data
      const id = params.get("id");
      const find = items.find(item => item.id ===id);
      if (find) {
        setImageData(find.imgUrl);
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const memref = createRef();

  return (
    <>
      <div ref={memref} className='meem mt-3 mb-3'>
        {imageData && (
          <img src={imageData} width={'350px'} alt="Fetched from DB" />
        )}

        {Array(count).fill(0).map((e, index) => (
          <Text key={index}></Text>
        ))}
      </div>

      <button onClick={Addtext} type="button" className="btn btn-primary">Add text</button>
      <button type="button" className="btn btn-success"
        onClick={() => exportComponentAsJPEG(memref)}>Save</button>
    </>
  );
}

export default Edit1;
