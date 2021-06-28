import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Aos from "aos";
import Payment from "./Payment.jsx";


function FinalPayment() {
    const dataPayment = useSelector(state=> state.transactionReducer.xendit)
    useEffect(() => {
        Aos.init()
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <NavBar />
            <div className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill my-12 mx-40 hover:shadow-lg rounded-2xl" data-aos='flip-right' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578418637231-09d3d9bef148?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80')` }}>
                <div className="md:w-1/2">
                    <p className="font-bold text-sm uppercase mx-2 my-2"></p>
                </div>
            </div>
            <div className="relative items-center justify-center my-20">
                <div class="items-center bg-white  p-4 flex flex-col justify-between leading-normal">
                    <div class="text-center text-black font-bold text-3xl mb-2 py-5 mx-10" data-aos='fade-up'>MENUNGGU PEMBAYARAN</div>
                    <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8 my-10">
                            <div class="text-black font-bold text-xl mb-2 py-5 mx-10">NOMOR REKENING : {dataPayment.account_number} </div>
                            <div class="text-black font-bold text-xl mb-2 py-5 mx-10">JUMLAH : Rp {new Intl.NumberFormat('de-DE').format(dataPayment.expected_amount)},00 </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FinalPayment