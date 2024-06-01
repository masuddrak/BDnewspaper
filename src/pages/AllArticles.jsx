
import Article from "../components/Shared/Cards/Article";
import useAllArticles from "../hooks/useAllArticles";

const AllArticles = () => {
    const { allArticles } = useAllArticles()
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

export default AllArticles;