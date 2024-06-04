import { Link } from "react-router-dom";
import DeclinedPopup from "../Modal/DeclinedPopup";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const MyArticleRow = ({ article, index, refetch }) => {
    const { _id, title, status, isPremium, decline } = article
    const [isOpen, setIsOpen] = useState(false)
    const axiosSecure=useAxiosSecure()
    const closeModal = () => {
        setIsOpen(false)
    }
    const handelDeleteArticle = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${title}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/delete-article/${id}`)
                    console.log(res)
                    refetch()
                } catch (error) {
                    console.log(error.message)
                }
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

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
                <p className='text-gray-900 whitespace-no-wrap'>{status === "Decline" ? <button onClick={() => setIsOpen(true)} className="bg-red-200 px-2 py-[2px] rounded-full">{status}</button> : status}</p>
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
                    <Link to={`/upadte-article/${_id}`} className='relative'>Update</Link>

                </span>
                {/* Update Modal */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <button onClick={()=>handelDeleteArticle(_id)} className='relative'>Delete</button>
                </span>
                {/* Delete modal */}
            </td>


        </tr>

    );
};

export default MyArticleRow;