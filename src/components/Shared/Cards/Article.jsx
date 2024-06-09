import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";

const Article = ({ article }) => {
    const { _id, title, description, image, date, viewCount, isPremium, publisher } = article

    return (
        <Link to={`/article-details/${_id}`} className={`card card-compact relative  bg-base-100 border-b-[1px] ${isPremium === "premium" ? "border-1 border-gray-800" : ""}`}>
            <figure><img src={image} alt="Shoes" className="h-[200px] hover:opacity-85 transition-all w-full object-cover" /></figure>
            <div className="card-body px-2">
                    <div className="card-title hover:underline text-lg primary-text font-semibold">{title ? title.length > 40 ? <div>
                        {title.slice(0, 40)}..
                        
                    </div> : title : title}</div>
            
                <div className="my-4 text-gray-600 text-sm">{description ? description.length > 200 ? <div>
                    {description.slice(0, 150)}..
                    <a className=" underline text-black">Read More</a>
                </div> : description : description}</div>
                <div className="flex   gap-3 mb-3">
                    <p>{publisher}</p>
                    <p className="text-gray-600 ">{new Date(date).toDateString()}</p>
                    <p className="text-gray-600 flex items-center gap-1"><IoEyeSharp></IoEyeSharp>{viewCount}</p>
                </div>
            </div>
        </Link>
    );
};

export default Article;