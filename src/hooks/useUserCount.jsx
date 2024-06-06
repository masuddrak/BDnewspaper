import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";


const useUserCount = () => {
    const axiosCommon = useAxiosCommon()
    const { data: userCount ={} } = useQuery({
        queryKey: ["userCount"],
        queryFn: async () => {
            const { data } = await axiosCommon("/user-counter")
            return data
        }
    })
    return { userCount }
};

export default useUserCount;