import React from "react"
import { graphql } from "gatsby"

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data)
  // const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {/* <h1>{frontmatter.title}</h1> */}
        {/* <h2>{frontmatter.date}</h2> */}
        <div className="blog-post-content" />
      </div>
    </div>
  )
  // dangerouslySetInnerHTML={{ __html: html }}
}


export default Template
