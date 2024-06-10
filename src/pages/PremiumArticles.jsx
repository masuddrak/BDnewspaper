import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Article from "../components/Shared/Cards/Article";
import { Helmet } from "react-helmet-async";

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
        <section >
            <Helmet>
                <title>Premium Article</title>
            </Helmet>
            <div className="md:grid grid-cols-4 gap-5">
                {
                    allArticles.map(article => <Article key={article._id} article={article}></Article>)
                }
            </div>
        </section>
    );
};

export default PremiumArticles;