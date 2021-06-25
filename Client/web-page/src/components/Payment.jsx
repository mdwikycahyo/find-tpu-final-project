import NavBar from "./NavBar"
import Footer from "./Footer"

function Payment() {
    return (
        <>
            <NavBar />
            <div class="leading-loose">
                <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto my-40">
                    <p class="text-gray-800 font-large text-center">Data Pelanggan</p>
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
                    <p class="my-4 text-gray-800 font-medium">Informasi Pembayaran</p>
                    <div class="">
                        <label class="block text-sm text-gray-600" for="cus_name">Nomor Kartu Kredit</label>
                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="5264 xxxx xxxx xxxx" aria-label="Name" />
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

export default Payment