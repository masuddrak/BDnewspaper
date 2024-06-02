import { Link, NavLink } from "react-router-dom";

const CommonNvalink = ({destination,pagename}) => {
    return (
        <NavLink
            to={destination}
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
        >
            {pagename}
        </NavLink>
    );
};

export default CommonNvalink;