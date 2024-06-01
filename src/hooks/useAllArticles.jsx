import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";


const useAllArticles = () => {
    const axiosCommon = useAxiosCommon()
    const { data: allArticles = [] } = useQuery({
        queryKey: ["all-articles"],
        queryFn: async () => {
            const { data } = await axiosCommon("/all-articles")
            return data
        }
    })
    return {allArticles}
};


export default useAllArticles;