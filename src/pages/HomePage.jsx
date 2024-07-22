import React, { useEffect, useState } from 'react'
import MemeCared from '../components/MemeCared'
import { getAllMeme } from '../Api/Meme.Jsx'
import Imgupload from '../fireBaseComponent/componentsF/Img'


function HomePage() {

    const [data, setData] = useState([])
    useEffect(() => {
        getAllMeme().then(meme => setData(meme.data.memes))

    }, [])
    return (
        <>
            <div className="container">
                <div className="pull-left">
                    <Imgupload>
                    
                    </Imgupload>
                </div>

                <div className="pull-right">{
                    data.map(el =>
                        <MemeCared
                            img={el.url}
                            name={el.name}
                        ></MemeCared>)}
                </div>
            </div>

        </>
    )
}

export default HomePage
