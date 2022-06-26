import { useRouter } from 'next/router';
import Image from 'next/image'

export default function Header({categories}) {
  const router = useRouter();

  return (
    <header className='bg-white'>
      <div className="container p-2">
        <div className="menu d-flex align-items-center">
          <a href="/">
            <Image src="/logo.png" width={60} height={60} />
          </a>
          {categories && categories.length ? <div className="container bg-white" id="navbarNavDropdown">
            <ul className="col-12 navbar-nav menu-items bg-white border px-2">
              {
                categories.map(category => (
                  <li className="nav-item" key={category.id}>
                    <a 
                      className={router.asPath.includes(`/${category.slug}`) ? 'nav-link active': 'nav-link'} 
                      href={`/${category.slug}`}>{category.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>: <></>}
          <svg className="navbar-toggler p-0 border-0" width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <path d="M26.25 22.5H3.75V20H26.25V22.5ZM26.25 16.25H3.75V13.75H26.25V16.25ZM26.25 10H3.75V7.5H26.25V10Z" fill="#333333"/>
          </svg>   
        </div>
      </div>
    </header>
  )
}