import {  NavLink } from "react-router-dom";

const CommonNvalink = ({destination,pagename}) => {
    return (
        <NavLink
            to={destination}
            className={({ isActive }) =>
                ` px-4 py-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                }`
              }
            >
       
            {pagename}
        </NavLink>
    );
};

export default CommonNvalink;