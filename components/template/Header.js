import { useRouter } from 'next/router';
import Image from 'next/image'

export default function Header({categories}) {
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
              {
                categories && categories.length && categories.map(category => (
                  <li className="nav-item" key={category.id}>
                    <a 
                      className={router.asPath.includes(`category/${category.name}`) ? 'nav-link active': 'nav-link'} 
                      href={`/category/${category.slug}`}>{category.name}</a>
                  </li>
                ))
              }
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}