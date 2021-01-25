/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "gatsby";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

function Banner({ text, bg }) {
  return (
    <div
      sx={{
        background: bg ? bg : "inherit",
      }}
      className="py-4 bg-indigo-600 w-full"
    >
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="w-24">
              <AllInclusiveIcon sx={{ width: "16rem" }} />
            </span>
            <p sx={{ margin: "0 4rem" }}  className="ml-3 text-white">
              <span className="md:hidden">{text}</span>
              <span className="hidden md:inline">{text}</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <Link
              to="/"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
