import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Aos from "aos";

function Contact() {
    useEffect(() => {
        Aos.init()
        window.scrollTo(0, 0)
    })
    return (
        <>
            <NavBar />
            <div className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill my-12 mx-40 hover:shadow-lg rounded-2xl" data-aos='flip-right' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578418637231-09d3d9bef148?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80')` }}></div>
            <div class="leading-loose">
                <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto my-30">
                    <p class="text-gray-800 font-large text-center">Data Penghubung</p>
                    <div class="my-5">
                        <label class="block text-sm text-gray-00" for="cus_name">Nama</label>
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Joko" aria-label="Name" />
                    </div>
                    <div class="my-5">
                        <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                        <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="email@mail.com" aria-label="Email" />
                    </div>
                    <div class="my-5">
                        <label class="block text-sm text-gray-600" for="cus_email">No. Telepon</label>
                        <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="0812345645" aria-label="Email" />
                    </div>
                    <div class="my-5">
                        <label class=" block text-sm text-gray-600" for="cus_email">Alamat</label>
                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
                    </div>
                    <div class="my-5">
                        <label class=" block text-sm text-gray-600" for="cus_email">Pesan</label>
                        <textarea id="about" name="about" rows="3" class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Pesan"></textarea>
                    </div>
                    <div class="my-8 mx-48">
                        <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">SEND</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact