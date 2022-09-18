import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function terms({ terms, hostname, desc }) {
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <Head>
                <title>Kullanım Şartları | {hostname[0].value}</title>
                <meta name="description" content={desc[0].value} />
                <link rel="icon" href="icon.svg" />
            </Head>
            <section className="mx-12 my-12 min-h-screen">
                <div className="mx-12 my-12">
                    <h1 className="text-4xl text-center font-extrabold">Kullanım Şartları</h1>
                    <div dangerouslySetInnerHTML={{ __html: terms.value }} className="mt-6 text-center"></div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_HOST}/api/meta?id=2`)
    const res1 = await fetch(`${process.env.API_HOST}/api/meta?id=7`)
    const res2 = await fetch(`${process.env.API_HOST}/api/meta?id=8`)
    const data = await res.json()
    const terms = data[0]
    const hostname = await res1.json()
    const desc = await res2.json()
    return {
        props: {
            terms,
            hostname,
            desc
        }
    }
}