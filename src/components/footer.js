import React from 'react'
import { Link } from 'gatsby'

import footerStyle from './footer.module.css'

const Footer = () => (
  <div className={footerStyle.footer}>
    <h2>
      <Link to="/">This Is The Footer</Link>
    </h2>
    <ul className={footerStyle.footerNav}>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
    </ul>
  </div>
)

export default Footer
