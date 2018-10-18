import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import headerStyle from './header.module.css'

import '../images/logo-splat.png'

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          background: 'rebeccapurple',
        }}
      >
        <div className={headerStyle.header}>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <ul className={headerStyle.headerNav}>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
        {console.log(data)}
      </div>
    )}
  />
)

export default Header
