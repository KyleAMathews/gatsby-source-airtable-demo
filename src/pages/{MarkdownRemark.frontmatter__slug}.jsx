import * as React from "react"
import { graphql } from "gatsby"

export default function Component(props) {
  return (
    <div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </div>
  )
}

export const query = graphql`
  query markdownQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`
