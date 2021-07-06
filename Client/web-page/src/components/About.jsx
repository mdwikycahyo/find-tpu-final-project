import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Aos from "aos";

function About() {
    useEffect(()=>{
        Aos.init()
        window.scrollTo(0,0)
    })
    return (
        <>
            <NavBar />
            <div className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill my-12 mx-40 hover:shadow-lg rounded-2xl" data-aos='flip-right' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578418637231-09d3d9bef148?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80')` }}>
                <div className="md:w-1/2">
                    <p className="font-bold text-sm uppercase mx-2 my-2"></p>
                </div>
            </div>
            <div className="relative items-center justify-center">
                <div className="max-w-7xl w-full lg:flex mx-auto my-20 hover:shadow-lg hover:bg-gray-100">
                    <div class="items-center bg-white  p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                            <div class="text-center text-black font-bold text-3xl mb-2 py-5 mx-10" data-aos='fade-up'>TENTANG KAMI</div>
                            <p class="text-grey-darker text-base text-justify mx-10 py-10" data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio enim, ea placeat laboriosam voluptate eius. Non ipsa libero impedit, quo veniam modi doloremque, aliquam,
                                reiciendis accusamus provident nam voluptate minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fuga eum vero sint voluptas quo ducimus voluptatibus quis? Harum veniam quae beatae laboriosam est dignissimos. Accusamus hic voluptates quod nam?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic nesciunt, voluptates nostrum totam explicabo voluptatum exercitationem ut iste quisquam officia dignissimos repellendus, praesentium maxime similique non dolores expedita maiores.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque praesentium et dignissimos modi ratione nemo fuga saepe repellendus suscipit minus. Quae pariatur ea enim deserunt praesentium repellendus iure sequi necessitatibus?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat sint ab. Dolore hic culpa quisquam iste recusandae tempore quos quibusdam tenetur voluptatibus, distinctio soluta sit! Assumenda et quod corporis.
                            </p>
                            <p class="text-grey-darker text-base text-justify mx-10" data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio enim, ea placeat laboriosam voluptate eius. Non ipsa libero impedit, quo veniam modi doloremque, aliquam,
                                reiciendis accusamus provident nam voluptate minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fuga eum vero sint voluptas quo ducimus voluptatibus quis? Harum veniam quae beatae laboriosam est dignissimos. Accusamus hic voluptates quod nam?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic nesciunt, voluptates nostrum totam explicabo voluptatum exercitationem ut iste quisquam officia dignissimos repellendus, praesentium maxime similique non dolores expedita maiores.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque praesentium et dignissimos modi ratione nemo fuga saepe repellendus suscipit minus. Quae pariatur ea enim deserunt praesentium repellendus iure sequi necessitatibus?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat sint ab. Dolore hic culpa quisquam iste recusandae tempore quos quibusdam tenetur voluptatibus, distinctio soluta sit! Assumenda et quod corporis.
                            </p>
                        </div>
                        <div class="flex items-center mx-10">
                            <a href="" className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100 px-10">HUBUNGI KAMI</a>
                        </div>
                        <hr className='mx-40 my-10' style={{ color: 'black' }}></hr>
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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About