import { Link } from "react-router-dom";

const CommonNvalink = ({destination,pagename}) => {
    return (
        <Link
            to={destination}
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
        >
            {pagename}
        </Link>
    );
};

export default CommonNvalink;