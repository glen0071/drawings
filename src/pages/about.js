import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="about-header">
            About
          </h2>
          <p>
            I am drawing every day for a year and sharing some of my work along
            the way.
          </p>
          <p>
            This is not about exhibiting artisitic talent. As is clear from my
            inagural self-portrait, I did not start this project with much
            talent to speak of. This is more like performance art so others can
            see, in real time, what dedicated practice can produce.
          </p>
          <p>
            With every drawing I present here, I'll also share meticulous
            records of the time and attention I invest in developing this
            new skill. Together we can watch how fast a new skill can grow.
          </p>
          <p>
            I see this as an experiment specifically in what it takes to learn how
            to draw, and broadly to learn about the human soul's capacity to develop
            spiritual capacities like beauty, meditation, and artistic talents.
          </p>
          <p>
            I hope you'll reach out or at least come along for the ride.
          </p>
          <h3 id="faqs-header">
            FAQs
          </h3>
          <p>
            The name <b>"Ruz by Ruz"</b> (<em>"day by day"</em> in Persian, روز به روز) comes is
            drawn from a quote by an 18th Century spiritual leader named 'Abdu'l-Bahá.
            Legend has it that when 'Abdu'l-Bahá's followers asked him how one
            could achieve feats of great spiritual significance, He would respond
            simply, "cam cam, ruz bih ruz" -- "little by little, day by day".
          </p>
          <h3 id="contact-header">
            Contat
          </h3>
          <div style={socialDiv}>
            <a style={socialLinks} href="https://twitter.com/eddiegdotme/">twitter @eddiegdotme</a>
            <a style={socialLinks} href="https://instagram.com/eddiegdotme/">ig @eddiegdotme</a>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

const socialDiv = {
  display: 'flex',
  justifyContent: 'space-around'
}

const socialLinks = {
}
