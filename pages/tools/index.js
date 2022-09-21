import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

export default function ToolsHome({ hostname, desc }) {
    return (
        <div className='bg-gray-200'>
            <Head>
                <title>Araçlar | {hostname[0].value}</title>
                <meta name="description" content={desc[0].value} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>

            <div className='flex justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center mx-6 my-12 min-h-screen">

                    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-white">
                        <img src="./images/bolus.webp" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide text-center">Bolus Hesaplama Aracı</h2>
                                <p className="dark:text-gray-100 text-center">Öğünler için bolus insülin dozu hesaplama aracı.</p>
                            </div>
                                <Link href={"tools/bolus"}>
                                <a className="flex items-center bg-white hover:bg-blue-200 duration-200 text-black justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Git</a>
                                </Link>
                        </div>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_HOST}/api/meta?id=7`)
    const res1 = await fetch(`${process.env.API_HOST}/api/meta?id=8`)

    const hostname = await res.json()
    const desc = await res1.json()

    return {
        props: {
            hostname,
            desc
        }
    }
}