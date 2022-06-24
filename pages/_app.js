import Head from 'next/head'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'
import Search from "../components/Search";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
      </Head>
      <Header />
      <div className='bg-light'>
        <main className="p-lg-5 py-5">
          <div className="container overflow-hidden p-0">
            <div className="row gx-lg-5 gy-5">
              <div className="col-12 col-lg-8">
                <Component {...pageProps} />
              </div>
              <div className="col-12 col-lg-4">
                <Search {...pageProps} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </>
  )
    
}

export default MyApp
