import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function carb() {
    return (

        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <section className="p-6 dark:bg-gray-800 dark:text-gray-50 bg-gray-800 text-white mx-2 my-2 md:mx-12 md:my-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">İnsülin Doz Hesaplama Aracı</p>
                            <p className="text-xs">Kullanılan toplam günlük insülin dozunu, öğünün karbonhidrat içeriğini girin ve öğünün karbonhidrat içeriğini karşılamak için gereken insülin miktarını hesaplamak için 'Hesapla' düğmesine basın.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Günlük Toplam İnsülin Dozu</label>
                                <input id="tdd" type="number" className="w-full h-12 text-black text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Öğün Karbonhidrat İçeriği</label>
                                <input id="ccm" type="number" className="w-full h-12 text-black text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Ölçülen Kan Şekeri</label>
                                <input id="cbg" type="number" className="w-full h-12 text-black text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Hedef Kan Şekeri</label>
                                <input id="tbg" type="number" defaultValue={"90"} className="w-full h-12 text-black text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                            </div>
                            <div className='col-span-full mx-auto my-6'>
                                <button id='submit' className='bg-yellow-300 font-bold hover:bg-orange-200 duration-300 text-black rounded-lg w-28 h-12 mx-1 my-1'>Hesapla</button>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Karbonhidrat Oranı</label>
                                <input id="result_cir" type="text" className="w-full h-12 text-black text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" readOnly />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">İnsülin Duyarlılık Faktörü</label>
                                <input id="result_isf" type="text" className="w-full h-12 text-black text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" readOnly />
                            </div>
                            <div className='col-span-full'>
                                <p id='info'></p>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Öğün İçin Gerekli İnsülin</label>
                                <b><input id="result_ri" type="text" className="w-full h-12 text-red-500 text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" readOnly /></b>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Düzeltme Dozu</label>
                                <input id="result_cd" type="text" className="w-full h-12 text-black text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" readOnly />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Toplam İnsülin Dozu</label>
                                <input id="result_tid" type="text" className="w-full h-12 text-black text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" readOnly />
                            </div>
                        </div>
                    </fieldset>
                </section>
            </div>
            <Footer></Footer>
            <script src='../assets/calculate.js'></script>
        </div>
    )
}