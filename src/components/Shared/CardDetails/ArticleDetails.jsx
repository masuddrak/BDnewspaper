
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useSIngleuser from "../../../hooks/useSIngleuser";
import { IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import useAllArticles from "../../../hooks/useAllArticles";
import Article from "../Cards/Article";



const ArticleDetails = () => {
    const { allArticles } = useAllArticles()

    const { data } = useLoaderData()
    const { _id, title, description, image, viewCount, isPremium, date, publisher } = data || {}
    const axiosSecure = useAxiosSecure()
    // varify premium user
    const { user, loading } = useAuth()
    const { singleUser, isLoading } = useSIngleuser()
    const location = useLocation()
    // varify premium user
    useEffect(() => {
        try {
            const countIncrement = async (data) => {
                const res = await axiosSecure.patch(`/add-count/${_id}`, data)
                console.log(res)
            }
            countIncrement(data)
        } catch (error) {
            console.log(error.message)
        }
    }, [_id, data])


    const today = (new Date()).getTime()
    if (loading || isLoading) return <LoadingSpinner />

    if (isPremium === "no" && user) {
        return (
            <div className="md:grid grid-cols-4 gap-10">
                <div className="col-span-3">
                    <div className="space-y-2 mb-4">
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-gray-600 ">{new Date(date).toDateString()}</p>
                                <p className="text-sm flex">{publisher} | <span className="text-neutral-500 mr-1">BD Newspaper |  </span><span className="text-gray-600 flex items-center gap-1 "><IoEyeSharp></IoEyeSharp>{viewCount}</span></p>

                            </div>
                            <div>
                                <p className="flex gap-1 items-center">share <IoMdShare></IoMdShare></p>
                            </div>
                        </div>
                    </div>
                    <img src={image} alt="" className="w-full" />
                    <p className="mt-2">{description}</p>
                </div>
                <div>
                    <div>
                        {
                            allArticles.filter(article=>article._id !==_id)?.map(article => <Article key={article._id} article={article}></Article>)
                        }
                    </div>
                </div>
            </div>
        )
    }
    else if (user && isPremium === "premium" && singleUser.role === "premium" && singleUser.date > today) {
        return (
            <div className="w-4/6 mx-auto">
                <div>
                    <img src={image} alt="" />
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{viewCount}</p>
                </div>
            </div>
        )
    }
    else {
        return <Navigate to='/subscription' state={location.pathname} replace='true' />
    }



};

export default ArticleDetails;