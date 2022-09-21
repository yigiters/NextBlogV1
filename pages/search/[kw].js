import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from "next/link"

export default function searchs({ searchs }) {
    return (
        <div>
            <Navbar></Navbar>

            <section className="min-h-screen">

                <h1 className="text-center mx-12 my-12 text-4xl">Arama Sonuçları</h1>

                {searchs.map((search) => (
                    <div key={search.id} className="bg-gray-800 text-gray-100 mx-6 md:mx-12 my-12">
                        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                            <div className="flex items-center justify-between">
                                <span className="text-sm dark:text-gray-400">{search.createdAt.replace(/T/, ' ').replace(/\..+/, '')}</span>
                            </div>
                            <div className="mt-3">
                                <h1 className="text-2xl font-bold">{search.title}</h1>
                                <p className="mt-2">{search.subtitle}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <Link href={`/posts/${search.link}`}>
                                    <a className="py-2.5 px-5 mr-2 mt-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-blue-200 hover:text-blue-700 duration-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Görüntüle</a>
                                </Link>
                                <div>
                                    <span className=" dark:text-gray-400">{search.writer}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </section>

            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.API_HOST}/api/search?kw=${context.params.kw}`)
    const searchs = await res.json()

    return {
        props: {
            searchs
        }
    }
}