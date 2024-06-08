import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";


const useApproveArticles = ({publisher,tag}) => {
    const axiosCommon = useAxiosCommon()
    const { data: approveArticles = [], refetch,isLoading } = useQuery({
        queryKey: ["all-approve-articles"],
        queryFn: async () => {
            const { data } = await axiosCommon(`/all-approve-articles?findPublisher=${publisher}&findTag=${tag}`)
            return data
        }
    })
console.log(publisher,tag)
    return { approveArticles, refetch,isLoading }
};

export default useApproveArticles;