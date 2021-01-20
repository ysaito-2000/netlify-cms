import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO"

function AcceptableUse(props) {
    return (
        <>
            <SEO title="Terms of Use" />
            <div className="legal__body">
                <div className="legal__header">
                    {props.data.allMarkdownRemark.edges[0].node.frontmatter.title}
                </div>
                <div className="legal__date">
                    {props.data.allMarkdownRemark.edges[0].node.frontmatter.date}
                </div>
                <div className="legal_info">
                    {props.data.allMarkdownRemark.edges[0].node.rawMarkdownBody}
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