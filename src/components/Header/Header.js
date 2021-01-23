/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line no-unused-vars
import React from "react"
// import { Link } from "gatsby"
// import NavButton from "../UI/NavButton/NavButton"
import NavItem from "./NavItem"
import "./Header.css"
import { Link } from "gatsby"
// import { Auth } from "aws-amplify"
const Header = ({ path }) => {
  // const [user, setUser] = useState(null)
  // useEffect(async () => {
  //   const user = await Auth.currentAuthenticatedUser()
  //   setUser(user)
  // }, [])
  // const logOut = async () => {
  //   await Auth.signOut()
  //   setUser(null)
  // }
  // const isLogin = path === "/login"

  return (
    <>
      <nav className="bg-white shadow">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img
                    className="block  h-8 w-auto"
                    src="https://s3-us-west-1.amazonaws.com/hakkei.cloud/usbnex-logo.svg"
                    alt="Workflow"
                  />
                </Link>
              </div>
            </div>
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  <img
                    width="20"
                    src="https://s3-us-west-1.amazonaws.com/hakkei.cloud/usbnex-logo.svg"
                    alt="How It Works 2"
                  />

                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-shrink-0 flex items-center"></div>
                <div className="hidden md:ml-6 md:flex md:space-x-8 m-auto">
                  <NavItem title="Explore" path="/missions" />

                  <NavItem title="How it Works" path="/how-it-works" />

                  <NavItem title="Ryval Keyboard" path="/ryval" />
                  <NavItem title="Contact" path="/contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
