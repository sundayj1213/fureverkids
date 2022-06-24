import { useRouter } from 'next/router';
import Image from 'next/image'

export default function Header() {
  const router = useRouter();

  return (
    <header className='bg-white'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image src="/logo.png" width={60} height={60} />
          </a>
          <svg className="navbar-toggler p-0 border-0" width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <path d="M26.25 22.5H3.75V20H26.25V22.5ZM26.25 16.25H3.75V13.75H26.25V16.25ZM26.25 10H3.75V7.5H26.25V10Z" fill="#333333"/>
          </svg>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav w-100 justify-content-evenly">
              <li className="nav-item">
                <a 
                  className={!router.asPath.includes('category') ? 'nav-link active': 'nav-link'} 
                  href="/">居家</a>
              </li>
              <li className="nav-item">
                <a 
                  className={router.asPath.includes('category=35') ? 'nav-link active': 'nav-link'} 
                  href="/?category=35">文化</a>
              </li>
              <li className="nav-item">
                <a 
                  className={router.asPath.includes('category=40') ? 'nav-link active': 'nav-link'} 
                  href="/?category=40">情感</a>
              </li>
              <li className="nav-item">
                <a 
                  className={router.asPath.includes('category=30') ? 'nav-link active': 'nav-link'} 
                  href="/?category=30">娛樂</a>
              </li>
              <li className="nav-item">
                <a 
                  className={router.asPath.includes('category=45') ? 'nav-link active': 'nav-link'} 
                  href="/?category=45">商業</a>
              </li>
              <li className="nav-item">
                <a 
                  className={router.asPath.includes('category=32') ? 'nav-link active': 'nav-link'} 
                  href="/?category=32">動漫</a>
              </li>
              <li className="nav-item">
                <a 
                  className={router.asPath.includes('category=43') ? 'nav-link active': 'nav-link'} 
                  href="/?category=43">健身</a>
              </li>
              <li className="nav-item">
                <a 
                  className={router.asPath.includes('category=26') ? 'nav-link active': 'nav-link'} 
                  href="/?category=26">健康</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}