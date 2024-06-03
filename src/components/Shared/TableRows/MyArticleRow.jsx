import { Link } from "react-router-dom";
import DeclinedPopup from "../Modal/DeclinedPopup";
import { useState } from "react";


const MyArticleRow = ({ article, index }) => {
    const { _id, title, status, isPremium,decline} = article
    const [isOpen,setIsOpen]=useState(false)
    const closeModal=()=>{
        setIsOpen(false)
    }
    return (
        <tr>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{index + 1}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{title}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <Link to={`/article-details/${_id}`} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>details</span>
                </Link>
                {/* Update Modal */}
            </td>
            {/* status */}
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{status==="Decline"?<button onClick={()=>setIsOpen(true)} className="bg-red-200 px-2 py-[2px] rounded-full">{status}</button>:status}</p>
                <DeclinedPopup isOpen={isOpen} closeModal={closeModal} decline={decline}></DeclinedPopup>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{isPremium}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Update</span>
                </span>
                {/* Update Modal */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Delete</span>
                </span>
                {/* Delete modal */}
            </td>
           

        </tr>

    );
};

export default MyArticleRow;