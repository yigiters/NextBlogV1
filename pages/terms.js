import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function terms({ terms }) {
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
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
    const data = await res.json()
    const terms = data[0]
    return {
        props: {
            terms
        }
    }
}