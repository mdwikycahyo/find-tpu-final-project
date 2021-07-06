import NavBar from "./NavBar"
import Footer from "./Footer"
import { useHistory, useParams } from "react-router-dom"
import { useEffect } from "react"
import useDetail from "../hooks/useDetail"
import { useState } from "react"
import { setLoading } from "../store/actionCreator"
import { useDispatch, useSelector } from "react-redux"
import { addTransaction } from '../store/actions/index'

function Payment() {
    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const newTransaction = useSelector(state => state.transactionReducer.transaction)
    const detail = useDetail(`http://18.207.141.48:3000/keeper/${id}`)
    const [formData, setFormData] = useState({
        deceasedName: '',
        diedDate: '',
        bornDate: '',
        burialDate: '',
        religion: '',
        fatherName: '',
        spaceLocation: '',
        price: '',
        facility: [],
        cemetaryName: '',
        cemetaryId: id,
        payerName: '',
        phoneNumber: '',
        email: ''
    })
    // const isLoading = useSelector(state => state.cemeteryReducer.isLoading)
    // console.log(formData)
    // console.log(detail);
    useEffect(() => {
        if (detail) {
            setFormData({
                deceasedName: '',
                diedDate: '',
                bornDate: '',
                burialDate: '',
                religion: '',
                fatherName: '',
                spaceLocation: '',
                price: detail.price,
                facility: [],
                cemetaryName: detail.cemetaryName,
                cemetaryId: id,
                payerName: '',
                phoneNumber: '',
                email: ''
            })
        }
    }, [detail])

    useEffect(() => {
        if(newTransaction._id){
            history.push(`/xendit/${newTransaction._id}`)
        } else {
            return null
        }
    }, [newTransaction])

    function submitBooking(event){
        event.preventDefault()
        // console.log('masuk');
        dispatch(addTransaction(formData))
        console.log(newTransaction._id, '<<< di payment page')
    }

    if (detail.facilities) {
        return (
            <>
                <NavBar />
                <div class="leading-loose">
                    <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto my-40" onSubmit={submitBooking}>
                        <p class="text-gray-800 font-large text-center text-4xl mb-16">{detail.cemetaryName}</p>
                        <p class="my-4 text-gray-800 font-medium">Data Mendiang</p>
                        <div class="my-5">
                            <label class="block text-sm text-gray-00" for="cus_name">Nama Mendiang</label>
                            <input
                                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                type="text"
                                placeholder="Name Mendiang"
                                aria-label="Name"
                                onChange={(e) => setFormData({ ...formData, deceasedName: e.target.value })}
                            />
                        </div>
                        <div class="my-5">
                            <label class=" block text-sm text-gray-600" for="cus_email">Tanggal Meninggal</label>
                            <input
                                class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="date"
                                aria-label="Email"
                                onChange={(e) => setFormData({ ...formData, diedDate: e.target.value })}
                            />
                        </div>
                        <div class="my-5">
                            <label class=" block text-sm text-gray-600" for="cus_email">Tanggal Lahir</label>
                            <input
                                class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="date"
                                aria-label="Email"
                                onChange={(e) => setFormData({ ...formData, bornDate: e.target.value })}
                            />
                        </div>
                        <div class="my-5">
                            <label class=" block text-sm text-gray-600" for="cus_email">Tanggal Penguburan</label>
                            <input
                                class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="date"
                                aria-label="Email"
                                onChange={(e) => setFormData({ ...formData, burialDate: e.target.value })}
                            />
                        </div>
                        <div class="my-5">
                            <label class="block text-sm text-gray-600" for="cus_email">Nama Orang Tua Mendiang</label>
                            <input
                                class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="text"
                                placeholder="Nama Orang Tua Mendiang"
                                aria-label="Email"
                                onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                            />
                        </div>
                        <div class="my-5">
                            <label class="block text-sm text-gray-600" for="cus_email">Agama</label>
                            <input
                                class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="text"
                                placeholder="Agama"
                                aria-label="Email"
                                onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
                            />

                        </div>
                        <div class="my-5">
                            <label class="block text-sm text-gray-600" for="cus_email">Fasilitas</label>
                            <div className="lg:flex items-center container my-auto">
                                {
                                    detail.facilities.map((facility, index) => {
                                        return (
                                            <>
                                                <input
                                                    class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                                    type="checkbox"
                                                    id={facility}
                                                    name={facility}
                                                    value={facility}
                                                    aria-label="Email"
                                                    onChange={(e) => e.target.checked ?
                                                        setFormData({ ...formData, facility: [...formData.facility, e.target.value] }) : (
                                                            setFormData({ ...formData, facility: [...formData.facility.filter(element => element !== e.target.value)] })
                                                        )}
                                                />
                                                <label for={facility} for="cus_email">{facility}</label>
                                            </>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <p class="my-4 text-gray-800 font-medium">Data Pemesan</p>
                        <div class="my-5">
                            <label class=" block text-sm text-gray-600" for="cus_email">Nama Pemesan</label>
                            <input
                                class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="text"
                                placeholder="Nama"
                                aria-label="Email"
                                onChange={(e) => setFormData({ ...formData, payerName: e.target.value })}
                            />
                        </div>
                        <div class="my-5">
                            <label class=" block text-sm text-gray-600" for="cus_email">Nomor Telepon Pemesan</label>
                            <input
                                class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="Number"
                                placeholder="Nomor Telepon"
                                aria-label="Email"
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                        </div>
                        <div class="my-5">
                            <label class=" block text-sm text-gray-600" for="cus_email">Email Pemesan</label>
                            <input
                                class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="email"
                                placeholder="email@mail.com"
                                aria-label="Email"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div class="my-8 mx-48">
                            <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Bayar</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </>
        )
    } else {
        return <p>Loading...</p>
    }


}

export default Payment