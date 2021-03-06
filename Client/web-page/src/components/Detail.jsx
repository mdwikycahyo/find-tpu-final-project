import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Aos from "aos";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail.js";

function Detail() {
    const { id } = useParams()
    const detail = useDetail(`http://18.207.141.48:3000/keeper/${id}`)
    const history = useHistory()
    useEffect(() => {
        Aos.init()
    },[])
    console.log(detail);
    if (detail.facilities && detail.image_url) {
        return (
            <>
                <NavBar />
                <div className="relative items-center justify-center">
                    <hr className='mx-40 my-10' style={{ color: 'black' }}></hr>
                    <div className="max-w-7xl w-full lg:flex mx-auto my-20 hover:shadow-lg hover:bg-gray-100" data-aos='flip-right'>
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden shadow-lg"
                        style={{ backgroundImage: `url(${detail.image_url[0]})` }}
                        >
                        </div>
                        <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <div class="text-black font-bold text-xl mb-2 py-5 mx-10">{detail.cemetaryName}</div>
                                <h1 className="text-black font-bold text-l mb-2 mx-10">Alamat: {detail.cemetaryLocation}</h1>
                                <h1 className="text-black font-bold text-l mb-2 mx-10">Nama Pengelola: {detail.keeperName}</h1>
                                <h1 className="text-black font-bold text-l mb-2 mx-10">Telp: {detail.keeperPhone}</h1>
                                <h1 className="text-black font-bold text-l mb-2 mx-10">Fasilitas: {detail.facilities.join(', ')}</h1>
                                <h1 className="text-black font-bold text-l mb-2 mx-10">Lahan Tersedia: {detail.spaceLeft}</h1>

                                <p class="text-grey-darker text-base text-justify mx-10 py-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio enim, ea placeat laboriosam voluptate eius. Non ipsa libero impedit, quo veniam modi doloremque, aliquam, reiciendis accusamus provident nam voluptate minus.</p>
                            </div>
                            <div class="flex items-center mx-10">
                                <a href="" className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100 px-10" onClick={() => { history.push(`/payment/${id}`) }}>PESAN SEKARANG</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* foto */}
                <hr className='mx-40 my-20' style={{ color: 'black' }}></hr>
                <div className="lg:flex items-center container mx-auto my-auto" data-aos='fade-up'>
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-2xl bg-white my-12 mx-8">
                        {/* <!-- Card Image --> */}
                        <img src="https://asset.kompas.com/crops/eIoUKZV4o4Y2QADHEsjT9cGCWvM=/11x75:1000x734/750x500/data/photo/2017/08/28/3688824730.jpg" alt="" className="overflow-hidden" />
                    </div>
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-2xl bg-white my-12 mx-8">
                        {/* <!-- Card Image --> */}
                        <img src="https://asset.kompas.com/crops/eIoUKZV4o4Y2QADHEsjT9cGCWvM=/11x75:1000x734/750x500/data/photo/2017/08/28/3688824730.jpg" alt="" className="overflow-hidden" />
                    </div>
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-2xl bg-white my-12 mx-8">
                        {/* <!-- Card Image --> */}
                        <img src="https://asset.kompas.com/crops/eIoUKZV4o4Y2QADHEsjT9cGCWvM=/11x75:1000x734/750x500/data/photo/2017/08/28/3688824730.jpg" alt="" className="overflow-hidden" />
                    </div>
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-2xl bg-white my-12 mx-8">
                        {/* <!-- Card Image --> */}
                        <img src="https://asset.kompas.com/crops/eIoUKZV4o4Y2QADHEsjT9cGCWvM=/11x75:1000x734/750x500/data/photo/2017/08/28/3688824730.jpg" alt="" className="overflow-hidden" />
                    </div>
                </div>
                <hr className='mx-40 my-20' style={{ color: 'black' }}></hr>
                <Footer />
            </>
        )
    } else {
        return <p>Loading....</p>
    }

}

export default Detail