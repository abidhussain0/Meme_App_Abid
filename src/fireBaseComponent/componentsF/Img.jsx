import React, { useEffect, useState } from 'react';
import { app } from '../../Db/dbconfig';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import MemeCardFireBase from './MemeCardFireBase';


function Imgupload() {
    const [txt, setTxt] = useState('');
    const [img, setImg] = useState('');
    const [data, setData] = useState([]);


    const txdb = getFirestore(app);
    const storage = getStorage(app);
    //upload pic on db storage
    const handleUploadImg = (e) => {
        console.log(e.target.files[0]);

        const imgs = storageRef(storage, `imgs/${uuidv4()}`);
        uploadBytes(imgs, e.target.files[0])
            .then(data => {
                console.log(data);
                getDownloadURL(data.ref)
                    .then(val => {
                        console.log(val)
                        setImg(val);
                    });
            });
    };
    //create collection
    const handleClick = async () => {
        const valRef = collection(txdb, 'taxdata');
        try {
            await addDoc(valRef, {
                id: uuidv4(),
                txtVal: txt,
                imgUrl: img
            });

            alert("Data added successfully!");
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };
    //getdata from db
    const getData = async () => {
        const valRef = collection(txdb, 'taxdata');
        try {
            const querySnapshot = await getDocs(valRef);
            const items = querySnapshot.docs.map(doc => doc.data());
            setData(items);
            console.log(items)
        } catch (error) {
            console.error('Error fetching documents:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <input
                type="text"
               placeholder='write here image name '
                onChange={(e) => setTxt(e.target.value)}
            />
            <input
                type="file"
                onChange={handleUploadImg}
            />
            <br />
            <br />
            <button
                type="button"
                onClick={handleClick}
                className="btn btn-info"
            >
                Add Custom Image
            </button>

            <div style={{padding:'1%'}}>
               
                {data.map((item, index) => (
                    <div key={index}>
                        <MemeCardFireBase
                        id={item.id}
                        img={item.imgUrl}
                        name={item.txtVal}
                        >
                        </MemeCardFireBase>
                    </div>
                )
                )
                }

            </div>

        </div>
    );
}

export default Imgupload;
