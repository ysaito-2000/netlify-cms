/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import "./footer.css";
import DiscordSVG2 from "../../assets/discordWordmark.svg";

const Footer = () => (
  <div style={{ width: "100vw" }} className="bg-black w-full">
    <footer
      style={{ width: "100vw", fontFamily: "Poppins" }}
      className="z-40 h-0 bg-black text-gray-800 text-sm"
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading text-gray-800" className="sr-only">
        Footer
      </h2>
      <div className="bg-black sm:px-6 lg:py-8 right-0 w-full ">
        <div className="lg:grid xl:grid-cols-4 col-span-8 w-full">
          <div className=" bg-black grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="mt-12 py-8 md:mt-0">
              <h3 className="text-sm font-base text-gray-100 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4 text-xs font-light text-gray-800">
                <Link
                  to="/terms-of-use"
                  sx={{
                    color: "#f0f0f0",
                    fontSize: 16,
                  }}
                >
                  Terms of Use
                </Link>
                <br />
                <Link
                  to="/security-statement"
                  sx={{
                    color: "#f0f0f0",
                    fontSize: 16,
                  }}
                >
                  Security Statement
                </Link>
                <br />
                <Link
                  to="/privacy-notice"
                  sx={{
                    color: "#f0f0f0",
                    fontSize: 16,
                  }}
                >
                  Privacy Notice
                </Link>
              </ul>
            </div>
            <div className="mt-12 mr-4 py-8 md:mt-0">
              <h3 className="text-sm font-base text-gray-100 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4 text-xs font-light text-gray-800">
                <Link
                  to="/terms-of-use"
                  sx={{
                    color: "#f0f0f0",
                    fontSize: 16,
                  }}
                >
                  Terms of Use
                </Link>
                <br />
                <Link
                  to="/security-statement"
                  sx={{
                    color: "#f0f0f0",
                    fontSize: 16,
                  }}
                >
                  Security Statement
                </Link>
                <br />
                <Link
                  to="/privacy-notice"
                  sx={{
                    color: "#f0f0f0",
                    fontSize: 16,
                  }}
                >
                  Privacy Notice
                </Link>
              </ul>
            </div>
          </div>
          <div className="mt-12 py-8 md:mt-0">
            <h3 className="text-sm font-base text-gray-100 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4 font-light text-xs text-gray-800">
              <Link
                to="/terms-of-use"
                sx={{
                  color: "#f0f0f0",
                  fontSize: 16,
                }}
              >
                Terms of Use
              </Link>
              <br />
              <Link
                to="/security-statement"
                sx={{
                  color: "#f0f0f0",
                  fontSize: 16,
                }}
              >
                Security Statement
              </Link>
              <br />
              <Link
                to="/privacy-notice"
                sx={{
                  color: "#f0f0f0",
                  fontSize: 16,
                }}
              >
                Privacy Notice
              </Link>
            </ul>
          </div>
          <div className="mt-8 xl:mt-0">
            <div className="m-auto p-8 flex justify-center">
              <a
                className="block text-sm font-base text-gray-800 hover:text-indigo-700 tracking-wider"
                href="https://discord.gg/SfGtTh5qXZ"
              >
                <DiscordSVG2 className="border-radius p-2 w-64" />
              </a>
              <span className="inline-block m-auto">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm font-base text-gray-600 hover:text-indigo-700 tracking-wider"
                  href="https://discord.gg/SfGtTh5qXZ"
                >
                  Join the discussion on Discord{" "}
                </a>
              </span>
              <div className="block text-sm font-base text-gray-800 hover:text-indigo-700 tracking-wider"></div>
            </div>
          </div>
        </div>
        <hr className="space-y-8 py-4" />
        <span
          sx={{ maxWidth: "600px" }}
          className="mt-8 text-base text-gray-100 md:mt-0 md:order-1"
        >
          <p
            sx={{ maxWidth: "600px" }}
            className="mt-8 text-base text-gray-100 md:mt-0 md:order-1 whitespace-normal"
          >
            &copy;2020-2021 Hakkei Co. LLC. All rights reserved. Hakkei, Usbnex,
            Ryval, are registered trademarks of Hakkei Co. LLC. Terms and
            conditions, features, support, pricing, and service options subject
            to change without notice.
          </p>
        </span>
        <div className="mt-8 text-base text-gray-100 md:mt-0 md:order-1 space-y-4">
          <br></br>
          By accessing and using this page you agree to the{" "}
          <Link className="text-gray-400" to="/privacy-notice">
            Terms and Conditions.
          </Link>
        </div>
      </div>
      <hr />
    </footer>
  </div>
);

export default Footer;
