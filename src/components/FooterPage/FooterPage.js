import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./FooterPage.css"

function FooterPage(props) {
    const rawData = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  date
                  title
                }
                html
                fileAbsolutePath
              }
            }
          }
    }
    `)
    const filteredData = rawData.allMarkdownRemark.edges.filter((node) => {
        const path = node.node.fileAbsolutePath.split("/")
        if (path.includes(props.file)) {
            return true;
        }
        return false;
    })

    if (filteredData.length === 0) {
        return (
            <div className="legal__body">
                Information for this page does not exist yet!
            </div>
        )
    }

    return (
        <>
            <div className="legal__body">
                <div className="legal__header">
                    {filteredData[0].node.frontmatter.title}
                </div>
                <div className="legal__date">
                    {filteredData[0].node.frontmatter.date.split("T")[0]}
                </div>
                <div className="legal__info" dangerouslySetInnerHTML={{
                    __html: filteredData[0].node.html
                }}>
                </div>
            </div>
        </>
    )
}

export default FooterPage