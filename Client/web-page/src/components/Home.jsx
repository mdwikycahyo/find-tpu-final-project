import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Aos from "aos";
import Pic1 from '../picture/Booking.png'
import Pic2 from '../picture/scheduled.png'
import Pic3 from '../picture/payment.png'
import { FetchCemetery } from "../store/actions/index.js";
import Card from "./smallComponents/Card.jsx";

function HomePage() {
    const history = useHistory()
    const dispatch = useDispatch()
    const cemeteries = useSelector(state => state.cemeteryReducer.cemetery)
    useEffect(() => {
        Aos.init()
        window.scrollTo(0, 0)
        dispatch(FetchCemetery())
    }, [])

    if (cemeteries.length > 0) {
        return (
            <>
                <NavBar />
                <div>
                    <div className="relative items-center justify-center">
                        {/* <!-- Header Text--> */}
                        {/* <h1 className="text-center text-2xl font-bold p-4 bg-gray-800 text-gray-400">Choose Your Future Home</h1> */}
                        <div className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill my-12 mx-40 hover:shadow-lg rounded-2xl" data-aos='flip-right' style={{ backgroundImage: `url(${cemeteries[0].image_url[0]})` }}>
                            <div className="md:w-1/2">
                                <p className="font-bold text-sm uppercase mx-2 my-2">Terdekat (1.5 Km)</p>
                                <p className="text-3xl font-bold mx-2 my-2">{cemeteries[0].cemetaryName}</p>
                                <p className="text-2xl mb-10 leading-none mx-2">Rp {new Intl.NumberFormat('de-DE').format(cemeteries[0].price)},00</p>
                                <a href="#" className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-red-500 text-gray-100" onClick={() => { history.push(`/detail/${cemeteries[0]._id}`)}}>DETAIL</a>
                            </div>
                        </div>

                        {/* <!-- All Cards Container --> */}
                        <div className="lg:flex items-center container mx-auto my-auto" data-aos='fade-up'>
                            {
                                cemeteries.slice(0,3).map((cemetery, index) => {
                                    return (
                                        <Card cemetery={cemetery} index={index} />
                                    )
                                })
                            }
                            {/* <!-- Card 1 --> */}

                        </div>
                        <hr className='mx-40 my-10' style={{ color: 'black' }}></hr>
                        {/* 2nd section */}
                        <h1 className="text-6xl text-center text-gray-600 text-lg my-14 uppercase">KENAPA FIND TPU?</h1>
                        <div className="flex container mx-auto my-auto w-15 h-15" data-aos='fade-up'>
                            <div className="flex-1">
                                <img src={Pic1} alt="" />
                                <h1 className='mx-32 font-medium text-gray-600 text-lg my-8 uppercase'>Pemesanan Mudah</h1>
                            </div>
                            <div className="flex-1">
                                <img src={Pic2} alt="" />
                                <h1 className='mx-32 font-medium text-gray-600 text-lg my-2 uppercase'>PERAWATAN Terjadwal</h1>
                            </div>
                            <div className="flex-1">
                                <img src={Pic3} alt="" />
                                <h1 className='mx-32 font-medium text-gray-600 text-lg my-14 uppercase'>Pembayaran Online</h1>
                            </div>
                        </div>

                        {/* 3rd section */}
                        <hr className='mx-40 my-10' style={{ color: 'black' }}></hr>
                        <div className="max-w-4xl w-full lg:flex mx-auto my-20 hover:shadow-lg hover:bg-gray-100" data-aos="fade-up">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden shadow-lg" style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }}>
                            </div>
                            <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div class="mb-8">
                                    <div class="text-black font-bold text-xl mb-2 py-5 mx-10">KEMUDAHAN AKSES ADALAH KOMITMEN KAMI</div>
                                    <p class="text-grey-darker text-base text-justify mx-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio enim, ea placeat laboriosam voluptate eius. Non ipsa libero impedit, quo veniam modi doloremque, aliquam, reiciendis accusamus provident nam voluptate minus.</p>
                                </div>
                                <div class="flex items-center mx-10">
                                    <a href="" className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100 px-10" onClick={() => { history.push('/contact') }}>BERGABUNG SEBAGAI PENGELOLA TPU</a>
                                </div>
                            </div>
                        </div>
                        <hr className='mx-40 my-10' style={{ color: 'black' }}></hr>
                        {/* <!-- Footer --> */}
                        {/* <div className="mt-10 bottom-0 text-center">
                        <h4 className="text-sm font-semibold text-gray-600 "> &COPY; 2021 CORE-UI</h4>
                    </div> */}
                        <Footer />
                    </div>
                </div>
            </>
        )
    } else {
        return <p>Loading...</p>
    }

}

export default HomePage