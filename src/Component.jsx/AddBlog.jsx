import React, { useState } from 'react'
import GenerateUrl from './GenerateUrl';
import SubHeading from './SubHeading';
import { Formik, Form, Field, FieldArray } from 'formik';


const AddBlog = () => {

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(true);
    const [blog, setblog] = useState([]);
    const [field, setField] = useState(1);
    const [showField, setshowField] = useState(false);
    const [title, settitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [img, setImg] = useState('');
    const [desc, setdesc] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [country, setcountry] = useState('');
    const [conclusion, setconclusion] = useState('');
    var today = new Date();
    var datetime = today.toLocaleString();

    const sty = {
        'btn': " mt-3 mb-3  bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 w-40",
        'input': "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
    }

    const addBlog = () => {
        db.collection("Blogs")
            .doc('CETKwtvcv7juo1qDad2HGYM')
            .collection("Blog")
            .doc(title)
            .set({
                title:title,
                subtitle:subtitle,
                author:author,
                img:img,
                desc:desc,
                address:address,
                city:city,
                country:country,
                conclusion:conclusion,
                blog:blog,
                date:datetime,
            })
            .then(() => {

            })
    }

    return (
        <>
            <section className=" py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 bg-blueGray-50">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold" onClick={() => setPage(!page)}>
                                    Add Blog
                                </h6>
                                <h6 className="text-blueGray-700 text-xl font-bold" onClick={() => setPage(!page)}>
                                    Add Image
                                </h6>
                            </div>
                        </div>
                        {page ? <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    BLog Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Title
                                            </label>
                                            <input placeholder='Title' type="text" className={sty.input} value={title} onChange={e => settitle(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Author
                                            </label>
                                            <input placeholder='Author' type="text" className={sty.input} value={author} onChange={e => setAuthor(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Sub-heading
                                            </label>
                                            <input placeholder='Sub-heading' type="text" className={sty.input} value={subtitle} onChange={e => setSubtitle(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Image Url
                                            </label>
                                            <input type="text" className={sty.input} value={img} onChange={e => setImg(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-12/12 px-4">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Description
                                        </label>
                                        <textarea placeholder='description' type="text" className={sty.input} rows="4" value={desc} onChange={e => setdesc(e.target.value)} />
                                    </div>


                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                    Address
                                                </label>
                                                <input type="text" className={sty.input} value={address} onChange={e => setaddress(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                    City
                                                </label>
                                                <input type="email" className={sty.input} value={city} onChange={e => setcity(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                    Country
                                                </label>
                                                <input type="text" className={sty.input} value={country} onChange={e => setcountry(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            {/* <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                    Postal Code
                                                </label>
                                                <input type="text" className={sty.input} value={} onChange={e=>settitle(e.target.value)} />
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* 
                                    <div className="w-full lg:w-12/12 items-center justify-center flex mt-5 px-4">
                                        <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                            Add Information
                                        </button>
                                    </div> */}
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                <h1 className="mt-6 text-6xl mb-10 flex justify-center">New Section</h1>
                                <hr className="mt-6 mb-4 border-b-1 border-blueGray-300" />
                                <>
                                    {/* {
                                        Array.from(Array(field), (e, i) => {
                                            return <SubHeading/>
                                            // return <li key={i}>{i}</li>
                                        })
                                    } */}
                                    <Formik
                                        initialValues={{ blogSec: [] }}
                                        // onSubmit={
                                        //     values =>
                                        //     setTimeout(() => {
                                        //         alert(JSON.stringify(values, null, 2));
                                        //     }, 500)
                                        // }
                                        render={({ values }) => (
                                            <Form>
                                                <FieldArray
                                                    name="blogSec"
                                                    render={arrayHelpers => (
                                                        <div className='flex-col'>
                                                            {values.blogSec && values.blogSec.length > 0 ? (
                                                                values.blogSec.map((blogSec, index) => (
                                                                    <div className='flex flex-col' key={index}>
                                                                        {/* <Field className={sty.input} name={`blogSec[${index}].name`} /> */}
                                                                        <SubHeading index={index} blog={blog} setblog={setblog} />
                                                                        {/* <Field name={`blogSec.${index}.age`} /> */}
                                                                        {
                                                                            index == values.blogSec.length - 1 &&
                                                                            <div>
                                                                                <button
                                                                                    type="button" className={sty.btn}
                                                                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                                                >
                                                                                    -
                                                                                </button>
                                                                                <button
                                                                                    type="button" className={sty.btn}
                                                                                    onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                                                                >
                                                                                    +
                                                                                </button></div>
                                                                        }
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <button className={sty.btn} type="button" onClick={() => arrayHelpers.insert({ name: '', age: '' })}>
                                                                    Add Field
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}
                                                />
                                            </Form>
                                        )}
                                    />
                                </>
                                {/* <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" onClick={() => { setField(field--) }}>
                                    Delete Field
                                </button>
                                <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" onClick={() => { setField(field++) }}>
                                    Add Field
                                </button> */}
                                {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                <h1 className="mt-6 text-6xl mb-10 flex justify-center">New Section</h1>
                                <hr className="mt-6 mb-4 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Conclusion
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">

                                            <textarea type="text" className={sty.input} rows="4" placeholder='Conclusion' value={conclusion} onChange={e => setconclusion(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                            :
                            <GenerateUrl />
                        }

                    </div>
                    <footer className="relative  pt-8 pb-6 mt-2">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        Made with <a href="https://creamchoice.in/" className="text-blueGray-500 hover:text-gray-800" target="_blank">Creamchoice</a> by <a href="/" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Nishant</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default AddBlog