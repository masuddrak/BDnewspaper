import { useEffect, useState } from "react";
import Article from "../components/Shared/Cards/Article";
import useAllPubliser from "../hooks/useAllPubliser";
import useApproveArticles from "../hooks/useApproveArticles";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { allTgas } from "../utils/tags";

const AllArticles = () => {
    const [articles, setApproveArticles] = useState([])
    const [publisher, setPublisher] = useState("")
    const [tag, setTag] = useState("")
    const [searchText,setSearchText]=useState("")
    // const { approveArticles, isLoading } = useApproveArticles({publisher,tag})
    const { publishers } = useAllPubliser()
    const axiosCommon = useAxiosCommon()

    useEffect(() => {
        (async () => {
            const { data } = await axiosCommon(`/all-approve-articles?findPublisher=${publisher}&findTag=${tag}&searchText=${searchText}`)
            console.log(data)
            setApproveArticles(data)
        })()
    }, [tag, publisher, axiosCommon,searchText])


    const tags = allTgas()

    // if (isLoading) {
    //     return <LoadingSpinner></LoadingSpinner>
    // }
    const handelSearch = (e) => {
        e.preventDefault()
        const searchTitle = e.target.title.value
        setSearchText(searchTitle)
    }
    console.log(searchText)
    return (
        <section className="w-5/6 mx-auto">
            <div className="flex gap-3 my-5">
                <div>
                    <p>Publisher sort</p>
                    <select className="border border-1 border-gray-900"
                        onChange={(e) => setPublisher(e.target.value)}
                    >
                        {
                            publishers.map(publisher => <option key={publisher._id} value={publisher.name}>{publisher.name}</option>)
                        }
                    </select>
                </div>
                <div>
                    <p>Tag sort</p>
                    <select className="border border-1 border-gray-900"
                        onChange={(e) => setTag(e.target.value)}
                    >
                        {
                            tags.map(tag => <option key={tag.id} value={tag.name}>{tag.name}</option>)
                        }
                    </select>
                </div>
                <div>
                    <form onSubmit={handelSearch}>
                        <p>Search Title</p>
                        <input type="text" name="title" placeholder="type title" className="px-2 border border-1 border-gray-900 " />
                        <input type="submit"  value="search" className="bg-gray-800 text-white ml-1 px-1" />
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-5">
                {
                    articles?.map(article => <Article key={article._id} article={article}></Article>)
                }
            </div>
        </section>
    );
};

export default AllArticles;