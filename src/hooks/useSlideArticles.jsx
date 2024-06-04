import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
const useSlideArticles = () => {
    const axiosCommon = useAxiosCommon()
    const { data: allArticles = [],refetch } = useQuery({
        queryKey: ["slider-articles"],
        queryFn: async () => {
            const { data } = await axiosCommon("/slide-articles")
            return data
        }
    })
    return {allArticles,refetch}
};


export default useSlideArticles;