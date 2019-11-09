/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Heading } from "@theme-ui/components"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../layouts"

const postStyle = {
  h1: {
    paddingBottom: theme => theme.space[3],
  },
  h2: {
    padding: theme => `${theme.space[3]}px 0 ${theme.space[2]}px`,
  },
  "ul, ol": {
    paddingLeft: theme => theme.space[4],
  },
  img: {
    width: "100%",
  },
  lineHeight: "1.8rem",
  p: {
    paddingBottom: "1.1rem",
  },
  paddingTop: [3, 3, 4, 4],
}

export default ({
  data: {
    mdx: {
      body,
      frontmatter: { title, banner },
      fields: { year },
    },
  },
}) => {
  return (
    <Layout>
      <Link to={`/blog/${year}`}>&larr; Go Back</Link>

      {/* This "link" is for styling gists. */}
      <link
        rel="stylesheet"
        href="https://github.githubassets.com/assets/gist-embed-123720f37c57ce9a8f29de081c38ed61.css"
      ></link>
      <Box sx={postStyle}>
        <Heading as="h1">{title}</Heading>
        {banner && banner.childImageSharp && banner.childImageSharp.fluid && (
          <Img fluid={banner.childImageSharp.fluid} />
        )}
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        banner {
          ...bannerImage640
        }
      }
      fields {
        year
      }
    }
  }
`
