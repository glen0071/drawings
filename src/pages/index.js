import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import moment from 'moment'

import "../utils/normalize.css"
import "../utils/css/screen.css"

const DaysElapsed = () => {
  return (moment("20200206", "YYYYMMDD").fromNow('days').match(/\d+/)[0])
}

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0
  const today = 10

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <div style={indexStatsDiv}>
            <span className="index-stats">Days: <DaysElapsed />+</span>
            <span className="index-stats">Hours: 8+</span>
            <span className="index-stats">Drawings: 29+</span>
          </div>
        </header>
      )}

      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            minutes
            total_minutes_to_date
            drawings_to_date
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)

const indexStatsDiv = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}
