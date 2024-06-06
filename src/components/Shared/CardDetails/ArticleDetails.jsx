
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useSIngleuser from "../../../hooks/useSIngleuser";

const ArticleDetails = () => {
    const { data } = useLoaderData()
    const { _id, title, description, image, viewCount, isPremium } = data || {}
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