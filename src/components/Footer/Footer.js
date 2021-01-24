/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import "./footer.css"

const Footer = () => (
  <div style={{ width: "100vw" }} className="bg-white w-full absolute bottom-0">
    <footer
      style={{ width: "100vw", fontFamily: "Poppins" }}
      className="z-40 h-0 bottom-0 absolute bg-white text-gray-800 text-sm"
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading bg-white " className="sr-only">
        Footer
      </h2>
      <div className="bg-white sm:px-6 lg:py-8 right-0 w-full">
        <div className="xl:grid xl:grid-cols-3 w-full">
          <div className=" bg-white grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="mt-12 py-8 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4 font-light">
                <Link
                  to="/terms-of-use"
                  sx={{
                    color: "accent",
                    fontSize: 16,
                  }}
                >
                  Terms of Use
                </Link>
                <hr />
                <Link
                  to="/security-statement"
                  sx={{
                    color: "accent",
                    fontSize: 16,
                  }}
                >
                  Security Statement
                </Link>
                <hr />
                <Link
                  to="/privacy-notice"
                  sx={{
                    color: "accent",
                    fontSize: 16,
                  }}
                >
                  Privacy Notice
                </Link>
              </ul>
            </div>
            <div className="mt-12 mr-4 py-8  md:mt-0">
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4 font-light">
                <Link
                  to="/terms-of-use"
                  sx={{
                    color: "accent",
                    fontSize: 16,
                  }}
                >
                  Terms of Use
                </Link>
                <hr />
                <Link
                  to="/security-statement"
                  sx={{
                    color: "accent",
                    fontSize: 16,
                  }}
                >
                  Security Statement
                </Link>
                <hr />
                <Link
                  to="/privacy-notice"
                  sx={{
                    color: "accent",
                    fontSize: 16,
                  }}
                >
                  Privacy Notice
                </Link>
              </ul>
            </div>
          </div>
          <div className="mt-12 py-8  md:mt-0">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4 font-light">
              <Link
                to="/terms-of-use"
                sx={{
                  color: "accent",
                  fontSize: 16,
                }}
              >
                Terms of Use
              </Link>
              <hr />
              <Link
                to="/security-statement"
                sx={{
                  color: "accent",
                  fontSize: 16,
                }}
              >
                Security Statement
              </Link>
              <hr />
              <Link
                to="/privacy-notice"
                sx={{
                  color: "accent",
                  fontSize: 16,
                }}
              >
                Privacy Notice
              </Link>
            </ul>
          </div>

          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Join Our Discord Channel
            </h3>
            <p className="mt-4 text-base text-gray-500">
              The latest news, articles, and resources, sent to your inbox
              weekly.
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
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-800"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0 shadow-none">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-sm font-sm text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="mt-8 text-base text-gray-100 md:mt-0 md:order-1">
        &copy; 2020-2021 Hakkei & Co LLC
      </p>
    </footer>
  </div>
)

export default Footer
