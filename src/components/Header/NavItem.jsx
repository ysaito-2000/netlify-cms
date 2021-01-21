import React from 'react';
import { Link } from "gatsby"

function NavItem({title, path}) {
  return (
    <Link to={path} className="font-medium text-gray-500 hover:text-gray-900">
      {title}
    </Link>
  )
}

export default NavItem;
