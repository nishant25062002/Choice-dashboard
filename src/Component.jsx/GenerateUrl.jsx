import React, { useState } from 'react'
import uuid from 'react-uuid';
import {storage} from '../../firebase'

const GenerateUrl = () => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [img, setImg] = useState("");

    const uploadImage = async () => {
        if (img ) {
            setLoading(true);
            const id=uuid();
            const imagesRef = storage.ref(`images`).child(id);
            await imagesRef.put(img);
            imagesRef.getDownloadURL().then((url) => {
                setUrl(url);
                setLoading(false);
            });
        } else {
            alert("Enter all the field")
        }
    };

    return (
        <>
        {loading ?
        <div className='fixed top-0 left-0 right-0 h-full w-full z-10 items-center justify-center flex' style={{backgroundColor:"#514e4ede"}}>
            <h1 className='font-sans bold z-100 text-xl text-black'>Loading....</h1>
        </div>
        :
            <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Image
                    </label>
                    <input type="file" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={(e) => setImg(e.target.files[0])} />
                </div>
                <div className="w-full lg:w-12/12 items-center justify-center flex mt-5 px-4">
                    <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mb-10" type="button" onClick={uploadImage}>
                        Add Information
                    </button>
                </div>
                {
                    url &&
                    url
                }
            </div>
}
        </>
    )
}

export default GenerateUrl