/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import './NavButton.css';

function Button({ title, link }) {
  return (
    <div className="mt-8 lg:mt-0">
      <form className="sm:flex py-2 gap-2">
        <label htmlFor="emailAddress" className="sr-only">
          Email address
        </label>
        <input
          id="emailAddress"
          name="emailAddress"
          type="email"
          autoComplete="email"
          required
          className="py-3 border px-4 border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white  rounded-md"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="z-50 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        >
          <div className="z-10 mt-3 rounded-md sm:mt-0 sm:flex-shrink-0">
            Notify Me
          </div>
        </button>
      </form>
      <p className="mt-3 text-sm text-gray-300 ">
        We care about the protection of your data. Read our
        <Link to={`${link}`}>{title}</Link>
      </p>
    </div>
  );
}

export default Button;
