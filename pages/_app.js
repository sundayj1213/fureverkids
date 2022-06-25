import Header from '../components/template/Header'
import Footer from '../components/template/Footer'
import Search from "../components/Search";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header {...pageProps} />
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
      <script
        async
        dangerouslySetInnerHTML={{__html: "document.querySelector(`svg[data-bs-target='#navbarNavDropdown']`).addEventListener('click', () => {document.querySelector('#navbarNavDropdown').classList.toggle('show')})"}}>
      </script>
    </>
  )
    
}

export default MyApp
