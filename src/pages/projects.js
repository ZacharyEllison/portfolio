import React from "react"
import { Link, graphql } from "gatsby"
import { Segment, Header } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
          <Segment>
            <Header as='h1'
              style={{
                marginBottom: rhythm(1 / 4),
                textAlign: "center",
              }}
            >
            Projects
            </Header>
          </Segment>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Segment>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      {title}
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      style={{color: "black"}}
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                </Link>
              </Segment>
            )
          })}
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
