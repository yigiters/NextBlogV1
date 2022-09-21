import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRouter } from 'next/router'
import Head from "next/head";

export default function Home({ posts, page, highlight, total, hostname, desc }) {
    const router = useRouter()

    const total_page = Math.ceil(total.length / 3)
    return (
        <div className="bg-gray-200">
            <Head>
                <title>Anasayfa | {hostname[0].value}</title>
                <meta name="description" content={desc[0].value} />
                <link rel="icon" href="icon.svg" />
            </Head>
            <Navbar></Navbar>
            
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href={`posts/${highlight[0].link}`} className="hidden md:block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 text-gray-300">
                        <img src={highlight[0].image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl">{highlight[0].title}</h3>
                            <span className="text-xs dark:text-gray-400 mx-2">{highlight[0].writer}</span>
                            <span className="text-xs dark:text-gray-400">{highlight[0].createdAt.replace(/T/, ' ').replace(/\..+/, '')}</span>
                            
                            <div dangerouslySetInnerHTML={{ __html: highlight[0].subtitle }}></div>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" id="posts">
                        {posts.map((post) => (
                            <a key={post.id} rel="noopener noreferrer" href={`/posts/${post.link}`} className="w-full mx-auto group bg-gray-900 text-gray-300">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={post.image} loading={"lazy"} />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold">{post.title}</h3>
                                    <span className="text-xs dark:text-gray-400 mx-2">{post.writer}</span>
                                    <span className="text-xs dark:text-gray-400">{post.createdAt.replace(/T/, ' ').replace(/\..+/, '')}</span>
                                    <div dangerouslySetInnerHTML={{ __html: post.subtitle }}></div>
                                </div>
                            </a>
                        ))}
                    </div>



                    <div className="flex justify-center space-x-1 dark:text-gray-100 mb-12">
                        <button onClick={() => router.push(`/?page=${page - 1}#posts`)} disabled={page <= 1} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <button onClick={() => router.push(`/?page=${page + 1}#posts`)} disabled={page == total_page} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="text-sm text-gray-700 dark:text-gray-400">
                            <span className="font-semibold text-gray-900 dark:text-white">{page}</span> / <span className="font-semibold text-gray-900 dark:text-white">{total_page}</span>
                        </span>
                    </div>

                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps({ query: { page = 1 } }) {
    const start = +page === 1 ? 0 : (+page - 1) * 3
    const res = await fetch(`${process.env.API_HOST}/api/posts?_start=${start}&_limit=3`)
    const res1 = await fetch(`${process.env.API_HOST}/api/highlight`)
    const res2 = await fetch(`${process.env.API_HOST}/api/posts`)
    const res3 = await fetch(`${process.env.API_HOST}/api/meta?id=7`)
    const res4 = await fetch(`${process.env.API_HOST}/api/meta?id=8`)
    const posts = await res.json()
    const highlight = await res1.json()
    const total = await res2.json()
    const hostname = await res3.json()
    const desc = await res4.json()
    return {
        props: {
            posts,
            page: +page,
            highlight,
            total,
            hostname,
            desc
        }
    }
}