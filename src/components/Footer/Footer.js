/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./footer.css"

const Footer = () => {
  const pageData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const cleanData = {};
  pageData.allMarkdownRemark.nodes.forEach((page) => {
    const category = page.frontmatter.category;
    const title = page.frontmatter.title;
    const path = page.fields.slug;
    if (category === "DUMMY_PAGE") {
      return;
    }
    if (!cleanData.hasOwnProperty(category)) {
      cleanData[category] = []
    }

    cleanData[category].push({ "path": path, "title": title })
  })

  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className={`grid grid-cols-${Object.keys(cleanData).length} gap-8 xl:col-span-1`}>
            {Object.keys(cleanData).map((category) => {
              return (
                <div key={category}>
                  <div className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {category}
                  </div>
                  {cleanData[category].map((page) => {
                    return (
                      <div key={page.path}>
                        <Link
                          to={`${page.path}`}
                          sx={{
                            color: "accent",
                            fontSize: 16,
                          }}
                        >
                          {page.title}
                        </Link>
                        <hr />
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-500">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
              </button>
              </div>
            </form>
          </div>
        </div>
        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2020-2021 Hakkei & Co LLC
      </p>
      </div>
    </footer>
  )
}

export default Footer
