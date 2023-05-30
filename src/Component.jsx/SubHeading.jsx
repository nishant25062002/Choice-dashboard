import React, { useState } from 'react'

const SubHeading = ({ setshowField, setblog, blog }) => {

    const [heading, setHeading] = useState('');
    const [subheading, setSubHeading] = useState('');
    const [img, setImg] = useState('');
    const [desc, setdesc] = useState('');
    const [list, setlist] = useState('');
    const [show, setHide] = useState(1);
    const [added, setadded] = useState(0);

    const addInArray = () => {
        var temp = blog;
        temp.push({
            heading:heading,
            subheading:subheading,
            img:img,
            desc: desc.split('**'),
            list: list.split('**'),
        })
        setblog(temp);
        setadded(1);
    }

    const sty = {
        'btn': " mt-3 mb-3  bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 w-40",
        'input': "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
    }

    return (
        <>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase cursor-pointer" onClick={() => setHide(!show)}>
                heading
                {
                    show ? "⬇️" : "➡️"
                }
            </h6>
            {show && <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Heading
                        </label>
                        <input type="text" className={sty.input} value={heading} onChange={(e) => setHeading(e.target.value)} placeholder='heading' />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Sub-heading
                        </label>
                        <input type="text" className={sty.input} value={subheading} onChange={(e) => setSubHeading(e.target.value)} placeholder='Sub heading' />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Image Url
                        </label>
                        <input type="text" className={sty.input} value={img} onChange={(e) => setImg(e.target.value)}
                            placeholder='Image url' />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Desc
                        </label>
                        <textarea type="text" className={sty.input} rows="4" placeholder='Description' onChange={e=>setdesc(e.target.value)} />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            List
                        </label>
                        <textarea type="text" className={sty.input} rows="4" placeholder='List' onChange={e=>setlist(e.target.value)}/>
                    </div>
                </div>


                <div className="w-full lg:w-12/12 items-center justify-center flex mt-5 px-4">
                    {!added && <button className={sty.btn} type="button" onClick={addInArray}>
                        Add in Object
                    </button>}
                </div>
            </div>}
        </>
    )
}

export default SubHeading