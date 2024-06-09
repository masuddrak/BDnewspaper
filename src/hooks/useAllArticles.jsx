import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";


const useAllArticles = (selectedPage,perpageItem) => {
    const axiosCommon = useAxiosCommon()
    const { data: allArticles = [],refetch,isLoading } = useQuery({
        queryKey: ["all-articles",selectedPage,perpageItem],
        queryFn: async () => {
            const { data } = await axiosCommon(`/all-articles?page=${selectedPage}&size=${perpageItem}`)
            return data
        }
    })
    return {allArticles,refetch,isLoading}
};


export default useAllArticles;