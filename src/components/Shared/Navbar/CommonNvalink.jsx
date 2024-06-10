import {  NavLink } from "react-router-dom";

const CommonNvalink = ({destination,pagename}) => {
    return (
        <NavLink
            to={destination}
            className={({ isActive }) =>
                ` px-4 py-1 text-sm font-semibold  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? 'bg-gray-900  text-white' : 'text-gray-950'
                }`
              }
            >
       
            {pagename}
        </NavLink>
    );
};

export default CommonNvalink;