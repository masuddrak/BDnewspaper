import { useMutation } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";

const ArticleDetails = () => {
    const { data } = useLoaderData()
    const { _id, title, description, image, viewCount } = data || {}
    const axiosSecure = useAxiosSecure()
    // const { mutateAsync } = useMutation({
    //     mutationFn: async (oldData) => {
    //         const { data } = await axiosSecure.put(`/add-count/${_id}`, oldData)
    //         return data
    //     },
    // })
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
    }, [_id,data])
    return (
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{viewCount}</p>
        </div>
    );
};

export default ArticleDetails;