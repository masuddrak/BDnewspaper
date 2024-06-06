import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useAllPubliser = () => {
    const axiosCommon=useAxiosCommon()
   const {data:publishers=[]}=useQuery({
    queryKey:["all-publisher"],
    queryFn:async()=>{
        const {data}=await axiosCommon("/publiser")
        return data
    }
   })
   return {publishers}
};

export default useAllPubliser;