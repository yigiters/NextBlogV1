import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'


export default function Categories({ categories }) {
    const router = useRouter()

    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 min-h-screen">

                {categories.map((category) => (
                    <div key={category.id} className="dark:bg-gray-800 dark:text-gray-100 px-6">
                        <div className="container flex flex-col mx-auto lg:flex-row bg-gray-900 text-white my-10 rounded-lg">
                            <div className="w-fit lg:w-1/3 mx-auto my-8">
                                <img className='w-72 h-56 lg:ml-5' src={category.image} />
                            </div>
                            <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-purple-400">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <h2 className="text-3xl font-semibold leading-none mb-6">{category.name}</h2>
                                <button onClick={() => router.push(`/category/${category.id}`)} className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-gray-700 hover:bg-gray-500 duration-200">Görüntüle</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_HOST}/api/categories`)
    const categories = await res.json()

    return {
        props: {
            categories
        }
    }
}