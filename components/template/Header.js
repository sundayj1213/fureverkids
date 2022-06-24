import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-white'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image src="/logo.png" width={60} height={60} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav w-100 justify-content-evenly">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Physical Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Car</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Invest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Finance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Military</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Technology</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}