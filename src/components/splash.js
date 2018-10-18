import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import splashStyles from './splash.module.css'

import Button from './button'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        imageTest: file(relativePath: { eq: "etsy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        imageTestTwo: file(relativePath: { eq: "threadless.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        imageTestThree: file(relativePath: { eq: "artofwear.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        imageTestFour: file(relativePath: { eq: "artsmarket.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <main>
          <Img fluid={data.imageTest.childImageSharp.fluid} />
          <Button>
            <h2>Shop Here</h2>
          </Button>
        </main>
        <section>
          <div className={splashStyles.image}>
            <Img fluid={data.imageTestTwo.childImageSharp.fluid} />
            <Button>
              <h2>Shop Here</h2>
            </Button>
          </div>
          <div className={splashStyles.image}>
            <Img fluid={data.imageTestThree.childImageSharp.fluid} />
            <Button>
              <h2>Shop Here</h2>
            </Button>
          </div>
          <div className={splashStyles.image}>
            <Img fluid={data.imageTestFour.childImageSharp.fluid} />
            <Button>
              <h2>Shop Here</h2>
            </Button>
          </div>
        </section>
      </div>
    )}
  />
)
