import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function Post({ data, category, hostname, desc }) {
    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <Head>
                <title> {data.title} | {hostname[0].value} </title>
                <meta name="description" content={desc[0].value} />
                <link rel="icon" href="/icon.svg" />
            </Head>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={data.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 rounded-lg opacity-96 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-blue-300 text-black">
                        <div className="space-y-2">
                            <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{data.title}</h1>
                            <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 ml-4 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{category[0].name}</span>
                            <p className="text-xs dark:text-gray-400">
                                <label className="text-xs mx-2">{data.writer}</label>
                                <span className="text-xs dark:text-gray-400">{data.createdAt.replace(/T/, ' ').replace(/\..+/, '')}</span>
                            </p>
                        </div>
                        <div className="dark:text-gray-100 text-center">
                            <h2>{data.subtitle}</h2><br />
                            <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.API_HOST}/api/post?link=${context.params.link}`)
    const data = await res.json()
    const res1 = await fetch(`${process.env.API_HOST}/api/category/name?id=${data.category}`)
    const res2 = await fetch(`${process.env.API_HOST}/api/meta?id=7`)
    const res3 = await fetch(`${process.env.API_HOST}/api/meta?id=8`)
    const category = await res1.json()
    const hostname = await res2.json()
    const desc = await res3.json()

    return {
        props: {
            data,
            category,
            hostname,
            desc
        }
    }
}