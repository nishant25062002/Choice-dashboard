import React, { useState } from 'react'

const GenerateUrl = () => {
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('');
    const [img, setImg] = useState("");

    const uploadImage = async (n, img, img_id) => {
        if (img && n && img_id && param?.id_addPackage && param?.id) {
            setLoading(true);
            const imagesRef = firebase.storage().ref(`images-trek`).child(img_id);
            await imagesRef.put(img);
            imagesRef.getDownloadURL().then((url) => {
                setUrl(url);
            });
        } else {
            alert("Enter all the field")
        }
    };

    return (
        <>
        {loading ?
        <div className='absolute h-full w-full z-10 items-center justify-center flex'>
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
                    <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
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