import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DeclineModal from "../Modal/DeclineModal";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";
const AdminArticleRow = ({ article, index, refetch }) => {
    const { _id, title, userInfo, date, status, publisher, isPremium } = article || {}
    const axiosSecure = useAxiosSecure()
    const [isOpen, setIsOpen] = useState(false)
    // delete article
    const handelDeleteArticle = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${title}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
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
    // handel premium
    const handelPremium = async (id) => {
        try {
            const {data} = await axiosSecure.patch(`/isPremium/${id}`, { isPremium: "premium" })
            if(data.acknowledged){
                toast.success('Premium Successful')
            }
            refetch()
        } catch (error) {
            toast.error(error.message)
        }
    }
    // handel decline status
    const closeModal = () => {
        setIsOpen(false)
    }
    const handelDecline = async (cours) => {
        try {
            const res = await axiosSecure.patch(`/approve/${_id}`, { status: "Decline" })
            console.log(res)
            const decline = await axiosSecure.put(`/decline-status/${_id}`, { decline: cours })
            console.log(decline)
            refetch()
        } catch (error) {
            console.log(error.message)
        }
    }
    // handel approve buton
    const handelApprove = async (id) => {
        try {
            const {data} = await axiosSecure.patch(`/approve/${id}`, { status: "published" })
            if(data.acknowledged){
                toast.success('published Successful')
            }
            refetch()
        } catch (error) {
            toast.error(error.message)
        }
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
                <p className='text-gray-900 whitespace-no-wrap'>{new Date(date).toLocaleString()}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{publisher}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{isPremium}</p>
            </td>
            {/* status */}


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button onClick={() => handelApprove(_id)} className='relative'>APPROVE</button>
                </span>
                {/* Update Modal */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button onClick={() => setIsOpen(true)} className='relative'>DECLINE</button>
                    <DeclineModal isOpen={isOpen} closeModal={closeModal} handelDecline={handelDecline}></DeclineModal>
                </span>
                {/* Update Modal */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button onClick={() => handelDeleteArticle(_id)} className='relative'>DELETE</button>
                </span>
                {/* Update Modal */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <button onClick={() => handelPremium(_id)} className='relative'>PREMIUM</button>
                </span>
                {/* Update Modal */}
            </td>
        </tr>
    );
};

export default AdminArticleRow;