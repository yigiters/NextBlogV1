import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Contact({ mail, address, phone, hostname, desc }) {
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <Head>
                <title>Bize Ulaşın | {hostname[0].value}</title>
                <meta name="description" content={desc[0].value} />
                <link rel="icon" href="icon.svg" />
            </Head>
            <section className="px-12 py-12 min-h-screen">
                <div className="grid max-w-6xl grid-cols-1 px-6 py-12 mx-auto lg:px-8 md:grid-cols-2 md:divide-x rounded-lg text-white bg-gray-900">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold my-6">Bize Ulaşın</h1>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>{address[0].value}</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>{phone[0].value}</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>{mail[0].value}</span>
                            </p>
                        </div>
                    </div>
                    <form method='POST' action='./api/contact' noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">İsim Soyisim</span>
                            <input type="text" name='name' className="block text-black w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">E-Posta</span>
                            <input type="email" name='mail' className="block text-black w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Mesajınız</span>
                            <textarea rows="3" name='text' className="block text-black w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                        </label>
                        <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-gray-200 hover:bg-gray-300 text-black">Gönder</button>
                    </form>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_HOST}/api/meta?id=4`)
    const res1 = await fetch(`${process.env.API_HOST}/api/meta?id=5`)
    const res2 = await fetch(`${process.env.API_HOST}/api/meta?id=6`)
    const res3 = await fetch(`${process.env.API_HOST}/api/meta?id=7`)
    const res4 = await fetch(`${process.env.API_HOST}/api/meta?id=8`)
    const mail = await res.json()
    const address = await res1.json()
    const phone = await res2.json()
    const hostname = await res3.json()
    const desc = await res4.json()

    return {
        props: {
            mail,
            address,
            phone,
            hostname,
            desc
        }
    }
}