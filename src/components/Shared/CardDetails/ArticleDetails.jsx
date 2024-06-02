
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";

const ArticleDetails = () => {
    const { data } = useLoaderData()
    const { _id, title, description, image, viewCount } = data || {}
    const axiosSecure = useAxiosSecure()
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
    return (
        <div className="w-4/6 mx-auto">
            <div>
                <img src={image} alt="" />
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{viewCount}</p>
            </div>
        </div>
    );
};

export default ArticleDetails;