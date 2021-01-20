import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO"

function AcceptableUse(props) {
    const data = props.data.allMarkdownRemark.edges[0];
    return (
        <>
            <SEO title="Terms of Use" />
            <div className="legal__body">
                <div className="legal__header">
                    {data ? data.node.frontmatter.title : null}
                </div>
                <div className="legal__date">
                    {data ? data.node.frontmatter.date : null}
                </div>
                <div className="legal_info">
                    {data ? data.node.rawMarkdownBody : null}
                </div>
            </div>
        </>
    )
}

export default AcceptableUse

export const query = graphql`
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(acceptable)/"}}) {
        edges {
          node {
            frontmatter {
              date
              title
            }
            rawMarkdownBody
          }
        }
      }
}
`