import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()
    const { data: allUsers = [],refetch } = useQuery({
        queryKey: ["allUsers", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure(`/all-users/${user.email}`)
            return data
        }
    })
    return { allUsers,refetch }
};

export default useAllUsers;