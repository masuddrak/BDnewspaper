const AdminArticleRow = ({ article, index }) => {
    const { title,userInfo,date,status,publisher } = article || {}
    console.log(article)
    return (
        <tr>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{index + 1}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{title}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{userInfo.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{userInfo.email}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="avatar">
                    <div className="w-8 h-8 rounded-full">
                        <img className=" rounded-full" src={userInfo.photo} />
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{new Date(date).toLocaleString() }</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{publisher}</p>
            </td>
            {/* status */}


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button className='relative'>APPROVE</button>
                </span>
                {/* Update Modal */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button className='relative'>DECLINE</button>
                </span>
                {/* Update Modal */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button className='relative'>DELETE</button>
                </span>
                {/* Update Modal */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button className='relative'>PREMIUM</button>
                </span>
                {/* Update Modal */}
            </td>
        </tr>
    );
};

export default AdminArticleRow;