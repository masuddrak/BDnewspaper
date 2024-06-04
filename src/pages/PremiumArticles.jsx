import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Article from "../components/Shared/Cards/Article";

const PremiumArticles = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allArticles = [], } = useQuery({
        queryKey: ["premium-articles"],
        queryFn: async () => {
            const { data } = await axiosSecure(`/premium-articles`)
            return data
        }
    })
    console.log(allArticles)
    return (
        <section className="w-5/6 mx-auto">
            
        <div className="grid grid-cols-4 gap-5">
            {
                allArticles.map(article => <Article key={article._id} article={article}></Article>)
            }
        </div>
    </section>
    );
};

export default PremiumArticles;