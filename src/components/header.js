import React from "react"
import { Link } from "gatsby"

const Header = props => {
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <header className="site-head">
      <div className="site-head-container">
        <a
          className="nav-burger"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div
            className="hamburger hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a>
        <nav id="swup" className="site-head-left">
          <ul className="nav" role="menu">
            <li className="nav-home nav-current" role="menuitem">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav-about" role="menuitem">
              <Link to={`/about`}>About</Link>
            </li>
            <li className="nav-tags" role="menuitem">
              <Link to={`/tags`}>Tags</Link>
            </li>
          </ul>
        </nav>
        <div className="site-head-center">
          <Link className="site-head-logo" to={`/`}>
            RUZ <span className="bih">bih</span> RUZ
          </Link>
        </div>
        <div className="site-head-right">
          <div className="social-links">
            <a
              href="https://twitter.com/eddiegdotme"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/eddiegdotme/"
              title="Intagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
