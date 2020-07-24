import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, NavbarBrand } from "react-bulma-components";

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
    
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              alt='Logo'
              width='112'
              height='28'
            />
          </a>

          <a
            role='button'
            className={'navbar-burger burger'}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <a href='/' className='navbar-item'>
                Home
            </a>
              <a href='/' className='navbar-item'>
                Documentation
            </a>
            </div>
          </div>
        </div>
      </nav>

      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App;
