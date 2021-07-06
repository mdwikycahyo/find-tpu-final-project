import NavBar from "./NavBar"
import Footer from "./Footer"
import { useHistory, useParams } from "react-router-dom"
import { useEffect } from "react"
import useDetail from "../hooks/useDetail"
import { useState } from "react"
import { setLoading } from "../store/actionCreator"
import { useDispatch, useSelector } from "react-redux"
import { addTransactionXendit } from '../store/actions/index'

function Xendit() {
    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const transaction = useSelector(state => state.transactionReducer.transaction)
    const xendit = useSelector(state => state.transactionReducer.xendit)
    const [formData, setFormData] = useState({
        transactionId: '',
        bankCode: '',
        payerName: '',
        expected_amount: '',
        is_closed: '',
        is_single_use: '',
    })
    // const isLoading = useSelector(state => state.cemeteryReducer.isLoading)
    // console.log(formData)
    // console.log(detail);
    useEffect(() => {
        if (transaction._id) {
            setFormData({
                transactionId: transaction._id,
                bankCode: 'BNI',
                payerName: transaction.payerName,
                expected_amount: transaction.price,
                is_closed: true,
                is_single_use: true,
            })
        }
    }, [transaction])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (xendit.id) {
            history.push(`/checkout/${xendit.id}`)
        } else {
            return null
        }
    }, [xendit])

    function submitPayment(event) {
        event.preventDefault()
        // console.log('masuk');
        dispatch(addTransactionXendit(formData))
        console.log(xendit);
    }
    return (
        <>
            <NavBar />
            <div class="leading-loose">
                <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto my-40" onSubmit={submitPayment}>
                    <p class="text-gray-800 font-large text-center text-4xl mb-16">METODE PEMBAYARAN</p>
                    <p class="my-4 text-gray-800 font-medium">PILIH BANK</p>
                    <div class="my-5">
                        <select
                            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                            type="text"
                            placeholder="Name Mendiang"
                            aria-label="Name"
                            onChange={(e) => setFormData({ ...formData, bankCode: e.target.value })}
                        >
                            <option value="BNI">BNI</option>
                            <option value="MANDIRI">MANDIRI</option>
                            <option value="PERMATA">PERMATA</option>
                            <option value="BRI">BRI</option>
                        </select>
                    </div>
                    <div class="my-8 mx-48">
                        <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Bayar</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )


}

export default Xendit