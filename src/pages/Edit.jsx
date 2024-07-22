import React, { createRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

import { FacebookShareButton, FacebookIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';




function Edit() {
  const [params]=useSearchParams();
  const [count,setCount] = useState(0)


  const Addtext =()=>{
    setCount(count+1)

  }

  const memref = createRef()
  return (
<>
    <div ref={memref} className='meem mt-3 mb-3 ' >
      <img src={params.get("url")} width={'350px'}></img>
      {Array(count)
      .fill(0)
      .map((e) => (
        <>
        
        <Text></Text>
        </>
        ))}
    </div>
    

    <button  onClick={Addtext} type="button" class="btn btn-primary">Add text</button>
    <button type="button" class="btn btn-success" 
    variant='Success'
    onClick={(e)=>{exportComponentAsJPEG(memref)}}>Save </button>
    {/* <FacebookShareButton
        url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
  url={'https://www.example.com'}
  quote={'Dummy text!'}
  hashtag="#muo"
>
  <TwitterIcon size={32} round />
</TwitterShareButton> */}

    </>
  )
}

export default Edit
