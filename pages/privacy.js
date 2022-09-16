import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function privacy({ privacy }) {
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <section className="mx-12 my-12 min-h-screen">
                <div className="mx-12 my-12">
                    <h1 className="text-4xl text-center font-extrabold">Gizlilik</h1>
                    <div dangerouslySetInnerHTML={{ __html: privacy.value }} className="mt-6 text-center"></div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_HOST}/api/meta?id=3`)
    const data = await res.json()
    const privacy = data[0]
    return {
        props: {
            privacy
        }
    }
}