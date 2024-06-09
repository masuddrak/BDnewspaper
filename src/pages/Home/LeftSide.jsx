import { Link } from "react-router-dom";
import useSlideArticles from "../../hooks/useSlideArticles";


const LeftSide = () => {
    const { allArticles } = useSlideArticles()
    return (
        <div>
            {
                allArticles.slice(0, 3).map(article => <div key={article._id}>
                    <Link to={`/article-details/${article._id}`} className="card card-compact   bg-base-100 border-b-[1px]">
                        <div style={{
                            backgroundImage: `url(${article.image})`
                        }} className="h-[150px] bg-no-repeat  hover:opacity-85 transition-all w-full bg-cover object-cover top-0">

                        </div>
                        <div className="card-body px-2">

                            <h2 className="card-title hover:underline text-lg primary-text font-semibold">
                                {article.title}</h2>

                            <div className="my-4 text-gray-600 text-sm">{article.description ? article.description.length > 200 ? <div>
                                {article.description.slice(0, 150)}..
                                <a className=" underline text-black">Read More</a>
                            </div> : article.description : article.description}</div>
                        </div>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default LeftSide;