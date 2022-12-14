import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import Head from 'next/head'


export default function Category({ data, category_name, desc }) {
    const router = useRouter()
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <Head>
                <title>Kategoriler | {category_name[0].name} Kategorisi </title>
                <meta name="description" content={desc[0].value} />
                <link rel="icon" href="/icon.svg" />
            </Head>
            <section className='mx-1 my-12 flex place-content-center'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

                    {data.map((post) => (
                        <div key={post.id} className="max-w-xs rounded-md shadow-md bg-gray-900 text-white">
                            <img src={post.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8 text-center">
                                <div className="space-y-2 h-72">
                                    <h2 className="text-3xl font-semibold tracking-wide">{post.title}</h2>
                                    <p className="dark:text-gray-100">{post.subtitle}</p>
                                </div>
                                <button onClick={() => router.push(`/posts/${post.link}`)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-400 hover:bg-blue-300 duration-200">Okumaya Devam</button>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.API_HOST}/api/category?id=${context.params.id}`)
    const res1 = await fetch(`${process.env.API_HOST}/api/category/name?id=${context.params.id}`)
    const res2 = await fetch(`${process.env.API_HOST}/api/meta?id=8`)
    const data = await res.json()
    const category_name = await res1.json()
    const desc = await res2.json()
    return {
        props: {
            data,
            category_name,
            desc
        }
    }
}