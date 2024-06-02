import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUserRow = ({ singleUser, index,refetch }) => {
    const { name, email, photo, role } = singleUser
    const axiosSecure=useAxiosSecure()
    const handelAdmin = async (email) => {
        try {
            const res=axiosSecure.patch(`/create-add-user/${email}`,{status:"admin"})
            refetch()
            console.log(res)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <tr>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="avatar">
                    <div className="w-8 h-8 rounded-full">
                        <img className=" rounded-full" src={photo} />
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
            </td>

            {/* status */}
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{role}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button onClick={() => handelAdmin(singleUser?.email)} className='relative'>Make Admin</button>
                </span>
                {/* Update Modal */}
            </td>
        </tr>

    );
};

export default AllUserRow;