import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSIngleuser = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: singleUser = {},isLoading } = useQuery({
        queryKey: ["single-user", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const {data} =await axiosSecure(`/single-user/${user?.email}`)
            return data
        }
    })
    return { singleUser,isLoading }

};

export default useSIngleuser;